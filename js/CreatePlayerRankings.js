const TABLE = document.getElementById("playerListingBody");
let rank = 0;

function CreateTableRow(player, currentDay) {
    let accent = "607090"; // player.accentColor.substring(1)
    const accentRGB = parseInt(accent, 16);
    const luma = GetAccentLuminosity(accentRGB);
    // const shiftedAccent = ShiftAccentColor(parseInt(accent, 16), 20);
    if (player.priorRanks.length > 61) {
        if (player.rating == player.priorRatings[currentDay - 60])
            return document.createElement("div");
    }
    
    if (player.priorRanks.length > 31) {
        if (player.rating == player.priorRatings[currentDay - 30])
            accent = "808080";
    }

    rank++;

    let accentBase = "#fdfdfd";
    let rankUpAccent = "#33dd22";
    let rankDownAccent = "#772233";

    if(((accentRGB >> 16) & 0xff) > 127 && ((accentRGB >> 0) & 0xff) > 195) {
        rankDownAccent = "#772233";
    }

    if (luma > 127) {
        rankUpAccent = "#337722";
        rankDownAccent = "#772233";
        accentBase = "#404040";
    }

    const tableListing = document.createElement("tr");
    tableListing.setAttribute("class", "playerListing");
    tableListing.setAttribute("style", "background-color:#" + accent);
    tableListing.setAttribute("onclick", "location.href='playerpage.html?playerName=" + player.name + "'")

    const rankingNumber = document.createElement("td");
    rankingNumber.setAttribute("class", "playerRankingInfo")
    rankingNumber.setAttribute("id", "rankingNumber")
    rankingNumber.setAttribute("style", "color:" + accentBase);
    rankingNumber.textContent = "#" + rank;

    const rankChange = document.createElement("td");
    rankChange.setAttribute("class", "playerRankingInfo");
    rankChange.setAttribute("id", "rankChange");

    const rankDifference = CompareCurrentRank(player, currentDay)

    if (rankDifference > 0) {
        rankChange.innerHTML = "🠅" + rankDifference;
        rankChange.setAttribute("style", "color:" + rankUpAccent)
    }

    if (rankDifference < 0) {
        rankChange.innerHTML = "🠇" + Math.abs(rankDifference);
        rankChange.setAttribute("style", "color:" + rankDownAccent)
    }

    const wordleRating = document.createElement("td");
    wordleRating.setAttribute("class", "playerRankingInfo");
    wordleRating.setAttribute("id", "wordleRating");
    wordleRating.setAttribute("style", "color:" + accentBase);
    wordleRating.textContent = Math.round(player.rating) + "wr";

    const heldRankOne = document.createElement("td");
    heldRankOne.setAttribute("class", "playerRankingInfo");
    heldRankOne.setAttribute("id", "heldNumberOne");
    heldRankOne.setAttribute("style", "color:" + accentBase);
    heldRankOne.textContent = player.timesTakenFirst;

    const playerIcon = document.createElement("td");
    playerIcon.setAttribute("class", "playerIcons");

    const playerImage = document.createElement("img");
    playerImage.setAttribute("class", "playerRankingInfo");
    playerImage.setAttribute("id", "playerIcon");
    
    playerImage.setAttribute("src", "profilePictures/" + player.name + ".png");

    const playerName = document.createElement("p");
    playerName.setAttribute("class", "playerRankingInfo");
    playerName.setAttribute("id", "playerName");
    playerName.setAttribute("style", "color:" + accentBase);
    playerName.textContent = player.name;

    playerIcon.appendChild(playerImage);
    playerIcon.appendChild(playerName);
    
    tableListing.appendChild(rankingNumber);
    tableListing.appendChild(rankChange);
    tableListing.appendChild(playerIcon);
    tableListing.appendChild(wordleRating);
    tableListing.appendChild(heldRankOne);

    return tableListing;
}

function GetAccentLuminosity(accentRGB) {
    const red = (accentRGB >> 16) & 0xff;
    const green = (accentRGB >> 8) & 0xff;
    const blue = accentRGB & 0xff;

    return 0.22 * red + 0.715 * green + 0.072 * blue;
}

function ShiftAccentColor(accentRGB, shift) {
    const red = (accentRGB >> 16) & 0xff;
    const green = (accentRGB >> 8) & 0xff;
    const blue = accentRGB & 0xff;

    let shiftedRed = Math.min(Math.max(1, (red + shift)), 255).toString(16);
    let shiftedGreen = Math.min(Math.max(1, (green + shift)), 255).toString(16);
    let shiftedBlue = Math.min(Math.max(1, (blue + shift)), 255).toString(16);

    shiftedRed = shiftedRed.length < 2 ? "0" + shiftedRed : shiftedRed;
    shiftedGreen = shiftedGreen.length < 2 ? "0" + shiftedGreen : shiftedGreen;
    shiftedBlue = shiftedBlue.length < 2 ? "0" + shiftedBlue : shiftedBlue;
    return "#" + shiftedRed + shiftedGreen + shiftedBlue;
}

function CompareCurrentRank(player, currentDay) {
    const rankLastMonth = player.priorRanks[currentDay - 14];
    const currentRank = player.priorRanks[currentDay];
    console.log(currentRank);
    return rankLastMonth - currentRank;
}

function CreateRankingsTable(playersArr, currentDay) {
    playersArr.forEach(player => {
        TABLE.appendChild(CreateTableRow(player, currentDay));
    });
}

export { CreateRankingsTable }
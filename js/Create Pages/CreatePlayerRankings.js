import { CURRENT_SYSTEM } from "../Globals.js";

const TABLE = document.getElementById("playerListingBody");
let rank = 0;

function CreateTableRow(player, ratingSystemIteration) {
    let playerRatingDisplay = ratingSystemIteration === CURRENT_SYSTEM ? player.rating : player.altRating[ratingSystemIteration];

    let accent = "607090";
    if (ratingSystemIteration !== CURRENT_SYSTEM)
        accent = "609070"
    
    if (player.priorRanks.length > 61) {
        if (playerRatingDisplay == player.priorRatings[player.priorRatings.length - 60])
            return document.createElement("div");
    }
    
    if (player.priorRanks.length > 31) {
        if (playerRatingDisplay== player.priorRatings[player.priorRatings.length - 30])
            accent = "808080";
    }

    let taggedCount = 0;
    let daysCounter = 0;

    player.tags.reverse();
    player.tags.forEach(tagged => {
        daysCounter++;
        if (tagged && daysCounter <= 30) {
            taggedCount++;
            accent = "772233";
        }
    });

    if (taggedCount >= 1)
        accent = "772233";
    if (taggedCount >= 3)
        return document.createElement("div");


    rank++;

    let accentBase = "#fdfdfd";
    let rankUpAccent = "#33dd22";
    let rankDownAccent = "#772233";

    if(taggedCount > 0) {
        rankDownAccent = "#dd2233";
    }

    const tableListing = document.createElement("tr");
    tableListing.setAttribute("class", "playerListing");
    tableListing.setAttribute("style", "background-color:#" + accent);
    tableListing.setAttribute("onclick", "location.href='playerpage.html?playerName=" + player.name + "&ratingSystem=" + ratingSystemIteration + "'");

    const rankingNumber = document.createElement("td");
    rankingNumber.setAttribute("class", "playerRankingInfo")
    rankingNumber.setAttribute("id", "rankingNumber")
    rankingNumber.setAttribute("style", "color:" + accentBase);
    rankingNumber.textContent = "#" + rank;

    const rankChange = document.createElement("td");
    rankChange.setAttribute("class", "playerRankingInfo");
    rankChange.setAttribute("id", "rankChange");

    const rankDifference = CompareCurrentRank(player)

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
    wordleRating.setAttribute("title", Math.round(playerRatingDisplay * 100) / 100 + "wr");
    wordleRating.textContent = Math.round(playerRatingDisplay) + "wr";

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
    
    if (!player.gifProfilePic)
        playerImage.setAttribute("src", "../profilePictures/" + player.name + ".png");
    else
        playerImage.setAttribute("src", "../profilePictures/" + player.name + ".gif");

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

function CompareCurrentRank(player) {
    let rankLastMonth;
    if (player.priorRanks.length < 14)
        rankLastMonth = player.priorRanks[0];
    else
        rankLastMonth = player.priorRanks[player.priorRanks.length - 15];
    
    const currentRank = player.priorRanks[player.priorRanks.length - 1];
    return rankLastMonth - currentRank;
}

function CreateRankingsTable(playersArr, ratingSystemIteration = CURRENT_SYSTEM) {
    playersArr.forEach(player => {
        TABLE.appendChild(CreateTableRow(player, ratingSystemIteration));
    });
}

export { CreateRankingsTable }
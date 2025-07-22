const TABLE = document.getElementById("playerListingBody");

function CreateTableRow(player, rank, currentDay) {
    const tableListing = document.createElement("tr");
    tableListing.setAttribute("class", "playerListing");
    tableListing.setAttribute("onclick", "location.href='playerpage.html?playerName=" + player.name + "'")

    const rankingNumber = document.createElement("td");
    rankingNumber.setAttribute("class", "playerRankingInfo")
    rankingNumber.setAttribute("id", "rankingNumber")
    rankingNumber.textContent = "#" + rank;

    const rankChange = document.createElement("td");
    rankChange.setAttribute("class", "playerRankingInfo");
    rankChange.setAttribute("id", "rankChange");

    const rankDifference = CompareCurrentRank(player, currentDay)

    if (rankDifference > 0) {
        rankChange.innerHTML = "🠅" + rankDifference;
        rankChange.setAttribute("style", "color:#33dd22")
    }

    if (rankDifference < 0) {
        rankChange.innerHTML = "🠇" + Math.abs(rankDifference);
        rankChange.setAttribute("style", "color:#dd2233")
    }

    const wordleRating = document.createElement("td");
    wordleRating.setAttribute("class", "playerRankingInfo");
    wordleRating.setAttribute("id", "performancePoints");
    wordleRating.textContent = Math.round(player.rating) + "wr";

    const heldRankOne = document.createElement("td");
    heldRankOne.setAttribute("class", "playerRankingInfo");
    heldRankOne.setAttribute("id", "heldNumberOne");
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

function CompareCurrentRank(player, currentDay) {
    const rankLastMonth = player.priorRanks[currentDay - 7];
    const currentRank = player.priorRanks[currentDay - 1];
    console.log(currentRank);
    return rankLastMonth - currentRank;
}

function CreateRankingsTable(playersArr, currentDay) {
    let rank = 0;
    playersArr.forEach(player => {
        rank++;
        TABLE.appendChild(CreateTableRow(player, rank, currentDay));
    });
}

export { CreateRankingsTable }
import { RenderRatingGraph, RenderRankGraph } from "./RenderGraph.js";
const PLAYER_CONTAINER = document.getElementById("playerInformationContainer");

function AddProfilePicture(playerName) {
    const playerImage = document.createElement("img");
    playerImage.setAttribute("class", "playerInformation");
    playerImage.setAttribute("id", "playerProfilePicture");

    playerImage.setAttribute("src", "profilePictures/" + playerName + ".png");

    return playerImage;
}

function CreateHeadingInfo(playerData) {
    const headingInfo = document.createElement("div");
    headingInfo.setAttribute("class", "headingInformation");

    const playerName = document.createElement("a");
    playerName.setAttribute("class", "playerInformation");
    playerName.setAttribute("id", "playerName");
    playerName.textContent = playerData.name;

    headingInfo.appendChild(playerName);

    return headingInfo;
}

function CreateInfoContainer(playerData) {
    const rankInfoContainer = document.createElement("div");
    rankInfoContainer.setAttribute("class", "playerRankInfoContainer");

    const globalRank = document.createElement("div");
    globalRank.setAttribute("class", "playerRankInfo");
    
    const ranktext = document.createElement("p");
    ranktext.setAttribute("class", "rankText");
    ranktext.textContent = "Global Ranking";

    const rankValue = document.createElement("p");
    rankValue.setAttribute("class", "rankValue");

    let date = new Date();
    date.setDate(date.getDate() - playerData.timeSincePeakRank);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const peakRankMonth = months[date.getMonth()];

    rankValue.setAttribute("title", "Highest Rank: #" + playerData.peakRank + " On " + date.getDate() + " " + peakRankMonth + " " + date.getFullYear());
    rankValue.textContent = "#" + playerData.priorRanks[playerData.priorRanks.length - 1];

    globalRank.appendChild(ranktext);
    globalRank.appendChild(rankValue);
    
    const timesHeldRankOne = document.createElement("div");
    timesHeldRankOne.setAttribute("class", "playerRankInfo");
    timesHeldRankOne.setAttribute("id", "scoreRank");
    
    const timesHeldText = document.createElement("p");
    timesHeldText.setAttribute("class", "rankText");
    timesHeldText.textContent = "#1 Count";

    const timesHeldValue = document.createElement("p");
    timesHeldValue.setAttribute("class", "rankValue");
    timesHeldValue.textContent = playerData.timesTakenFirst;

    timesHeldRankOne.appendChild(timesHeldText);
    timesHeldRankOne.appendChild(timesHeldValue);
    
    const scoreRank = document.createElement("div");
    scoreRank.setAttribute("class", "playerRankInfo");
    scoreRank.setAttribute("id", "scoreRank");
    
    const wordleRatingText = document.createElement("p");
    wordleRatingText.setAttribute("class", "rankText");
    wordleRatingText.textContent = "Wordle Rating";

    const wordleRatingValue = document.createElement("p");
    wordleRatingValue.setAttribute("class", "currentRating");
    wordleRatingValue.textContent = Math.round(playerData.rating) + "wr";

    scoreRank.appendChild(wordleRatingText);
    scoreRank.appendChild(wordleRatingValue);
    
    const peakScoreRank = document.createElement("div");
    peakScoreRank.setAttribute("class", "playerRankInfo");
    peakScoreRank.setAttribute("id", "scoreRank");
    
    const peakRatingText = document.createElement("p");
    peakRatingText.setAttribute("class", "rankText");
    peakRatingText.textContent = "Peak Rating";

    const peakRatingValue = document.createElement("p");
    peakRatingValue.setAttribute("class", "peakRating");
    peakRatingValue.textContent = Math.round(playerData.peakRating) + "wr";

    peakScoreRank.appendChild(peakRatingText);
    peakScoreRank.appendChild(peakRatingValue);

    rankInfoContainer.appendChild(globalRank);
    rankInfoContainer.appendChild(timesHeldRankOne);
    rankInfoContainer.appendChild(scoreRank);
    rankInfoContainer.appendChild(peakScoreRank);

    return rankInfoContainer;
}

function CreatePlayerPage(playerData) {
    PLAYER_CONTAINER.appendChild(AddProfilePicture(playerData.name));
    PLAYER_CONTAINER.appendChild(CreateHeadingInfo(playerData));
    PLAYER_CONTAINER.appendChild(CreateInfoContainer(playerData));

    const rankGraph = document.createElement("canvas");
    rankGraph.setAttribute("class", "playerInformation");
    rankGraph.setAttribute("id", "rankGraph");

    const ratingGraph = document.createElement("canvas");
    ratingGraph.setAttribute("class", "playerInformation");
    ratingGraph.setAttribute("id", "ratingGraph");

    PLAYER_CONTAINER.appendChild(rankGraph);
    PLAYER_CONTAINER.appendChild(ratingGraph);

    RenderRankGraph(playerData);
    RenderRatingGraph(playerData);
}

export { CreatePlayerPage }
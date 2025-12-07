import { RenderRatingGraph, RenderRankGraph } from "../Player Calculation/RenderGraph.js";
import { CURRENT_SYSTEM, DATE_OFFSET } from "../Globals.js";
const PLAYER_CONTAINER = document.getElementById("playerInformationContainer");

function AddProfilePicture(playerData) {
    const playerImage = document.createElement("img");
    playerImage.setAttribute("class", "playerInformation");
    playerImage.setAttribute("id", "playerProfilePicture");

    if (!playerData.animatedProfilePicture)
        playerImage.setAttribute("src", "../profilePictures/" + playerData.name + ".png");
    else
        playerImage.setAttribute("src", "../profilePictures/" + playerData.name + ".gif");


    return playerImage;
}

function CreateHeadingInfo(playerData, luma) {
    let accentBase = "#fdfdfd";

    if (luma > 144)
        accentBase = "#404040";

    const headingInfo = document.createElement("div");
    headingInfo.setAttribute("class", "headingInformation");

    const playerName = document.createElement("a");
    playerName.setAttribute("class", "playerInformation");
    playerName.setAttribute("id", "playerName");
    playerName.setAttribute("style", "color:" + accentBase)
    playerName.textContent = playerData.name;

    headingInfo.appendChild(playerName);

    return headingInfo;
}

function CreateInfoContainer(playerData, luma, ratingSystemIteration) {
    const accent = playerData.accentColor.substring(1);
    const hexToInt = parseInt(accent, 16);
    let accentBase = "#dddddd";
    let accentSecondary = "#c8c8c8";

    let ratingAccent = ShiftAccentColor(hexToInt, 40);
    let peakRatingAccent = ShiftAccentColor(hexToInt, 80);

    if (luma > 144) {
        accentBase = "#444444";
        accentSecondary = "#5c5c5c";
        ratingAccent = ShiftAccentColor(hexToInt, -Math.round(luma / 2));
    }

    const rankInfoContainer = document.createElement("div");
    rankInfoContainer.setAttribute("class", "playerRankInfoContainer");
    rankInfoContainer.setAttribute("style", "background-color:" + ShiftAccentColor(hexToInt, -30));

    const globalRank = document.createElement("div");
    globalRank.setAttribute("class", "playerRankInfo");
    
    const ranktext = document.createElement("p");
    ranktext.setAttribute("class", "rankText");
    ranktext.setAttribute("style", "color:" + accentSecondary);
    ranktext.textContent = "Global Ranking";

    const rankValue = document.createElement("p");
    rankValue.setAttribute("class", "rankValue");
    rankValue.setAttribute("style", "color:" + accentBase);

    let date = new Date();
    date.setDate(date.getDate() - playerData.timeSincePeakRank - DATE_OFFSET);
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
    timesHeldText.setAttribute("style", "color:" + accentSecondary);
    timesHeldText.textContent = "#1 Count";

    const timesHeldValue = document.createElement("p");
    timesHeldValue.setAttribute("class", "rankValue");
    timesHeldValue.setAttribute("style", "color:" + accentBase);
    timesHeldValue.textContent = playerData.timesTakenFirst;

    timesHeldRankOne.appendChild(timesHeldText);
    timesHeldRankOne.appendChild(timesHeldValue);
    
    const scoreRank = document.createElement("div");
    scoreRank.setAttribute("class", "playerRankInfo");
    scoreRank.setAttribute("id", "scoreRank");
    
    const wordleRatingText = document.createElement("p");
    wordleRatingText.setAttribute("class", "rankText");
    wordleRatingText.setAttribute("style", "color:" + accentSecondary);
    wordleRatingText.textContent = "Wordle Rating";

    let ratingForDisplay = ratingSystemIteration === CURRENT_SYSTEM ? playerData.rating : playerData.altRating[ratingSystemIteration];

    const wordleRatingValue = document.createElement("p");
    wordleRatingValue.setAttribute("class", "currentRating");
    wordleRatingValue.setAttribute("style", "color:" + ratingAccent);
    wordleRatingValue.textContent = Math.round(ratingForDisplay) + "wr";

    scoreRank.appendChild(wordleRatingText);
    scoreRank.appendChild(wordleRatingValue);
    
    const peakScoreRank = document.createElement("div");
    peakScoreRank.setAttribute("class", "playerRankInfo");
    peakScoreRank.setAttribute("id", "scoreRank");
    
    const peakRatingText = document.createElement("p");
    const peakRatingValue = document.createElement("p");

    console.log(screen.width);
    if (screen.width > 1080) {
        peakRatingText.setAttribute("class", "rankText");
        peakRatingText.setAttribute("style", "color:" + accentSecondary);
        peakRatingText.textContent = "Peak Rating";

        peakRatingValue.setAttribute("class", "peakRating");
        peakRatingValue.setAttribute("style", "color:" + peakRatingAccent);
        peakRatingValue.textContent = Math.round(playerData.peakRating) + "wr";
    }

    peakScoreRank.appendChild(peakRatingText);
    peakScoreRank.appendChild(peakRatingValue);

    rankInfoContainer.appendChild(globalRank);
    rankInfoContainer.appendChild(timesHeldRankOne);
    rankInfoContainer.appendChild(scoreRank);
    rankInfoContainer.appendChild(peakScoreRank);

    return rankInfoContainer;
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

function CreatePlayerPage(playerData, ratingSystemIteration = CURRENT_SYSTEM) {
    const accent = playerData.accentColor.substring(1);
    const hexToInt = parseInt(accent, 16);

    document.body.style["backgroundColor"] = ShiftAccentColor(hexToInt, -75)

    PLAYER_CONTAINER.setAttribute("style", "background-color:" + ShiftAccentColor(hexToInt, -45));
    PLAYER_CONTAINER.style["boxShadow"] = "0px 0px 5px 2px " + ShiftAccentColor(hexToInt, -60)

    const luma = GetAccentLuminosity(hexToInt)
    PLAYER_CONTAINER.appendChild(AddProfilePicture(playerData));
    PLAYER_CONTAINER.appendChild(CreateHeadingInfo(playerData, luma));
    PLAYER_CONTAINER.appendChild(CreateInfoContainer(playerData, luma, ratingSystemIteration));

    const rankGraph = document.createElement("canvas");
    rankGraph.setAttribute("class", "playerInformation");
    rankGraph.setAttribute("id", "rankGraph");
    rankGraph.setAttribute("style", "background-color:" + ShiftAccentColor(hexToInt, -30));

    const ratingGraph = document.createElement("canvas");
    ratingGraph.setAttribute("class", "playerInformation");
    ratingGraph.setAttribute("id", "ratingGraph");
    ratingGraph.setAttribute("style", "background-color:" + ShiftAccentColor(hexToInt, -30));

    PLAYER_CONTAINER.appendChild(rankGraph);
    PLAYER_CONTAINER.appendChild(ratingGraph);

    RenderRankGraph(playerData);
    RenderRatingGraph(playerData);
}

export { CreatePlayerPage }
import { CalculateRatings, playersArr } from "../Player Calculation/CalculateRatings.js";
import { CreatePlayerPage } from "./CreatePlayerPage.js";

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('playerName');
const ratingSystemIteration = parseFloat(urlParams.get('ratingSystem'));

document.title = playerName + "'s Ranking Info"
let playerData;

playersArr.forEach(player => {
    if (player.name == playerName) {
        console.log("Found " + player.name);
        playerData = player;
    }
});

console.log(ratingSystemIteration);
CalculateRatings(ratingSystemIteration);
CreatePlayerPage(playerData, ratingSystemIteration);
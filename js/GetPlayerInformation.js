import { CalculateRatings, playersArr } from "./CalculateRatings.js";
import { CreatePlayerPage } from "./CreatePlayerPage.js";

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('playerName');

document.title = playerName + "'s Ranking Info"
let playerData;

playersArr.forEach(player => {
    if (player.name == playerName) {
        console.log("Found " + player.name);
        playerData = player;
    }
});

CalculateRatings();
CreatePlayerPage(playerData);
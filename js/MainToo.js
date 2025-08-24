import { CalculateRatings, playersArr } from './Player Calculation/CalculateRatings.js';
import { CreateRankingsTable } from './Create Pages/CreatePlayerRankings.js';

const LEADERBOARD_VERSION = document.getElementById("leaderboardVersion");

CreateTable();
LEADERBOARD_VERSION.addEventListener("change", e => {CreateTable()})

function CreateTable() {
    const ratingSystemIteration = LEADERBOARD_VERSION.value;

    CalculateRatings(ratingSystemIteration);
    playersArr.sort(function(a, b) {return b.altRating[ratingSystemIteration] - a.altRating[ratingSystemIteration]});

    CreateRankingsTable(playersArr, ratingSystemIteration);
}
import { CalculateRatings, playersArr } from './Player Calculation/CalculateRatings.js';
import { CreateRankingsTable } from './Create Pages/CreatePlayerRankings.js';

CalculateRatings(0);
playersArr.sort(function(a, b) {return b.altRating - a.altRating});

CreateRankingsTable(playersArr, 0);
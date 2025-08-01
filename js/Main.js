import { CalculateRatings, playersArr } from './CalculateRatings.js';
import { CreateRankingsTable } from './CreatePlayerRankings.js';

CalculateRatings();
playersArr.sort(function(a, b) {return b.rating - a.rating});

CreateRankingsTable(playersArr);
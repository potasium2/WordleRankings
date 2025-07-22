import { CalculateRatings, playersArr } from './CalculateRatings.js';
import { CreateRankingsTable } from './CreatePlayerRankings.js';

const currentDay = CalculateRatings();
playersArr.sort(function(a, b) {return b.rating - a.rating});

CreateRankingsTable(playersArr, currentDay);
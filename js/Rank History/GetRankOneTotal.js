import { CalculateRatings, topRankPlayers } from "../Player Calculation/CalculateRatings.js";
const TOTAL_TIME_TABLE = document.getElementById("totalTime");

function CreateTotalTimeHeld() {
    topRankPlayers.sort((a, b) => b.timeSpentAtPeak - a.timeSpentAtPeak);

    let previousPlayers = [];
    topRankPlayers.forEach(player => {
        if (!previousPlayers.includes(player.name))
            TOTAL_TIME_TABLE.appendChild(CreateTableElements(player.name, player.timeSpentAtPeak));

        previousPlayers.push(player.name);
    });
}

function CreateTableElements(playerName, timeHeld) {
    const tableRow = document.createElement("tr");

    const player = document.createElement("td");
    player.textContent = playerName;

    const timeSpentAtRankOne = document.createElement("td");
    timeSpentAtRankOne.textContent = timeHeld + " Days"

    tableRow.appendChild(player);
    tableRow.appendChild(timeSpentAtRankOne);

    return tableRow;
}

export { CreateTotalTimeHeld }
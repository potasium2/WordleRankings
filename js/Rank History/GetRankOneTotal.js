import { CalculateRatings, topRankPlayers } from "../Player Calculation/CalculateRatings.js";
const TOTAL_TIME_TABLE = document.getElementById("totalTime");

function CreateTotalTimeHeld() {
    topRankPlayers.sort((a, b) => b.timeSpentAtPeak - a.timeSpentAtPeak);

    let previousPlayer = "playerName";
    topRankPlayers.forEach(player => {
        if (player.name !== previousPlayer)
            TOTAL_TIME_TABLE.appendChild(CreateTableElements(player.name, player.timeSpentAtPeak));

        previousPlayer = player.name;
    });
}

function CreateTableElements(playerName, timeHeld) {
    const tableRow = document.createElement("tr");

    const player = document.createElement("td");
    player.textContent = playerName;

    const timeSpentAtRankOne = document.createElement("td");
    timeSpentAtRankOne.textContent = timeHeld

    tableRow.appendChild(player);
    tableRow.appendChild(timeSpentAtRankOne);

    return tableRow;
}

export { CreateTotalTimeHeld }
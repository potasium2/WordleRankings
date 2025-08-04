import { CalculateRatings, topRankPlayers } from "../Player Calculation/CalculateRatings.js";
const RANK_HISTORY_TABLE = document.getElementById("rankHistory");

function CalculateRankHistory() {
    CalculateRatings()

    let previousPlayer = "playerName";
    let dayCounter = 0;
    let daysHeldCounter = 0;
    topRankPlayers.forEach(player => {
        dayCounter++;
        if (player.name == previousPlayer)
            daysHeldCounter++;

        CheckPlayer(player, previousPlayer, dayCounter, daysHeldCounter);

        if (player.name !== previousPlayer)
            daysHeldCounter = 1;

        previousPlayer = player.name;
    });

    const currentRankOne = document.getElementById(topRankPlayers[topRankPlayers.length - 1].name);
    const currentRankOneToDate = document.createElement("td");
    currentRankOneToDate.textContent = SaveDate(topRankPlayers.length);
    currentRankOne.removeAttribute("id");
            
    const currentRankDaysHeld = document.createElement("td");
    currentRankDaysHeld.textContent = daysHeldCounter + " Days";

    currentRankOne.appendChild(currentRankOneToDate);
    currentRankOne.appendChild(currentRankDaysHeld);
}

function CheckPlayer(player, previousPlayer, dayCounter, daysHeld) {
    if (player.name !== previousPlayer) {
        const dateOverTurned = SaveDate(dayCounter);

        const tableRow = document.createElement("tr");
        tableRow.setAttribute("id", player.name)

        const playerName = document.createElement("td");
        playerName.textContent = player.name;

        const fromDate = document.createElement("td");
        fromDate.textContent = dateOverTurned;

        if (dayCounter > 1) {
            const previousPlayerTable = document.getElementById(previousPlayer);
            const previousPlayerToDate = document.createElement("td");
            previousPlayerToDate.textContent = dateOverTurned;
            previousPlayerTable.removeAttribute("id");
            
            const previousPlayerDaysHeld = document.createElement("td");
            previousPlayerDaysHeld.textContent = daysHeld + (daysHeld > 1 ? " Days" : " Day");

            previousPlayerTable.appendChild(previousPlayerToDate);
            previousPlayerTable.appendChild(previousPlayerDaysHeld);
        }
        
        tableRow.appendChild(playerName);
        tableRow.appendChild(fromDate);

        RANK_HISTORY_TABLE.appendChild(tableRow);

        return;
    }
}

function SaveDate(dayCounter) {
    let date = new Date();
    date.setDate(date.getDate() - (topRankPlayers.length - dayCounter));

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    return month + "-" + day + "-" + date.getFullYear();
}

export { CalculateRankHistory }
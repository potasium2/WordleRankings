import { Player } from "./Player.js";
import { CURRENT_SYSTEM } from "../Globals.js";

const startingBase = 0;
// Joined Day 1
const daphne = new Player("Daph", startingBase, "#a040c0");

// Joined Day 2
const lilli = new Player("Lilli 🅱️", startingBase, "#f080f0");
const jude = new Player("JudeSCM", startingBase, "#40d070");
const lucy = new Player("lucy", startingBase, "#a060b0");
const delta = new Player("juanfanl", startingBase, "#8010a0");
const aidan = new Player("Aidan", startingBase, "#a060f0");

// Joined Day 3
const khana = new Player("KHANA", startingBase, "#f0f0a0");
const squiddy = new Player("Squiddy", startingBase, "#f0a040");
const rukir = new Player("Rukir", startingBase, "#2060f0");

// Joined Day 9
const lightning = new Player("ThatLightningBoltPerson", startingBase, "#f080c0");

// Joined Day 14
const lobsterfighter = new Player("lobsterfighter", startingBase, "#b01030");

// Joined Day 16-17
const panda = new Player("olimar sigma", startingBase, "#a080f0");
const stano = new Player("Stanovacuum", startingBase, "#a00040");

// Joined Day 22-24
const potasium = new Player("Noah", startingBase, "#1040b0");
const crackbox = new Player("crackbox", startingBase, "#a0a0a0");
const mario = new Player("the plerg", startingBase, "#f05050");

// Joined Day 28
const creeper = new Player("Creeperman495", startingBase, "#80f080");

// Joined Day 32
const fletch = new Player("Fletchling", startingBase, "#3040f0");
const ghostcowz = new Player("Ghostcowz", startingBase, "#8080f0");

// Joined Day 48-49
const dingus = new Player("Dingus", startingBase, "#f0a080");
const nyfen = new Player("Nyfen", startingBase, "#f04050");

// Joined Day 54-55
const juanfan = new Player("juanfan1", startingBase, "#56a677");
const nidgey = new Player("Nidgey", startingBase, "#801010");
const april = new Player("Bunpril", startingBase, "#80f0f0");

// Joined Day 57
const ben = new Player("BenHeck", startingBase, "#a04010");

// Joined Day 71-76
const brix = new Player("Lando Griffin", startingBase, "#fceea0", true);
const kosa = new Player("Kosa", startingBase, "#0b80a0");
const izuna = new Player("Izuna", startingBase, "#d020a0");
const roily = new Player("Roily", startingBase, "#a01030");
const nappy = new Player("Nappy3", startingBase, "#c05010");

const playersArr = [
    daphne,
    lilli,
    jude,
    lucy,
    delta,
    aidan,
    khana,
    squiddy,
    rukir,
    lightning,
    lobsterfighter,
    panda,
    stano,
    potasium,
    crackbox,
    mario,
    creeper,
    fletch,
    ghostcowz,
    dingus,
    nyfen,
    juanfan,
    nidgey,
    april,
    ben,
    brix,
    kosa,
    izuna,
    roily,
    nappy
];

let topRankPlayers = [];

function SaveRankings(ratingSystemIteration) {
    let rank = 0;

    if (ratingSystemIteration !== CURRENT_SYSTEM) {
        playersArr.sort(function(a, b) {return b.altRating - a.altRating});

        playersArr.forEach(player => {
            if (player.altRating > 0) {
                rank++;

                if (rank == 1)
                    topRankPlayers.push(player);

                player.SaveAlternativeRankingInfo(rank);
            }
        });
    } else {
        playersArr.sort(function(a, b) {return b.rating - a.rating});

        playersArr.forEach(player => {
            if (player.rating > 0) {

                if (player.priorRanks.length > 60) {
                    if (player.rating == player.priorRatings[player.priorRatings.length - 59]) {
                        player.SaveRankingInfo(playersArr.length);
                    } else {
                        rank++;

                        if (rank == 1)
                            topRankPlayers.push(player);

                        player.SaveRankingInfo(rank);
                    }
                } else if (IsPlayerBanned(player)) {
                    player.SaveRankingInfo(playersArr.length);
                } else {
                    rank++;

                    if (rank == 1)
                        topRankPlayers.push(player);

                    player.SaveRankingInfo(rank);
                }
            }
        });
    }
}

function IsPlayerBanned(player) {
    let taggedCount = 0;
    let daysCounter = 0;
    let status = false;

    player.tags.forEach(tagged => {
        daysCounter++;
        if (tagged) {
            taggedCount++;
        } if (taggedCount >= 3 || daysCounter >= 30) {
            return;
        }
    });

    if (taggedCount >= 3)
        status = true;

    return status;
}

const baseRating = 1000;
function CalculateRatings(ratingSystemIteration = CURRENT_SYSTEM) {
    // Day 1: Wordle #1431
    daphne.SetRating(baseRating)

    daphne.DetermineRating(1, 1, 5, 4.6);

    // Day 2: Wordle #1432
    lilli.SetRating(baseRating)
    jude.SetRating(baseRating)
    lucy.SetRating(baseRating)
    delta.SetRating(baseRating)
    aidan.SetRating(baseRating)

    lilli.DetermineRating(1, 5, 4, 5.2);
    jude.DetermineRating(1, 5, 4, 5.2);
    lucy.DetermineRating(1, 5, 4, 5.2);
    delta.DetermineRating(4, 5, 5, 5.2);
    aidan.DetermineRating(5, 5, 7, 5.2);

    // Day 3: Wordle #1433
    khana.SetRating(baseRating);
    squiddy.SetRating(baseRating);
    rukir.SetRating(baseRating);

    khana.DetermineRating(1, 5, 4, 5.6);
    lucy.DetermineRating(2, 5, 4, 5.6);
    squiddy.DetermineRating(2, 5, 5, 5.6);
    rukir.DetermineRating(4, 5, 6, 5.6);
    aidan.DetermineRating(5, 5, 7, 5.6);

    // Day 4: Wordle #1434
    lucy.DetermineRating(1, 3, 3, 4.0);
    delta.DetermineRating(2, 3, 4, 4.0);
    aidan.DetermineRating(3, 3, 6, 4.0);

    // Day 5: Wordle #1435
    aidan.DetermineRating(1, 2, 5, 5.6);
    lucy.DetermineRating(2, 2, 7, 5.6);

    // Day 6: Wordle #1436
    squiddy.DetermineRating(1, 3, 5, 4.3);
    lucy.DetermineRating(1, 3, 5, 4.3);
    aidan.DetermineRating(3, 3, 6, 4.3);
    SaveRankings(ratingSystemIteration);

    // Day 7: Wordle #1437
    lucy.DetermineRating(1, 2, 3, 3.5);
    aidan.DetermineRating(2, 2, 5, 3.5);
    SaveRankings(ratingSystemIteration);

    // Day 8: Wordle #1438
    squiddy.DetermineRating(1, 3, 2, 3.6);
    lucy.DetermineRating(2, 3, 5, 3.6);
    aidan.DetermineRating(3, 3, 6, 3.6);
    SaveRankings(ratingSystemIteration);

    // Day 9: Wordle #1439
    lightning.SetRating(baseRating);

    lucy.DetermineRating(1, 3, 4, 4.2);
    aidan.DetermineRating(1, 3, 4, 4.2);
    lightning.DetermineRating(3, 3, 5, 4.2);
    SaveRankings(ratingSystemIteration);

    // Day 10: Wordle #1440
    lucy.DetermineRating(1, 2, 5, 6.0);
    aidan.DetermineRating(2, 2, 6, 6.0);
    SaveRankings(ratingSystemIteration);

    // Day 11: Wordle #1441
    lucy.DetermineRating(1, 2, 5, 3.8);
    aidan.DetermineRating(2, 2, 6, 3.8);
    SaveRankings(ratingSystemIteration);

    // Day 12: Wordle #1442
    lucy.DetermineRating(1, 2, 2, 5.0);
    aidan.DetermineRating(2, 2, 6, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 13: Wordle #1443
    lucy.DetermineRating(1, 2, 4, 4.2);
    aidan.DetermineRating(2, 2, 5, 4.2);
    SaveRankings(ratingSystemIteration);

    // Day 14: Wordle #1444
    lobsterfighter.SetRating(baseRating);

    lucy.DetermineRating(1, 4, 4, 4.5);
    aidan.DetermineRating(1, 4, 4, 4.5);
    lobsterfighter.DetermineRating(3, 4, 6, 4.5);
    lightning.DetermineRating(3, 4, 6, 4.5);
    SaveRankings(ratingSystemIteration);

    // Day 15: Wordle #1445
    squiddy.DetermineRating(1, 4, 4, 5.0);
    aidan.DetermineRating(2, 4, 5, 5.0);
    lucy.DetermineRating(3, 4, 6, 5.0);
    lightning.DetermineRating(4, 4, 7, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 16: Wordle #1446
    panda.SetRating(baseRating);

    lightning.DetermineRating(1, 4, 5, 4.5);
    panda.DetermineRating(1, 4, 5, 4.5);
    lucy.DetermineRating(1, 4, 5, 4.5);
    aidan.DetermineRating(4, 4, 6, 4.5);
    SaveRankings(ratingSystemIteration);

    // Day 17: Wordle #1447
    stano.SetRating(baseRating);

    panda.DetermineRating(1, 6, 3, 4.8);
    aidan.DetermineRating(2, 6, 4, 4.8);
    stano.DetermineRating(3, 6, 5, 4.8);
    squiddy.DetermineRating(3, 6, 5, 4.8);
    lucy.DetermineRating(3, 6, 5, 4.8);
    lightning.DetermineRating(6, 6, 7, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 18: Wordle #1448
    delta.DetermineRating(1, 5, 3, 6.0);
    squiddy.DetermineRating(1, 5, 3, 6.0);
    panda.DetermineRating(3, 5, 4, 6.0);
    aidan.DetermineRating(4, 5, 6, 6.0);
    stano.DetermineRating(4, 5, 6, 6.0);
    SaveRankings(ratingSystemIteration);

    // Day 19: Wordle #1449
    panda.DetermineRating(1, 6, 3, 4.5);
    squiddy.DetermineRating(2, 6, 4, 4.5);
    delta.DetermineRating(2, 6, 4, 4.5);
    stano.DetermineRating(4, 6, 5, 4.5);
    aidan.DetermineRating(4, 6, 5, 4.5);
    lucy.DetermineRating(6, 6, 6, 4.5);
    SaveRankings(ratingSystemIteration);

    // Day 20: Wordle #1450
    stano.DetermineRating(1, 5, 3, 4.8);
    lucy.DetermineRating(2, 5, 4, 4.8);
    aidan.DetermineRating(3, 5, 5, 4.8);
    panda.DetermineRating(3, 5, 5, 4.8);
    squiddy.DetermineRating(3, 5, 5, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 21: Wordle #1451
    panda.DetermineRating(1, 6, 3, 4.5);
    squiddy.DetermineRating(1, 6, 3, 4.5);
    aidan.DetermineRating(3, 6, 4, 4.5);
    stano.DetermineRating(4, 6, 5, 4.5);
    lightning.DetermineRating(4, 6, 5, 4.5);
    lucy.DetermineRating(6, 6, 6, 4.5);
    SaveRankings(ratingSystemIteration);

    // Day 22: Wordle #1452
    potasium.SetRating(baseRating);

    panda.DetermineRating(1, 7, 3, 5.0);
    potasium.DetermineRating(1, 7, 3, 5.0);
    aidan.DetermineRating(3, 7, 5, 5.0);
    lightning.DetermineRating(3, 7, 5, 5.0);
    khana.DetermineRating(3, 7, 5, 5.0);
    lucy.DetermineRating(3, 7, 5, 5.0);
    squiddy.DetermineRating(7, 7, 6, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 23: Wordle #1453
    crackbox.SetRating(baseRating);

    panda.DetermineRating(1, 7, 3, 4.2);
    potasium.DetermineRating(2, 7, 4, 4.2);
    aidan.DetermineRating(3, 7, 5, 4.2);
    squiddy.DetermineRating(3, 7, 5, 4.2);
    lightning.DetermineRating(3, 7, 5, 4.2);
    crackbox.DetermineRating(3, 7, 5, 4.2);
    lucy.DetermineRating(7, 7, 6, 4.2);
    SaveRankings(ratingSystemIteration);

    // Day 24: Wordle #1454
    mario.SetRating(baseRating);

    potasium.DetermineRating(1, 9, 2, 5.6);
    lucy.DetermineRating(2, 9, 3, 5.6);
    squiddy.DetermineRating(3, 9, 4, 5.6);
    crackbox.DetermineRating(4, 9, 5, 5.6);
    mario.DetermineRating(4, 9, 5, 5.6);
    aidan.DetermineRating(6, 9, 6, 5.6);
    lightning.DetermineRating(6, 9, 6, 5.6);
    panda.DetermineRating(6, 9, 6, 5.6);
    lilli.DetermineRating(9, 9, 7, 5.6);
    SaveRankings(ratingSystemIteration);

    // Day 25: Wordle #1455
    lucy.DetermineRating(1, 9, 3, 4.8);
    mario.DetermineRating(1, 9, 3, 4.8);
    potasium.DetermineRating(1, 9, 3, 4.8);
    aidan.DetermineRating(4, 9, 4, 4.8);
    lilli.DetermineRating(4, 9, 4, 4.8);
    lightning.DetermineRating(6, 9, 5, 4.8);
    panda.DetermineRating(6, 9, 5, 4.8);
    crackbox.DetermineRating(8, 9, 6, 4.8);
    squiddy.DetermineRating(9, 9, 7, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 26: Wordle #1456
    lilli.DetermineRating(1, 6, 2, 3.8);
    potasium.DetermineRating(2, 6, 3, 3.8);
    squiddy.DetermineRating(1, 6, 3, 3.8);
    aidan.DetermineRating(4, 6, 5, 3.8);
    panda.DetermineRating(4, 6, 5, 3.8);
    lucy.DetermineRating(6, 6, 7, 3.8);
    SaveRankings(ratingSystemIteration);

    // Day 27: Wordle #1457
    squiddy.DetermineRating(1, 6, 3, 4.3);
    potasium.DetermineRating(1, 6, 3, 4.3);
    lilli.DetermineRating(3, 6, 5, 4.3);
    aidan.DetermineRating(4, 6, 6, 4.3);
    lightning.DetermineRating(4, 6, 6, 4.3);
    lucy.DetermineRating(6, 6, 7, 4.3);
    SaveRankings(ratingSystemIteration);

    // Day 28: Wordle #1458
    creeper.SetRating(baseRating);

    potasium.DetermineRating(1, 8, 3, 4.8);
    panda.DetermineRating(1, 8, 3, 4.8);
    lilli.DetermineRating(3, 8, 4, 4.8);
    creeper.DetermineRating(3, 8, 4, 4.8);
    lucy.DetermineRating(5, 8, 5, 4.8);
    aidan.DetermineRating(6, 8, 6, 4.8);
    lightning.DetermineRating(6, 8, 6, 4.8);
    squiddy.DetermineRating(6, 8, 6, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 29: Wordle #1459
    lucy.DetermineRating(1, 8, 2, 4.4);
    potasium.DetermineRating(1, 8, 2, 4.4);
    lilli.DetermineRating(3, 8, 3, 4.4);
    aidan.DetermineRating(3, 8, 3, 4.4);
    panda.DetermineRating(3, 8, 3, 4.4);
    lightning.DetermineRating(6, 8, 5, 4.4);
    squiddy.DetermineRating(6, 8, 5, 4.4);
    creeper.DetermineRating(6, 8, 5, 4.4);
    SaveRankings(ratingSystemIteration);

    // Day 30: Wordle #1460
    daphne.DetermineRating(1, 8, 1, 3.3);
    squiddy.DetermineRating(2, 8, 3, 3.3);
    lilli.DetermineRating(2, 8, 3, 3.3);
    panda.DetermineRating(4, 8, 4, 3.3);
    potasium.DetermineRating(5, 8, 5, 3.3);
    lightning.DetermineRating(5, 8, 5, 3.3);
    aidan.DetermineRating(7, 8, 6, 3.3);
    lucy.DetermineRating(7, 8, 6, 3.3);
    SaveRankings(ratingSystemIteration);

    // Day 31: Wordle #1461
    potasium.DetermineRating(1, 6, 2, 5.0);
    delta.DetermineRating(2, 6, 3, 5.0);
    squiddy.DetermineRating(3, 6, 4, 5.0);
    lucy.DetermineRating(3, 6, 4, 5.0);
    aidan.DetermineRating(5, 6, 5, 5.0);
    lightning.DetermineRating(6, 6, 6, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 32: Wordle #1462
    fletch.SetRating(baseRating);
    ghostcowz.SetRating(baseRating);

    fletch.DetermineRating(1, 7, 2, 4.0);
    potasium.DetermineRating(2, 7, 3, 4.0);
    lightning.DetermineRating(3, 7, 5, 4.0);
    aidan.DetermineRating(3, 7, 5, 4.0);
    squiddy.DetermineRating(5, 7, 6, 4.0);
    ghostcowz.DetermineRating(5, 7, 6, 4.0);
    lucy.DetermineRating(7, 7, 7, 4.0);
    SaveRankings(ratingSystemIteration);

    // Day 33: Wordle #1463
    potasium.DetermineRating(1, 9, 2, 3.8);
    lucy.DetermineRating(1, 9, 2, 3.8);
    fletch.DetermineRating(3, 9, 3, 3.8);
    aidan.DetermineRating(4, 9, 4, 3.8);
    squiddy.DetermineRating(4, 9, 4, 3.8);
    ghostcowz.DetermineRating(4, 9, 4, 3.8);
    panda.DetermineRating(7, 9, 5, 3.8);
    stano.DetermineRating(8, 9, 7, 3.8);
    lightning.DetermineRating(8, 9, 7, 3.8);
    SaveRankings(ratingSystemIteration);

    // Day 34: Wordle #1464
    potasium.DetermineRating(1, 8, 3, 4.3);
    aidan.DetermineRating(2, 8, 4, 4.3);
    ghostcowz.DetermineRating(2, 8, 4, 4.3);
    squiddy.DetermineRating(4, 8, 5, 4.3);
    stano.DetermineRating(4, 8, 5, 4.3);
    creeper.DetermineRating(4, 8, 5, 4.3);
    lightning.DetermineRating(7, 8, 6, 4.3);
    lucy.DetermineRating(8, 8, 7, 4.3);
    SaveRankings(ratingSystemIteration);

    // Day 35: Wordle #1465
    potasium.DetermineRating(1, 7, 3, 4.3);
    ghostcowz.DetermineRating(2, 7, 4, 4.3);
    lightning.DetermineRating(2, 7, 4, 4.3);
    aidan.DetermineRating(4, 7, 5, 4.3);
    squiddy.DetermineRating(4, 7, 5, 4.3);
    creeper.DetermineRating(4, 7, 5, 4.3);
    panda.DetermineRating(7, 7, 6, 4.3);
    SaveRankings(ratingSystemIteration);

    // Day 36: Wordle #1466
    potasium.DetermineRating(1, 7, 2, 4.8);
    aidan.DetermineRating(2, 7, 3, 4.8);
    creeper.DetermineRating(3, 7, 5, 4.8);
    squiddy.DetermineRating(4, 7, 6, 4.8);
    lightning.DetermineRating(4, 7, 6, 4.8);
    lucy.DetermineRating(4, 7, 6, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 37: Wordle #1467
    potasium.DetermineRating(1, 7, 3, 4.6);
    squiddy.DetermineRating(2, 7, 5, 4.6);
    aidan.DetermineRating(2, 7, 5, 4.6);
    creeper.DetermineRating(4, 7, 6, 4.6);
    lightning.DetermineRating(5, 7, 7, 4.6);
    SaveRankings(ratingSystemIteration);

    // Day 38: Wordle #1468
    lightning.DetermineRating(1, 5, 2, 6.0);
    aidan.DetermineRating(2, 5, 4, 6.0);
    stano.DetermineRating(3, 5, 5, 6.0);
    squiddy.DetermineRating(4, 5, 6, 6.0);
    panda.DetermineRating(4, 5, 6, 6.0);
    SaveRankings(ratingSystemIteration);

    // Day 39: Wordle #1469
    potasium.DetermineRating(1, 6, 2, 4.0);
    squiddy.DetermineRating(1, 6, 2, 4.0);
    aidan.DetermineRating(3, 6, 3, 4.0);
    lightning.DetermineRating(4, 6, 4, 4.0);
    panda.DetermineRating(5, 6, 5, 4.0);
    lucy.DetermineRating(6, 6, 7, 4.0);
    SaveRankings(ratingSystemIteration);

    // Day 40: Wordle #1470
    potasium.DetermineRating(1, 6, 3, 3.8);
    squiddy.DetermineRating(2, 6, 4, 3.8);
    lightning.DetermineRating(2, 6, 4, 3.8);
    aidan.DetermineRating(4, 6, 5, 3.8);
    stano.DetermineRating(5, 6, 6, 3.8);
    lucy.DetermineRating(6, 6, 7, 3.8);
    SaveRankings(ratingSystemIteration);

    // Day 41: Wordle #1471
    potasium.DetermineRating(1, 5, 3, 5.4);
    lucy.DetermineRating(2, 5, 5, 5.4);
    lightning.DetermineRating(2, 5, 5, 5.4);
    aidan.DetermineRating(4, 5, 6, 5.4);
    squiddy.DetermineRating(4, 5, 6, 5.4);
    SaveRankings(ratingSystemIteration);

    // Day 42: Wordle #1472
    aidan.DetermineRating(1, 7, 3, 4.2);
    potasium.DetermineRating(1, 7, 3, 4.2);
    lightning.DetermineRating(3, 7, 4, 4.2);
    creeper.DetermineRating(3, 7, 4, 4.2);
    lucy.DetermineRating(3, 7, 4, 4.2);
    stano.DetermineRating(3, 7, 4, 4.2);
    squiddy.DetermineRating(3, 7, 4, 4.2);
    SaveRankings(ratingSystemIteration);

    // Day 43: Wordle #1473
    potasium.DetermineRating(1, 6, 2, 3.8);
    squiddy.DetermineRating(2, 6, 3, 3.8);
    lightning.DetermineRating(3, 6, 4, 3.8);
    creeper.DetermineRating(4, 6, 5, 3.8);
    stano.DetermineRating(4, 6, 5, 3.8);
    aidan.DetermineRating(6, 6, 6, 3.8);
    SaveRankings(ratingSystemIteration);

    // Day 44: Wordle #1474
    potasium.DetermineRating(1, 6, 3, 4.8);
    squiddy.DetermineRating(2, 6, 5, 4.8);
    lightning.DetermineRating(2, 6, 5, 4.8);
    creeper.DetermineRating(4, 6, 6, 4.8);
    stano.DetermineRating(4, 6, 6, 4.8);
    aidan.DetermineRating(6, 6, 7, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 45: Wordle #1475
    potasium.DetermineRating(1, 7, 4, 5.3);
    aidan.DetermineRating(2, 7, 5, 5.3);
    stano.DetermineRating(2, 7, 5, 5.3);
    squiddy.DetermineRating(2, 7, 5, 5.3);
    panda.DetermineRating(5, 7, 6, 5.3);
    lightning.DetermineRating(5, 7, 6, 5.3);
    creeper.DetermineRating(7, 7, 7, 5.3);
    SaveRankings(ratingSystemIteration);

    // Day 46: Wordle #1476
    potasium.DetermineRating(1, 5, 3, 5.0);
    lightning.DetermineRating(2, 5, 4, 5.0);
    squiddy.DetermineRating(2, 5, 4, 5.0);
    lucy.DetermineRating(4, 5, 5, 5.0);
    aidan.DetermineRating(5, 5, 6, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 47: Wordle #1477
    aidan.DetermineRating(1, 4, 5, 5.0);
    potasium.DetermineRating(1, 4, 5, 5.0);
    squiddy.DetermineRating(3, 4, 6, 5.0);
    lightning.DetermineRating(4, 4, 7, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 48: Wordle #1478
    dingus.SetRating(baseRating);

    lucy.DetermineRating(1, 6, 3, 5.3);
    potasium.DetermineRating(2, 6, 4, 5.3);
    aidan.DetermineRating(3, 6, 5, 5.3);
    dingus.DetermineRating(4, 6, 6, 5.3);
    squiddy.DetermineRating(5, 6, 7, 5.3);
    lightning.DetermineRating(5, 6, 7, 5.3);
    SaveRankings(ratingSystemIteration);

    // Day 49: Wordle #1479
    nyfen.SetRating(baseRating);

    lightning.DetermineRating(1, 7, 4, 4.3);
    lucy.DetermineRating(1, 7, 4, 4.3);
    creeper.DetermineRating(3, 7, 5, 4.3);
    squiddy.DetermineRating(3, 7, 5, 4.3);
    aidan.DetermineRating(5, 7, 6, 4.3);
    nyfen.DetermineRating(6, 7, 7, 4.3);
    potasium.DetermineRating(6, 7, 7, 4.3);
    SaveRankings(ratingSystemIteration);

    // Day 50: Wordle #1480
    panda.DetermineRating(1, 6, 3, 4.6);
    creeper.DetermineRating(2, 6, 4, 4.6);
    aidan.DetermineRating(3, 6, 5, 4.6);
    squiddy.DetermineRating(3, 6, 5, 4.6);
    nyfen.DetermineRating(3, 6, 5, 4.6);
    lightning.DetermineRating(6, 6, 6, 4.6);
    SaveRankings(ratingSystemIteration);

    // Day 51: Wordle #1481
    squiddy.DetermineRating(1, 8, 3, 4.6);
    lightning.DetermineRating(2, 8, 4, 4.6);
    creeper.DetermineRating(2, 8, 4, 4.6);
    aidan.DetermineRating(4, 8, 5, 4.6);
    nyfen.DetermineRating(4, 8, 5, 4.6);
    lucy.DetermineRating(4, 8, 5, 4.6);
    potasium.DetermineRating(7, 8, 6, 4.6);
    lilli.DetermineRating(8, 8, 7, 4.6);
    SaveRankings(ratingSystemIteration);

    // Day 52: Wordle #1482
    potasium.DetermineRating(1, 7, 3, 5.4);
    lucy.DetermineRating(2, 7, 5, 5.4);
    lightning.DetermineRating(2, 7, 5, 5.4);
    aidan.DetermineRating(4, 7, 6, 5.4);
    creeper.DetermineRating(4, 7, 6, 5.4);
    nyfen.DetermineRating(4, 7, 6, 5.4);
    squiddy.DetermineRating(7, 7, 7, 5.4);
    SaveRankings(ratingSystemIteration);

    // Day 53: Wordle #1483
    aidan.DetermineRating(1, 8, 3, 3.4);
    lilli.DetermineRating(1, 8, 3, 3.4);
    lightning.DetermineRating(3, 8, 4, 3.4);
    lucy.DetermineRating(3, 8, 4, 3.4);
    potasium.DetermineRating(3, 8, 4, 3.4);
    creeper.DetermineRating(7, 8, 5, 3.4);
    nyfen.DetermineRating(8, 8, 6, 3.4);
    squiddy.DetermineRating(8, 8, 6, 3.4);
    SaveRankings(ratingSystemIteration);

    // Day 54: Wordle #1484
    juanfan.SetRating(baseRating);

    potasium.DetermineRating(0, 0, 0, 0.0, true);
    panda.DetermineRating(1, 10, 5, 5.8);
    aidan.DetermineRating(2, 10, 6, 5.8);
    creeper.DetermineRating(2, 10, 6, 5.8);
    juanfan.DetermineRating(2, 10, 6, 5.8);
    lightning.DetermineRating(2, 10, 6, 5.8);
    nyfen.DetermineRating(2, 10, 6, 5.8);
    squiddy.DetermineRating(2, 10, 6, 5.8);
    lilli.DetermineRating(8, 10, 7, 5.8);
    lucy.DetermineRating(8, 10, 7, 5.8);
    stano.DetermineRating(8, 10, 7, 5.8);
    SaveRankings(ratingSystemIteration);

    // Day 55: Wordle #1485
    april.SetRating(baseRating);
    nidgey.SetRating(baseRating);

    potasium.DetermineRating(1, 12, 2, 4.8);
    juanfan.DetermineRating(1, 12, 3, 4.8);
    april.DetermineRating(2, 12, 3, 4.8);
    aidan.DetermineRating(4, 12, 4, 4.8);
    lucy.DetermineRating(4, 12, 4, 4.8);
    lightning.DetermineRating(4, 12, 4, 4.8);
    nidgey.DetermineRating(4, 12, 4, 4.8);
    nyfen.DetermineRating(4, 12, 4, 4.8);
    panda.DetermineRating(4, 12, 4, 4.8);
    squiddy.DetermineRating(4, 12, 4, 4.8);
    creeper.DetermineRating(11, 12, 5, 4.8);
    ghostcowz.DetermineRating(11, 12, 5, 4.8);
    SaveRankings(ratingSystemIteration);

    // Day 56: Wordle #1486
    nyfen.DetermineRating(1, 11, 3, 4.5);
    potasium.DetermineRating(1, 11, 3, 4.5);
    juanfan.DetermineRating(3, 11, 4, 4.5);
    april.DetermineRating(4, 11, 5, 4.5);
    aidan.DetermineRating(4, 11, 5, 4.5);
    lucy.DetermineRating(4, 11, 5, 4.5);
    panda.DetermineRating(4, 11, 5, 4.5);
    squiddy.DetermineRating(4, 11, 5, 4.5);
    lightning.DetermineRating(9, 11, 6, 4.5);
    nidgey.DetermineRating(9, 11, 6, 4.5);
    creeper.DetermineRating(11, 11, 7, 4.5);
    SaveRankings(ratingSystemIteration);

    // Day 57: Wordle #1487
    ben.SetRating(baseRating);

    creeper.DetermineRating(1, 10, 3, 5.0);
    ben.DetermineRating(2, 10, 4, 5.0);
    juanfan.DetermineRating(2, 10, 4, 5.0);
    potasium.DetermineRating(2, 10, 4, 5.0);
    aidan.DetermineRating(5, 10, 5, 5.0);
    lightning.DetermineRating(5, 10, 5, 5.0);
    nidgey.DetermineRating(5, 10, 5, 5.0);
    nyfen.DetermineRating(5, 10, 5, 5.0);
    squiddy.DetermineRating(9, 10, 6, 5.0);
    lucy.DetermineRating(10, 10, 7, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 58: Wordle #1488
    juanfan.DetermineRating(1, 8, 3, 2.5);
    creeper.DetermineRating(2, 8, 5, 2.5);
    nyfen.DetermineRating(2, 8, 5, 2.5);
    lucy.DetermineRating(2, 8, 5, 2.5);
    potasium.DetermineRating(2, 8, 5, 2.5);
    april.DetermineRating(6, 8, 6, 2.5);
    squiddy.DetermineRating(6, 8, 6, 2.5);
    aidan.DetermineRating(8, 8, 7, 2.5);
    SaveRankings(ratingSystemIteration);

    // Day 59: Wordle #1489
    creeper.DetermineRating(1, 10, 3, 2.8);
    april.DetermineRating(2, 10, 4, 2.8);
    juanfan.DetermineRating(2, 10, 4, 2.8);
    lucy.DetermineRating(2, 10, 4, 2.8);
    squiddy.DetermineRating(2, 10, 4, 2.8);
    aidan.DetermineRating(6, 10, 5, 2.8);
    lightning.DetermineRating(6, 10, 5, 2.8);
    nyfen.DetermineRating(6, 10, 5, 2.8);
    potasium.DetermineRating(6, 10, 5, 2.8);
    stano.DetermineRating(10, 10, 6, 2.8);
    SaveRankings(ratingSystemIteration);

    // Day 60: Wordle #1490
    creeper.DetermineRating(1, 9, 4, 4.5);
    juanfan.DetermineRating(1, 9, 4, 4.5);
    lucy.DetermineRating(1, 9, 4, 4.5);
    lilli.DetermineRating(4, 9, 5, 4.5);
    nyfen.DetermineRating(4, 9, 5, 4.5);
    potasium.DetermineRating(4, 9, 5, 4.5);
    stano.DetermineRating(4, 9, 5, 4.5);
    squiddy.DetermineRating(4, 9, 5, 4.5);
    aidan.DetermineRating(9, 9, 6, 4.5);
    SaveRankings(ratingSystemIteration);

    // Day 61: Wordle #1491
    lucy.DetermineRating(1, 9, 2, 4.0);
    juanfan.DetermineRating(2, 9, 3, 4.0);
    nidgey.DetermineRating(2, 9, 3, 4.0);
    stano.DetermineRating(4, 9, 4, 4.0);
    creeper.DetermineRating(5, 9, 5, 4.0);
    nyfen.DetermineRating(5, 9, 5, 4.0);
    aidan.DetermineRating(7, 9, 6, 4.0);
    squiddy.DetermineRating(7, 9, 6, 4.0);
    potasium.DetermineRating(9, 9, 7, 4.0);
    SaveRankings(ratingSystemIteration);

    // Day 62: Wordle #1492
    creeper.DetermineRating(0, 0, 0, 0.0, true);
    aidan.DetermineRating(1, 5, 3, 5.0);
    squiddy.DetermineRating(2, 5, 4, 5.0);
    juanfan.DetermineRating(2, 5, 4, 5.0);
    potasium.DetermineRating(4, 5, 5, 5.0);
    nyfen.DetermineRating(5, 5, 6, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 63: Wordle #1493
    fletch.DetermineRating(1, 10, 4, 5.4);
    aidan.DetermineRating(2, 10, 6, 5.4);
    creeper.DetermineRating(2, 10, 6, 5.4);
    juanfan.DetermineRating(2, 10, 6, 5.4);
    lucy.DetermineRating(2, 10, 6, 5.4);
    nyfen.DetermineRating(2, 10, 6, 5.4);
    potasium.DetermineRating(2, 10, 6, 5.4);
    stano.DetermineRating(2, 10, 6, 5.4);
    squiddy.DetermineRating(9, 10, 7, 5.4);
    rukir.DetermineRating(9, 10, 7, 5.4);
    SaveRankings(ratingSystemIteration);

    // Day 64: Wordle #1494
    potasium.DetermineRating(1, 12, 2, 4.2);
    juanfan.DetermineRating(1, 12, 2, 4.2);
    aidan.DetermineRating(3, 12, 3, 4.2);
    fletch.DetermineRating(3, 12, 3, 4.2)
    lucy.DetermineRating(3, 12, 3, 4.2);
    creeper.DetermineRating(6, 12, 4, 4.2);
    lilli.DetermineRating(6, 12, 4, 4.2);
    nyfen.DetermineRating(6, 12, 4, 4.2);
    panda.DetermineRating(6, 12, 4, 4.2);
    squiddy.DetermineRating(6, 12, 4, 4.2);
    stano.DetermineRating(6, 12, 4, 4.2);
    lightning.DetermineRating(12, 12, 5, 4.2);
    SaveRankings(ratingSystemIteration);

    // Day 65: Wordle #1495 - the water incident
    rukir.DetermineRating(0, 0, 0, 4.2, true);
    delta.DetermineRating(1, 14, 3, 4.2);
    lucy.DetermineRating(1, 14, 3, 4.2);
    creeper.DetermineRating(1, 14, 3, 4.2);
    fletch.DetermineRating(4, 14, 4, 4.2);
    lilli.DetermineRating(5, 14, 5, 4.2);
    khana.DetermineRating(5, 14, 5, 4.2);
    panda.DetermineRating(5, 14, 5, 4.2);
    april.DetermineRating(8, 14, 6, 4.2);
    aidan.DetermineRating(9, 14, 7, 4.2);
    juanfan.DetermineRating(9, 14, 7, 4.2);
    nidgey.DetermineRating(9, 14, 7, 4.2);
    nyfen.DetermineRating(9, 14, 7, 4.2);
    potasium.DetermineRating(9, 14, 7, 4.2);
    squiddy.DetermineRating(9, 14, 7, 4.2);
    SaveRankings(ratingSystemIteration);

    // Day 66: Wordle #1496
    fletch.DetermineRating(1, 15, 3, 5.2);
    lightning.DetermineRating(1, 15, 3, 5.2);
    april.DetermineRating(3, 15, 4, 5.2);
    aidan.DetermineRating(3, 15, 4, 5.2);
    lucy.DetermineRating(3, 15, 4, 5.2);
    panda.DetermineRating(3, 15, 4, 5.2);
    delta.DetermineRating(3, 15, 4, 5.2);
    creeper.DetermineRating(8, 15, 5, 5.2);
    khana.DetermineRating(8, 15, 5, 5.2);
    nyfen.DetermineRating(8, 15, 5, 5.2);
    potasium.DetermineRating(8, 15, 5, 5.2);
    squiddy.DetermineRating(12, 15, 6, 5.2);
    juanfan.DetermineRating(12, 15, 6, 5.2);
    stano.DetermineRating(12, 15, 6, 5.2);
    rukir.DetermineRating(15, 15, 7, 5.2);
    SaveRankings(ratingSystemIteration);

    // Day 67: Wordle #1497
    potasium.DetermineRating(1, 12, 3, 4.6);
    juanfan.DetermineRating(2, 12, 4, 4.6);
    khana.DetermineRating(2, 12, 4, 4.6);
    aidan.DetermineRating(4, 12, 5, 4.6);
    april.DetermineRating(4, 12, 5, 4.6);
    delta.DetermineRating(4, 12, 5, 4.6);
    fletch.DetermineRating(7, 12, 6, 4.6);
    lucy.DetermineRating(7, 12, 6, 4.6);
    mario.DetermineRating(7, 12, 6, 4.6);
    squiddy.DetermineRating(7, 12, 6, 4.6);
    stano.DetermineRating(7, 12, 6, 4.6);
    nyfen.DetermineRating(12, 12, 7, 4.6);
    SaveRankings(ratingSystemIteration);

    // Day 68: Wordle #1498
    khana.DetermineRating(0, 0, 0, 0.0, true);
    aidan.DetermineRating(1, 12, 2, 3.8);
    potasium.DetermineRating(1, 12, 2, 3.8);
    lucy.DetermineRating(3, 12, 3, 3.8);
    squiddy.DetermineRating(3, 12, 3, 3.8);
    fletch.DetermineRating(3, 12, 3, 4);
    delta.DetermineRating(6, 12, 4, 3.8);
    juanfan.DetermineRating(6, 12, 4, 3.8);
    stano.DetermineRating(6, 12, 4, 3.8);
    creeper.DetermineRating(9, 12, 5, 3.8);
    april.DetermineRating(10, 12, 6, 3.8);
    nyfen.DetermineRating(10, 12, 6, 3.8);
    rukir.DetermineRating(10, 12, 6, 3.8);
    SaveRankings(ratingSystemIteration);

    // Day 69: Wordle #1499
    fletch.DetermineRating(1, 14, 2, 4.0);
    khana.DetermineRating(2, 14, 3, 4.0);
    potasium.DetermineRating(2, 14, 3, 4.0);
    delta.DetermineRating(2, 14, 4, 4.0);
    daphne.DetermineRating(5, 14, 4, 4.0);
    juanfan.DetermineRating(5, 14, 4, 4.0);
    lucy.DetermineRating(5, 14, 4, 4.0);
    lightning.DetermineRating(5, 14, 4, 4.0);
    squiddy.DetermineRating(5, 14, 4, 4.0);
    creeper.DetermineRating(10, 14, 5, 4.0);
    stano.DetermineRating(10, 14, 5, 4.0);
    april.DetermineRating(10, 14, 5, 4.0);
    aidan.DetermineRating(13, 14, 6, 4.0);
    nyfen.DetermineRating(14, 14, 7, 4.0);
    SaveRankings(ratingSystemIteration);

    // Day 70: Wordle #1500
    fletch.DetermineRating(1, 14, 4, 5.2);
    khana.DetermineRating(1, 14, 4, 5.2);
    lucy.DetermineRating(1, 14, 4, 5.2);
    creeper.DetermineRating(4, 14, 5, 5.2);
    squiddy.DetermineRating(4, 14, 5, 5.2);
    april.DetermineRating(6, 14, 6, 5.2);
    aidan.DetermineRating(6, 14, 6, 5.2);
    ben.DetermineRating(6, 14, 6, 5.2);
    daphne.DetermineRating(6, 14, 6, 5.2);
    delta.DetermineRating(6, 14, 6, 5.2);
    juanfan.DetermineRating(11, 14, 7, 5.2);
    nyfen.DetermineRating(11, 14, 7, 5.2);
    potasium.DetermineRating(11, 14, 7, 5.2);
    stano.DetermineRating(11, 14, 7, 5.2);
    SaveRankings(ratingSystemIteration);

    // Day 71: Wordle #1501
    brix.SetRating(baseRating);

    brix.DetermineRating(0, 0, 0, 0.0, true);
    aidan.DetermineRating(1, 13, 3, 4.0);
    khana.DetermineRating(1, 13, 3, 4.0);
    fletch.DetermineRating(1, 13, 3, 4.0);
    april.DetermineRating(4, 13, 4, 4.0);
    creeper.DetermineRating(4, 13, 4, 4.0);
    delta.DetermineRating(4, 13, 4, 4.0);
    potasium.DetermineRating(4, 13, 4, 4.0);
    stano.DetermineRating(4, 13, 4, 4.0);
    rukir.DetermineRating(4, 13, 4, 4.0);
    daphne.DetermineRating(10, 13, 5, 4.0);
    lucy.DetermineRating(10, 13, 5, 4.0);
    squiddy.DetermineRating(12, 13, 6, 4.0);
    nyfen.DetermineRating(13, 13, 7, 4.0);
    SaveRankings(ratingSystemIteration);

    // Day 72: Wordle #1502
    kosa.SetRating(baseRating);
    izuna.SetRating(baseRating);

    potasium.DetermineRating(1, 16, 3, 6.0);
    fletch.DetermineRating(2, 16, 4, 6.0);
    khana.DetermineRating(2, 16, 4, 6.0);
    aidan.DetermineRating(4, 16, 5, 6.0);
    izuna.DetermineRating(4, 16, 5, 6.0);
    daphne.DetermineRating(4, 16, 5, 6.0);
    juanfan.DetermineRating(4, 16, 5, 6.0);
    lightning.DetermineRating(4, 16, 5, 6.0);
    squiddy.DetermineRating(4, 16, 5, 6.0);
    stano.DetermineRating(4, 16, 5, 6.0);
    april.DetermineRating(11, 16, 6, 6.0);
    creeper.DetermineRating(11, 16, 6, 6.0);
    delta.DetermineRating(11, 16, 6, 6.0);
    rukir.DetermineRating(14, 16, 7, 6.0);
    kosa.DetermineRating(14, 16, 7, 6.0);
    nyfen.DetermineRating(14, 16, 7, 6.0);
    SaveRankings(ratingSystemIteration);

    // Day 73: Wordle #1503
    aidan.DetermineRating(1, 14, 4, 5.0);
    izuna.DetermineRating(1, 14, 4, 5.0);
    potasium.DetermineRating(1, 14, 4, 5.0);
    april.DetermineRating(4, 14, 5, 5.0);
    brix.DetermineRating(4, 14, 5, 5.0);
    juanfan.DetermineRating(4, 14, 5, 5.0);
    nyfen.DetermineRating(4, 14, 5, 5.0);
    rukir.DetermineRating(4, 14, 5, 5.0);
    creeper.DetermineRating(9, 14, 6, 5.0);
    fletch.DetermineRating(9, 14, 6, 5.0);
    khana.DetermineRating(9, 14, 6, 5.0);
    squiddy.DetermineRating(9, 14, 6, 5.0);
    daphne.DetermineRating(13, 14, 7, 5.0);
    lucy.DetermineRating(13, 14, 7, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 74: Wordle #1504
    roily.SetRating(baseRating);

    fletch.DetermineRating(1, 19, 4, 5.3)
    ghostcowz.DetermineRating(1, 19, 4, 5.3);
    izuna.DetermineRating(1, 19, 4, 5.3);
    lightning.DetermineRating(1, 19, 4, 5.3);
    roily.DetermineRating(1, 19, 4, 5.3);
    stano.DetermineRating(1, 19, 4, 5.3);
    aidan.DetermineRating(7, 19, 5, 5.3);
    creeper.DetermineRating(7, 19, 5, 5.3);
    juanfan.DetermineRating(7, 19, 5, 5.3);
    khana.DetermineRating(7, 19, 5, 5.3);
    lucy.DetermineRating(7, 19, 5, 5.3);
    nyfen.DetermineRating(7, 19, 5, 5.3);
    rukir.DetermineRating(7, 19, 5, 5.3);
    april.DetermineRating(14, 19, 6, 5.3);
    daphne.DetermineRating(14, 19, 6, 5.3);
    potasium.DetermineRating(14, 19, 6, 5.3);
    squiddy.DetermineRating(14, 19, 6, 5.3);
    lobsterfighter.DetermineRating(18, 19, 7, 5.3);
    delta.DetermineRating(18, 19, 7, 5.3);
    SaveRankings(ratingSystemIteration);

    // Day 75: Wordle #1505
    aidan.DetermineRating(1, 16, 2, 5.0);
    potasium.DetermineRating(1, 16, 2, 5.0);
    april.DetermineRating(3, 16, 3, 5.0);
    izuna.DetermineRating(3, 16, 3, 5.0);
    creeper.DetermineRating(5, 16, 4, 5.0);
    khana.DetermineRating(5, 16, 4, 5.0);
    nyfen.DetermineRating(5, 16, 4, 5.0);
    squiddy.DetermineRating(5, 16, 4, 5.0);
    stano.DetermineRating(5, 16, 4, 5.0);
    daphne.DetermineRating(10, 16, 5, 5.0);
    juanfan.DetermineRating(10, 16, 5, 5.0);
    roily.DetermineRating(10, 16, 5, 5.0);
    rukir.DetermineRating(10, 16, 5, 5.0);
    fletch.DetermineRating(14, 16, 6, 5.0);
    lightning.DetermineRating(15, 16, 7, 5.0);
    lucy.DetermineRating(15, 16, 7, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 76: Wordle #1506
    nappy.SetRating(baseRating);

    nappy.DetermineRating(1, 19, 2, 5.0);
    lilli.DetermineRating(2, 19, 3, 5.0);
    crackbox.DetermineRating(2, 19, 3, 5.0);
    aidan.DetermineRating(4, 19, 4, 5.0);
    april.DetermineRating(4, 19, 4, 5.0);
    brix.DetermineRating(4, 19, 4, 5.0);
    daphne.DetermineRating(4, 19, 4, 5.0);
    delta.DetermineRating(4, 19, 4, 5.0);
    izuna.DetermineRating(4, 19, 4, 5.0);
    lucy.DetermineRating(4, 19, 4, 5.0);
    juanfan.DetermineRating(4, 19, 4, 5.0);
    squiddy.DetermineRating(4, 19, 4, 5.0);
    creeper.DetermineRating(13, 19, 5, 5.0);
    lightning.DetermineRating(13, 19, 5, 5.0);
    nyfen.DetermineRating(13, 19, 5, 5.0);
    potasium.DetermineRating(13, 19, 5, 5.0);
    stano.DetermineRating(13, 19, 5, 5.0);
    rukir.DetermineRating(13, 19, 5, 5.0);
    khana.DetermineRating(19, 19, 6, 5.0);
    SaveRankings(ratingSystemIteration);

    // Day 77: Wordle #1507
    potasium.DetermineRating(1, 15, 2, 5.0);
    izuna.DetermineRating(2, 15, 3, 5.0);
    brix.DetermineRating(2, 15, 3, 5.0);
    squiddy.DetermineRating(4, 15, 3, 5.0);
    stano.DetermineRating(4, 15, 3, 5.0);
    april.DetermineRating(6, 15, 4, 5.0);
    lucy.DetermineRating(6, 15, 4, 5.0);
    nyfen.DetermineRating(6, 15, 4, 5.0);
    juanfan.DetermineRating(6, 15, 4, 5.0);
    aidan.DetermineRating(10, 15, 5, 5.0);
    lightning.DetermineRating(10, 15, 5, 5.0);
    khana.DetermineRating(10, 15, 5, 5.0);
    creeper.DetermineRating(13, 15, 6, 5.0);
    daphne.DetermineRating(13, 15, 6, 5.0);
    rukir.DetermineRating(13, 15, 6, 5.0);
    SaveRankings(ratingSystemIteration);
}

export { CalculateRatings, playersArr, topRankPlayers }
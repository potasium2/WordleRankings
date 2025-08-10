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

// Joined Day 82
const nooblet = new Player("Shigeru Miyamoto", startingBase, "#30e0d0");

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
    nappy,
    nooblet
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
    let dailyDifficulty;
    let playerCount;

    // Day 1: Wordle #1431
    daphne.SetRating(baseRating)

    dailyDifficulty = 4.2;
    playerCount = 1;

    daphne.DetermineRating(1, playerCount, 5, dailyDifficulty);

    // Day 2: Wordle #1432
    lilli.SetRating(baseRating)
    jude.SetRating(baseRating)
    lucy.SetRating(baseRating)
    delta.SetRating(baseRating)
    aidan.SetRating(baseRating)

    dailyDifficulty = 4.1;
    playerCount = 5;

    lilli.DetermineRating(1, playerCount, 4, dailyDifficulty);
    jude.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    delta.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(5, playerCount, 7, dailyDifficulty);

    // Day 3: Wordle #1433
    khana.SetRating(baseRating);
    squiddy.SetRating(baseRating);
    rukir.SetRating(baseRating);

    dailyDifficulty = 4.7;
    playerCount = 5;

    khana.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    rukir.DetermineRating(4, playerCount, 6, dailyDifficulty);
    aidan.DetermineRating(5, playerCount, 7, dailyDifficulty);

    // Day 4: Wordle #1434
    dailyDifficulty = 3.9;
    playerCount = 3;

    lucy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    delta.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 6, dailyDifficulty);

    // Day 5: Wordle #1435
    dailyDifficulty = 4.3;
    playerCount = 2;

    aidan.DetermineRating(1, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 7, dailyDifficulty);

    // Day 6: Wordle #1436
    dailyDifficulty = 4.4;
    playerCount = 3;

    squiddy.DetermineRating(1, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 7: Wordle #1437
    dailyDifficulty = 3.7;
    playerCount = 2;

    lucy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 8: Wordle #1438
    dailyDifficulty = 3.6;
    playerCount = 3;

    squiddy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 9: Wordle #1439
    lightning.SetRating(baseRating);

    dailyDifficulty = 3.9;
    playerCount = 3;

    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 10: Wordle #1440
    dailyDifficulty = 4.6;
    playerCount = 2;

    lucy.DetermineRating(1, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 11: Wordle #1441
    dailyDifficulty = 4.3;
    playerCount = 2;

    lucy.DetermineRating(1, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 12: Wordle #1442
    dailyDifficulty = 4.0;
    playerCount = 2;

    lucy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 13: Wordle #1443
    dailyDifficulty = 3.8;
    playerCount = 2;

    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 14: Wordle #1444
    lobsterfighter.SetRating(baseRating);

    dailyDifficulty = 4.0;
    playerCount = 4;

    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lobsterfighter.DetermineRating(3, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 15: Wordle #1445
    dailyDifficulty = 4.3;
    playerCount = 4;

    squiddy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 16: Wordle #1446
    panda.SetRating(baseRating);

    dailyDifficulty = 4.0;
    playerCount = 4;

    lightning.DetermineRating(1, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(1, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 17: Wordle #1447
    stano.SetRating(baseRating);

    dailyDifficulty = 4.2;
    playerCount = 6;

    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 18: Wordle #1448
    dailyDifficulty = 4.6;
    playerCount = 5;

    delta.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    panda.DetermineRating(3, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 19: Wordle #1449
    dailyDifficulty = 4.0;
    playerCount = 6;

    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    delta.DetermineRating(2, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 20: Wordle #1450
    dailyDifficulty = 3.9;
    playerCount = 5;

    stano.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 21: Wordle #1451
    dailyDifficulty = 3.8;
    playerCount = 6;

    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 22: Wordle #1452
    potasium.SetRating(baseRating);

    dailyDifficulty = 4.9;
    playerCount = 7;

    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(7, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 23: Wordle #1453
    crackbox.SetRating(baseRating);

    dailyDifficulty = 3.6;
    playerCount = 7;

    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 5, dailyDifficulty);
    crackbox.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(7, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 24: Wordle #1454
    mario.SetRating(baseRating);

    dailyDifficulty = 4.7;
    playerCount = 9;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    crackbox.DetermineRating(4, playerCount, 5, dailyDifficulty);
    mario.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 6, dailyDifficulty);
    panda.DetermineRating(6, playerCount, 6, dailyDifficulty);
    lilli.DetermineRating(9, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 25: Wordle #1455
    dailyDifficulty = 4.4;
    playerCount = 9;

    lucy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    mario.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 4, dailyDifficulty);
    lilli.DetermineRating(4, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(6, playerCount, 5, dailyDifficulty);
    crackbox.DetermineRating(8, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(9, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 26: Wordle #1456
    dailyDifficulty = 3.6;
    playerCount = 6;

    lilli.DetermineRating(1, playerCount, 2, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 27: Wordle #1457
    dailyDifficulty = 4.1;
    playerCount = 6;

    squiddy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lilli.DetermineRating(3, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(4, 6, playerCount, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 28: Wordle #1458
    creeper.SetRating(baseRating);

    dailyDifficulty = 4.1;
    playerCount = 8;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lilli.DetermineRating(3, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(3, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(5, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(6, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 29: Wordle #1459
    dailyDifficulty = 3.9;
    playerCount = 8;

    lucy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    lilli.DetermineRating(3, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 3, dailyDifficulty);
    panda.DetermineRating(3, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(6, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(6, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 30: Wordle #1460
    dailyDifficulty = 4.7;
    playerCount = 8;

    daphne.DetermineRating(1, playerCount, 1, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 3, dailyDifficulty);
    lilli.DetermineRating(2, playerCount, 3, dailyDifficulty);
    panda.DetermineRating(4, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(5, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(5, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(7, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(7, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 31: Wordle #1461
    dailyDifficulty = 4.1;
    playerCount = 6;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    delta.DetermineRating(2, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(5, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 32: Wordle #1462
    fletch.SetRating(baseRating);
    ghostcowz.SetRating(baseRating);

    dailyDifficulty = 3.9;
    playerCount = 7;

    fletch.DetermineRating(1, playerCount, 2, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(5, playerCount, 6, dailyDifficulty);
    ghostcowz.DetermineRating(5, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(7, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 33: Wordle #1463
    dailyDifficulty = 4.4;
    playerCount = 9;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    fletch.DetermineRating(3, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 4, dailyDifficulty);
    ghostcowz.DetermineRating(4, playerCount, 4, dailyDifficulty);
    panda.DetermineRating(7, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(8, playerCount, 7, dailyDifficulty);
    lightning.DetermineRating(8, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 34: Wordle #1464
    dailyDifficulty = 4.0;
    playerCount = 8;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    ghostcowz.DetermineRating(2, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(7, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(8, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 35: Wordle #1465
    dailyDifficulty = 4.2;
    playerCount = 7;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    ghostcowz.DetermineRating(2, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(7, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 36: Wordle #1466
    dailyDifficulty = 4.7;
    playerCount = 6;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(4, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 37: Wordle #1467
    dailyDifficulty = 5.0;
    playerCount = 5;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(5, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 38: Wordle #1468
    dailyDifficulty = 4.6;
    playerCount = 5;

    lightning.DetermineRating(1, playerCount, 2, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(3, 5, playerCount, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 6, dailyDifficulty);
    panda.DetermineRating(4, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 39: Wordle #1469
    dailyDifficulty = 3.4;
    playerCount = 6;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    squiddy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 4, dailyDifficulty);
    panda.DetermineRating(5, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 40: Wordle #1470
    dailyDifficulty = 3.9;
    playerCount = 6;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(5, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 41: Wordle #1471
    dailyDifficulty = 4.8;
    playerCount = 5;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 42: Wordle #1472
    dailyDifficulty = 4.0;
    playerCount = 7;

    aidan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(3, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(3, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 43: Wordle #1473
    dailyDifficulty = 4.2;
    playerCount = 6;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 44: Wordle #1474
    dailyDifficulty = 4.1;
    playerCount = 6;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 6, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 45: Wordle #1475
    dailyDifficulty = 5.2;
    playerCount = 7;

    potasium.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(2, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(5, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(5, playerCount, 6, dailyDifficulty);
    creeper.DetermineRating(7, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 46: Wordle #1476
    dailyDifficulty = 4.2;
    playerCount = 5;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(5, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 47: Wordle #1477
    dailyDifficulty = 5.0;
    playerCount = 4;

    aidan.DetermineRating(1, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 48: Wordle #1478
    dingus.SetRating(baseRating);

    dailyDifficulty = 4.3;
    playerCount = 6;

    lucy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 5, dailyDifficulty);
    dingus.DetermineRating(4, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(5, playerCount, 7, dailyDifficulty);
    lightning.DetermineRating(5, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 49: Wordle #1479
    nyfen.SetRating(baseRating);

    dailyDifficulty = 4.4;
    playerCount = 7;

    lightning.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(5, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(6, playerCount, 7, dailyDifficulty);
    potasium.DetermineRating(6, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 50: Wordle #1480
    dailyDifficulty = 4.3;
    playerCount = 6;

    panda.DetermineRating(1, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(3, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 51: Wordle #1481
    dailyDifficulty = 4.3;
    playerCount = 8;

    squiddy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(7, playerCount, 6, dailyDifficulty);
    lilli.DetermineRating(8, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 52: Wordle #1482
    dailyDifficulty = 5.6;
    playerCount = 7;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 6, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(4, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(7, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 53: Wordle #1483
    dailyDifficulty = 3.9;
    playerCount = 8;

    aidan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lilli.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(3, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(3, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(7, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(8, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(8, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 54: Wordle #1484
    juanfan.SetRating(baseRating);

    dailyDifficulty = 4.9;
    playerCount = 10;

    potasium.DetermineRating(0, 0, 0, dailyDifficulty, true);
    panda.DetermineRating(1, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    creeper.DetermineRating(2, playerCount, 6, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(2, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(2, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 6, dailyDifficulty);
    lilli.DetermineRating(8, playerCount, 7, dailyDifficulty);
    lucy.DetermineRating(8, playerCount, 7, dailyDifficulty);
    stano.DetermineRating(8, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 55: Wordle #1485
    april.SetRating(baseRating);
    nidgey.SetRating(baseRating);

    dailyDifficulty = 4.1;
    playerCount = 12;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    juanfan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    april.DetermineRating(2, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(4, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 4, dailyDifficulty);
    nidgey.DetermineRating(4, playerCount, 4, dailyDifficulty);
    nyfen.DetermineRating(4, playerCount, 4, dailyDifficulty);
    panda.DetermineRating(4, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(11, playerCount, 5, dailyDifficulty);
    ghostcowz.DetermineRating(11, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 56: Wordle #1486
    dailyDifficulty = 4.4;
    playerCount = 11;

    nyfen.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    juanfan.DetermineRating(3, playerCount, 4, dailyDifficulty);
    april.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(4, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(9, playerCount, 6, dailyDifficulty);
    nidgey.DetermineRating(9, playerCount, 6, dailyDifficulty);
    creeper.DetermineRating(11, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 57: Wordle #1487
    ben.SetRating(baseRating);

    dailyDifficulty = 5.2;
    playerCount = 10;

    creeper.DetermineRating(1, playerCount, 3, dailyDifficulty);
    ben.DetermineRating(2, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(5, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(5, playerCount, 5, dailyDifficulty);
    nidgey.DetermineRating(5, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(5, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(9, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(10, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 58: Wordle #1488
    dailyDifficulty = 4.9;
    playerCount = 8;

    juanfan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(2, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(2, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 5, dailyDifficulty);
    april.DetermineRating(6, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(6, playerCount, 6, dailyDifficulty);
    aidan.DetermineRating(8, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 59: Wordle #1489
    dailyDifficulty = 4.2;
    playerCount = 10;

    creeper.DetermineRating(1, playerCount, 3, dailyDifficulty);
    april.DetermineRating(2, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(6, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(6, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(6, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(10, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 60: Wordle #1490
    dailyDifficulty = 4.6;
    playerCount = 9;

    creeper.DetermineRating(1, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lilli.DetermineRating(4, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(4, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(4, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(9, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 61: Wordle #1491
    dailyDifficulty = 3.9;
    playerCount = 9;

    lucy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 3, dailyDifficulty);
    nidgey.DetermineRating(2, playerCount, 3, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(5, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(5, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(7, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(7, playerCount, 6, dailyDifficulty);
    potasium.DetermineRating(9, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 62: Wordle #1492
    dailyDifficulty = 4.1;
    playerCount = 5;

    creeper.DetermineRating(0, 0, 0, dailyDifficulty, true);
    aidan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(2, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(4, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(5, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 63: Wordle #1493
    dailyDifficulty = 5.4;
    playerCount = 10;

    fletch.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    creeper.DetermineRating(2, playerCount, 6, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(2, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(2, playerCount, 6, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(2, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(9, playerCount, 7, dailyDifficulty);
    rukir.DetermineRating(9, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 64: Wordle #1494
    dailyDifficulty = 3.9;
    playerCount = 12;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    juanfan.DetermineRating(1, playerCount, 2, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 3, dailyDifficulty);
    fletch.DetermineRating(3, playerCount, 3, dailyDifficulty)
    lucy.DetermineRating(3, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(6, playerCount, 4, dailyDifficulty);
    lilli.DetermineRating(6, playerCount, 4, dailyDifficulty);
    nyfen.DetermineRating(6, playerCount, 4, dailyDifficulty);
    panda.DetermineRating(6, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(6, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(6, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(12, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 65: Wordle #1495 - the water incident
    dailyDifficulty = 5.2;
    playerCount = 14;

    rukir.DetermineRating(0, 0, 0, dailyDifficulty, true);
    delta.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(1, playerCount, 3, dailyDifficulty);
    fletch.DetermineRating(4, playerCount, 4, dailyDifficulty);
    lilli.DetermineRating(5, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(5, playerCount, 5, dailyDifficulty);
    panda.DetermineRating(5, playerCount, 5, dailyDifficulty);
    april.DetermineRating(8, playerCount, 6, dailyDifficulty);
    aidan.DetermineRating(9, playerCount, 7, dailyDifficulty);
    juanfan.DetermineRating(9, playerCount, 7, dailyDifficulty);
    nidgey.DetermineRating(9, playerCount, 7, dailyDifficulty);
    nyfen.DetermineRating(9, playerCount, 7, dailyDifficulty);
    potasium.DetermineRating(9, playerCount, 7, dailyDifficulty);
    squiddy.DetermineRating(9, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 66: Wordle #1496
    dailyDifficulty = 4.4;
    playerCount = 15;

    fletch.DetermineRating(1, playerCount, 3, dailyDifficulty);
    lightning.DetermineRating(1, playerCount, 3, dailyDifficulty);
    april.DetermineRating(3, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 4, dailyDifficulty);
    panda.DetermineRating(3, playerCount, 4, dailyDifficulty);
    delta.DetermineRating(3, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(8, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(8, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(8, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(8, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(12, playerCount, 6, dailyDifficulty);
    juanfan.DetermineRating(12, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(12, playerCount, 6, dailyDifficulty);
    rukir.DetermineRating(15, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 67: Wordle #1497
    dailyDifficulty = 5.6;
    playerCount = 12;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    juanfan.DetermineRating(2, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    april.DetermineRating(4, playerCount, 5, dailyDifficulty);
    delta.DetermineRating(4, playerCount, 5, dailyDifficulty);
    fletch.DetermineRating(7, playerCount, 6, dailyDifficulty);
    lucy.DetermineRating(7, playerCount, 6, dailyDifficulty);
    mario.DetermineRating(7, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(7, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(7, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(12, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 68: Wordle #1498
    dailyDifficulty = 4.3;
    playerCount = 12;

    khana.DetermineRating(0, 0, 0, dailyDifficulty, true);
    aidan.DetermineRating(1, playerCount, 2, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(3, playerCount, 3, dailyDifficulty);
    fletch.DetermineRating(3, playerCount, 3, 4);
    delta.DetermineRating(6, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(6, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(6, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(9, playerCount, 5, dailyDifficulty);
    april.DetermineRating(10, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(10, playerCount, 6, dailyDifficulty);
    rukir.DetermineRating(10, playerCount, 6, 4);
    SaveRankings(ratingSystemIteration);

    // Day 69: Wordle #1499
    dailyDifficulty = 3.9;
    playerCount = 14;

    fletch.DetermineRating(1, playerCount, 2, dailyDifficulty);
    khana.DetermineRating(2, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(2, playerCount, 3, dailyDifficulty);
    delta.DetermineRating(2, playerCount, 4, dailyDifficulty);
    daphne.DetermineRating(5, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(5, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(5, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(5, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(5, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(10, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(10, playerCount, 5, dailyDifficulty);
    april.DetermineRating(10, playerCount, 5, dailyDifficulty);
    aidan.DetermineRating(13, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(14, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 70: Wordle #1500
    dailyDifficulty = 5.3;
    playerCount = 14;

    fletch.DetermineRating(1, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    april.DetermineRating(6, playerCount, 6, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 6, dailyDifficulty);
    ben.DetermineRating(6, playerCount, 6, dailyDifficulty);
    daphne.DetermineRating(6, playerCount, 6, dailyDifficulty);
    delta.DetermineRating(6, playerCount, 6, dailyDifficulty);
    juanfan.DetermineRating(11, playerCount, 7, dailyDifficulty);
    nyfen.DetermineRating(11, playerCount, 7, dailyDifficulty);
    potasium.DetermineRating(11, playerCount, 7, dailyDifficulty);
    stano.DetermineRating(11, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 71: Wordle #1501
    brix.SetRating(baseRating);

    dailyDifficulty = 4.4;
    playerCount = 13;

    brix.DetermineRating(0, 0, 0, dailyDifficulty, true);
    aidan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    khana.DetermineRating(1, playerCount, 3, dailyDifficulty);
    fletch.DetermineRating(1, playerCount, 3, dailyDifficulty);
    april.DetermineRating(4, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(4, playerCount, 4, dailyDifficulty);
    delta.DetermineRating(4, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(4, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 4, dailyDifficulty);
    rukir.DetermineRating(4, playerCount, 4, dailyDifficulty);
    daphne.DetermineRating(10, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(10, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(12, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(13, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 72: Wordle #1502
    kosa.SetRating(baseRating);
    izuna.SetRating(baseRating);

    dailyDifficulty = 4.5;
    playerCount = 16;

    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    fletch.DetermineRating(2, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(2, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    izuna.DetermineRating(4, playerCount, 5, dailyDifficulty);
    daphne.DetermineRating(4, playerCount, 5, dailyDifficulty);
    juanfan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(4, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 5, dailyDifficulty);
    april.DetermineRating(11, playerCount, 6, dailyDifficulty);
    creeper.DetermineRating(11, playerCount, 6, dailyDifficulty);
    delta.DetermineRating(11, playerCount, 6, dailyDifficulty);
    rukir.DetermineRating(14, playerCount, 7, dailyDifficulty);
    kosa.DetermineRating(14, playerCount, 7, dailyDifficulty);
    nyfen.DetermineRating(14, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 73: Wordle #1503
    dailyDifficulty = 4.6;
    playerCount = 14;

    aidan.DetermineRating(1, playerCount, 4, dailyDifficulty);
    izuna.DetermineRating(1, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 4, dailyDifficulty);
    april.DetermineRating(4, playerCount, 5, dailyDifficulty);
    brix.DetermineRating(4, playerCount, 5, dailyDifficulty);
    juanfan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(4, playerCount, 5, dailyDifficulty);
    rukir.DetermineRating(4, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(9, playerCount, 6, dailyDifficulty);
    fletch.DetermineRating(9, playerCount, 6, dailyDifficulty);
    khana.DetermineRating(9, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(9, playerCount, 6, dailyDifficulty);
    daphne.DetermineRating(13, playerCount, 7, dailyDifficulty);
    lucy.DetermineRating(13, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 74: Wordle #1504
    roily.SetRating(baseRating);

    dailyDifficulty = 4.6;
    playerCount = 19;

    fletch.DetermineRating(1, playerCount, 4, dailyDifficulty)
    ghostcowz.DetermineRating(1, playerCount, 4, dailyDifficulty);
    izuna.DetermineRating(1, playerCount, 4, dailyDifficulty);
    lightning.DetermineRating(1, playerCount, 4, dailyDifficulty);
    roily.DetermineRating(1, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(7, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(7, playerCount, 5, dailyDifficulty);
    juanfan.DetermineRating(7, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(7, playerCount, 5, dailyDifficulty);
    lucy.DetermineRating(7, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(7, playerCount, 5, dailyDifficulty);
    rukir.DetermineRating(7, playerCount, 5, dailyDifficulty);
    april.DetermineRating(14, playerCount, 6, dailyDifficulty);
    daphne.DetermineRating(14, playerCount, 6, dailyDifficulty);
    potasium.DetermineRating(14, playerCount, 6, dailyDifficulty);
    squiddy.DetermineRating(14, playerCount, 6, dailyDifficulty);
    lobsterfighter.DetermineRating(18, playerCount, 7, dailyDifficulty);
    delta.DetermineRating(18, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 75: Wordle #1505
    dailyDifficulty = 4.5;
    playerCount = 16;

    aidan.DetermineRating(1, playerCount, 2, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    april.DetermineRating(3, playerCount, 3, dailyDifficulty);
    izuna.DetermineRating(3, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(5, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(5, playerCount, 4, dailyDifficulty);
    nyfen.DetermineRating(5, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(5, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(5, playerCount, 4, dailyDifficulty);
    daphne.DetermineRating(10, playerCount, 5, dailyDifficulty);
    juanfan.DetermineRating(10, playerCount, 5, dailyDifficulty);
    roily.DetermineRating(10, playerCount, 5, dailyDifficulty);
    rukir.DetermineRating(10, playerCount, 5, dailyDifficulty);
    fletch.DetermineRating(14, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(15, playerCount, 7, dailyDifficulty);
    lucy.DetermineRating(15, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 76: Wordle #1506
    nappy.SetRating(baseRating);

    dailyDifficulty = 4.3;
    playerCount = 19;

    nappy.DetermineRating(1, playerCount, 2, dailyDifficulty);
    lilli.DetermineRating(2, playerCount, 3, dailyDifficulty);
    crackbox.DetermineRating(2, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 4, dailyDifficulty);
    april.DetermineRating(4, playerCount, 4, dailyDifficulty);
    brix.DetermineRating(4, playerCount, 4, dailyDifficulty);
    daphne.DetermineRating(4, playerCount, 4, dailyDifficulty);
    delta.DetermineRating(4, playerCount, 4, dailyDifficulty);
    izuna.DetermineRating(4, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(4, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(4, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(13, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(13, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(13, playerCount, 5, dailyDifficulty);
    potasium.DetermineRating(13, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(13, playerCount, 5, dailyDifficulty);
    rukir.DetermineRating(13, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(19, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 77: Wordle #1507
    dailyDifficulty = 4.0;
    playerCount = 15;

    potasium.DetermineRating(1, playerCount, 2, dailyDifficulty);
    izuna.DetermineRating(2, playerCount, 3, dailyDifficulty);
    brix.DetermineRating(2, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 3, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 3, dailyDifficulty);
    april.DetermineRating(6, playerCount, 4, dailyDifficulty);
    lucy.DetermineRating(6, playerCount, 4, dailyDifficulty);
    nyfen.DetermineRating(6, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(6, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(10, playerCount, 5, dailyDifficulty);
    lightning.DetermineRating(10, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(10, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(13, playerCount, 6, dailyDifficulty);
    daphne.DetermineRating(13, playerCount, 6, dailyDifficulty);
    rukir.DetermineRating(13, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 78: Wordle #1508
    dailyDifficulty = 4.1;
    playerCount = 14;

    creeper.DetermineRating(1, playerCount, 3, dailyDifficulty);
    brix.DetermineRating(1, playerCount, 3, dailyDifficulty);
    izuna.DetermineRating(1, playerCount, 3, dailyDifficulty);
    squiddy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    april.DetermineRating(5, playerCount, 4, dailyDifficulty);
    fletch.DetermineRating(5, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(5, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(5, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(5, playerCount, 4, dailyDifficulty);
    rukir.DetermineRating(5, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(11, playerCount, 6, dailyDifficulty);
    daphne.DetermineRating(11, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(11, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(11, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 79: Wordle #1509
    dailyDifficulty = 3.7;
    playerCount = 14;

    potasium.DetermineRating(1, playerCount, 1, dailyDifficulty);
    april.DetermineRating(2, playerCount, 2, dailyDifficulty);
    creeper.DetermineRating(3, playerCount, 3, dailyDifficulty);
    izuna.DetermineRating(3, playerCount, 3, dailyDifficulty);
    lucy.DetermineRating(3, playerCount, 3, dailyDifficulty);
    aidan.DetermineRating(6, playerCount, 4, dailyDifficulty);
    brix.DetermineRating(6, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(6, playerCount, 4, dailyDifficulty);
    nyfen.DetermineRating(6, playerCount, 4, dailyDifficulty);
    rukir.DetermineRating(6, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(6, playerCount, 4, dailyDifficulty);
    daphne.DetermineRating(12, playerCount, 5, dailyDifficulty);
    juanfan.DetermineRating(12, playerCount, 5, dailyDifficulty);
    stano.DetermineRating(12, playerCount, 5, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 80: Wordle #1510
    dailyDifficulty = 4.0;
    playerCount = 15;

    april.DetermineRating(1, playerCount, 3, dailyDifficulty);
    creeper.DetermineRating(1, playerCount, 3, dailyDifficulty);
    juanfan.DetermineRating(1, playerCount, 3, dailyDifficulty);
    daphne.DetermineRating(4, playerCount, 4, dailyDifficulty);
    potasium.DetermineRating(4, playerCount, 4, dailyDifficulty);
    squiddy.DetermineRating(4, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(4, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(8, playerCount, 5, dailyDifficulty);
    brix.DetermineRating(8, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(8, playerCount, 5, dailyDifficulty);
    izuna.DetermineRating(8, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(12, playerCount, 6, dailyDifficulty);
    rukir.DetermineRating(12, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(14, playerCount, 7, dailyDifficulty);
    lucy.DetermineRating(14, playerCount, 7, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 81: Wordle #1511
    dailyDifficulty = 4.5;
    playerCount = 14;

    squiddy.DetermineRating(1, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(1, playerCount, 4, dailyDifficulty);
    rukir.DetermineRating(1, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(4, playerCount, 5, dailyDifficulty);
    april.DetermineRating(4, playerCount, 5, dailyDifficulty);
    brix.DetermineRating(4, playerCount, 5, dailyDifficulty);
    daphne.DetermineRating(4, playerCount, 5, dailyDifficulty);
    izuna.DetermineRating(4, playerCount, 5, dailyDifficulty);
    khana.DetermineRating(4, playerCount, 5, dailyDifficulty);
    nyfen.DetermineRating(4, playerCount, 5, dailyDifficulty);
    creeper.DetermineRating(11, playerCount, 6, dailyDifficulty);
    potasium.DetermineRating(11, playerCount, 6, dailyDifficulty);
    stano.DetermineRating(11, playerCount, 6, dailyDifficulty);
    lightning.DetermineRating(11, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);

    // Day 82: Wordle #1512
    nooblet.SetRating(baseRating);

    dailyDifficulty = 4.3;
    playerCount = 13;

    lucy.DetermineRating(1, playerCount, 3, dailyDifficulty);
    potasium.DetermineRating(1, playerCount, 3, dailyDifficulty);
    april.DetermineRating(3, playerCount, 4, dailyDifficulty);
    aidan.DetermineRating(3, playerCount, 4, dailyDifficulty);
    creeper.DetermineRating(3, playerCount, 4, dailyDifficulty);
    juanfan.DetermineRating(3, playerCount, 4, dailyDifficulty);
    khana.DetermineRating(3, playerCount, 4, dailyDifficulty);
    rukir.DetermineRating(3, playerCount, 4, dailyDifficulty);
    stano.DetermineRating(3, playerCount, 4, dailyDifficulty);
    nooblet.DetermineRating(10, playerCount, 5, dailyDifficulty);
    squiddy.DetermineRating(11, playerCount, 6, dailyDifficulty);
    nyfen.DetermineRating(11, playerCount, 6, dailyDifficulty);
    izuna.DetermineRating(11, playerCount, 6, dailyDifficulty);
    SaveRankings(ratingSystemIteration);
}

export { CalculateRatings, playersArr, topRankPlayers }
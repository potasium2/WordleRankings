class Player {
    constructor(name, rating, accentColor = "#607799") {
        this.name = name;
        this.rating = rating;
        this.accentColor = accentColor;
        this.peakRating = rating;
        this.timesTakenFirst = 0;
        this.priorRanks = [];
        this.priorRatings = [];
    }

    DetermineRating(scorePosition, playerCount, guessCount, wordDifficulty) {
        if (scorePosition <= 0 || playerCount <= 1)
            return;

        this.timesTakenFirst = scorePosition == 1 ? this.timesTakenFirst + 1 : this.timesTakenFirst;

        if (guessCount >= 7) {
            this.rating -= Math.round(wordDifficulty * Math.pow(guessCount / 3.0, 1.65));
            playerCount = scorePosition;
        }

        const eloScaling = Math.min(Math.max(Math.pow(this.rating / 1000.0, 7.0), 1.0), 30.0);

        const scalingFactor = 5.0;
        const positionScalingFactor = Math.min(6, 4.0 * Math.max(0.85, 1000.0 / this.rating));

        const positionBonus = (-Math.pow(positionScalingFactor * (10.0 / 3.0) * (scorePosition / playerCount), 0.825)) + 8.0;
        const guessBonus = guessCount < wordDifficulty ? Math.pow(wordDifficulty - guessCount, 0.5) : -Math.pow(wordDifficulty - guessCount, 2.0) / 2.0;
        const positionPenalty = scorePosition > playerCount / 2 ? Math.pow((playerCount / 6.0) - scorePosition / 2.0, 2.0) : 0;

        let overallBonus = scalingFactor * (positionBonus + guessBonus);
        overallBonus = overallBonus <= 0 ? Math.pow(scalingFactor, 1.245) * (positionBonus + guessBonus) : overallBonus;

        this.rating += Math.round(overallBonus) - Math.max(0, eloScaling - 1) - positionPenalty;

        if (this.rating <= 100)
            this.rating = 100;
    }

    SetRating(newRating) {
        this.rating = newRating;
    }

    SaveRankingInfo(rank) {
        this.peakRating = this.rating > this.peakRating ? this.rating : this.peakRating;
        this.timeSincePeakRank = this.timeSincePeakRank == null ? 0 : rank < this.peakRank ? 0 : this.timeSincePeakRank + 1;
        this.peakRank = this.peakRank == null ? rank : rank < this.peakRank ? rank : this.peakRank;
        this.priorRanks.push(rank);
        this.priorRatings.push(this.rating);
    }
}

export { Player }
class Player {
    constructor(name, rating, accentColor = "#607799", gifProfilePic = false) {
        this.name = name;
        this.rating = rating;
        this.altRating = rating;
        this.accentColor = accentColor;
        this.gifProfilePic = gifProfilePic;
        this.peakRating = rating;
        this.timesTakenFirst = 0;
        this.priorRanks = [];
        this.priorRatings = [];
        this.tags = [];
    }

    DetermineRating(scorePosition, playerCount, guessCount, wordDifficulty, tagged = false) {
        this.tags.push(tagged);
        this.DetermineOldRating(scorePosition, playerCount, guessCount, wordDifficulty);

        if (scorePosition <= 0 || playerCount <= 1) {
            return;
        }
    
        this.timesTakenFirst = scorePosition == 1 ? this.timesTakenFirst + 1 : this.timesTakenFirst;

        if (guessCount >= 7) {
            this.rating -= Math.round((7.0 - wordDifficulty) * Math.pow(guessCount / 3.0, 1.65));
        }

        const eloScaling = Math.min(Math.max(Math.pow(this.rating / 1000.0, 7.15), 1.0), 20.0);

        const scalingFactor = 5.0;

        const positionBonus = (-Math.pow(4.0 * (10.0 / 3.0) * (scorePosition / playerCount), 0.825)) + 7.5;
        const guessBonus = guessCount < wordDifficulty ? Math.pow(wordDifficulty - guessCount, 0.5) : Math.pow(wordDifficulty - guessCount, 3.0) / 4.0;

        let overallBonus = scalingFactor * (positionBonus + guessBonus);
        overallBonus = overallBonus <= 0 ? Math.pow(scalingFactor, 1.315) * (positionBonus + guessBonus) : overallBonus;

        this.rating += Math.round(overallBonus) - Math.max(0, eloScaling - 1);

        if (this.rating <= 100)
            this.rating = 100;
    }
    
    DetermineOldRating(scorePosition, playerCount, guessCount, wordDifficulty) {
        if (scorePosition <= 0 || playerCount <= 1)
            return;

        if (guessCount >= 7) {
            this.altRating -= Math.round(wordDifficulty * Math.pow(guessCount / 3.0, 1.65));
            playerCount = scorePosition;
        }

        if (guessCount == 1) {
            this.altRating += 8.0 + Math.round(wordDifficulty * 2.0);
        }

        const eloScaling = Math.min(Math.max(Math.pow(this.altRating / 1000.0, 7.0), 1.0), 25.0);
        const firstPlaceBonus = Math.min(Math.max(1500.0 / this.altRating, 1.0), 1.875);

        const scalingFactor = 5.0;
        const positionScalingFactor = Math.min(6, 4.0 * Math.max(0.85, 1000.0 / this.altRating));

        const positionBonus = playerCount - Math.pow(positionScalingFactor / 3.0 * scorePosition, 0.825);
        const guessBonus = guessCount < wordDifficulty ? Math.pow(wordDifficulty - guessCount, 0.5) : -Math.pow(wordDifficulty - guessCount, 2.0) / 2.0;
        const positionPenalty = scorePosition > playerCount / 2 ? Math.pow((playerCount / 6.0) + (scorePosition / 6.0) - scorePosition / 2.0, 2.0) : 0;

        let overallBonus = scalingFactor * (positionBonus + guessBonus);
        overallBonus = overallBonus <= 0 ? Math.pow(scalingFactor, 1.65) * (positionBonus + guessBonus) : overallBonus;

        if (scorePosition == 1)
            overallBonus *= firstPlaceBonus;

        this.altRating += Math.round(overallBonus) - Math.max(0, eloScaling - 1) - positionPenalty;

        if (this.altRating <= 100)
            this.altRating = 100;

        return;
    }

    SetRating(newRating) {
        this.rating = newRating;
        this.altRating = newRating;
    }

    SaveRankingInfo(rank) {
        this.peakRating = this.rating > this.peakRating ? this.rating : this.peakRating;
        this.timeSincePeakRank = this.timeSincePeakRank == null ? 0 : rank < this.peakRank ? 0 : this.timeSincePeakRank + 1;
        this.timeSpentAtPeak = this.timeSpentAtPeak == null ? 1 : rank < this.peakRank && rank > 0 ? 1 : rank > this.peakRank ? this.timeSpentAtPeak : this.timeSpentAtPeak + 1;
        this.peakRank = this.peakRank == null ? rank : rank < this.peakRank && rank > 0 ? rank : this.peakRank;
        this.priorRanks.push(rank);
        this.priorRatings.push(this.rating);
    }

    SaveAlternativeRankingInfo(rank) {
        this.peakRating = this.altRating > this.peakRating ? this.altRating : this.peakRating;
        this.timeSincePeakRank = this.timeSincePeakRank == null ? 0 : rank < this.peakRank ? 0 : this.timeSincePeakRank + 1;
        this.peakRank = this.peakRank == null ? rank : rank < this.peakRank ? rank : this.peakRank;
        this.priorRanks.push(rank);
        this.priorRatings.push(this.altRating);
    }
}

export { Player }
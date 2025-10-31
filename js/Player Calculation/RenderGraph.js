const maxNumberDaysToShow = 60; // The way I meant to handle this in the for loop has been wrong the entire time :)

function RenderRankGraph(playerData) {
    let xValues = [];
    let yValues = [];

    for (let i = 1; i < maxNumberDaysToShow + 1; i++) {
        const pastRanking = playerData.priorRanks[playerData.priorRanks.length - i];
        const pastRating = playerData.priorRatings[playerData.priorRatings.length - i];
        if (pastRating < 100 || pastRating == null)
            break;

        xValues.push(i);
        yValues.push(Math.round(pastRanking));
    }

    new Chart(rankGraph, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            data: yValues,
            borderColor: playerData.accentColor,
            fill: false,
            pointRadius: 0.01,
            cubicInterpolationMode: 'linear',
            stepped: false
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    reverse: true
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    reverse: true
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y;
                            label = 'Rank: ' + label; 
                            return label;
                        },
                        title: function(tooltipItems, data) {
                            const xValue = tooltipItems[0].parsed.x;
                            if (xValue == 0) {
                                return 'Now'
                            }
                            if (xValue == 1) {
                                return 'Yesterday'
                            }
                            return xValue + ' days ago';
                        }
                    },
                    intersect: false
                }
            },
            animation: {
                duration: 0
            }
        }
    });
}

function RenderRatingGraph(playerData) {
    let xValues = [];
    let yValues = [];

    for (let i = 1; i < maxNumberDaysToShow + 1; i++) {
        const pastRating = playerData.priorRatings[playerData.priorRatings.length - i];
        if (pastRating < 100 || pastRating == null)
            break;

        xValues.push(i);
        yValues.push(Math.round(pastRating));
    }

    new Chart(ratingGraph, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            data: yValues,
            borderColor: playerData.accentColor,
            fill: false,
            pointRadius: 0.01,
            cubicInterpolationMode: 'linear',
            stepped: false
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    reverse: true
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    reverse: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y;
                            label = 'Rating: ' + label; 
                            return label;
                        },
                        title: function(tooltipItems, data) {
                            const xValue = tooltipItems[0].parsed.x;
                            if (xValue == 0) {
                                return 'Now'
                            }
                            if (xValue == 1) {
                                return 'Yesterday'
                            }
                            return xValue + ' days ago';
                        }
                    },
                    intersect: false
                }
            },
            animation: {
                duration: 0
            }
        }
    });
}

export { RenderRatingGraph, RenderRankGraph }
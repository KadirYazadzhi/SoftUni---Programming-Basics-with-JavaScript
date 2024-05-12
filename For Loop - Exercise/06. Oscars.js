function calculatePoints(data) {
    const actorName = data.shift();
    const academyPoints = parseFloat(data.shift());
    const numReviewers = parseInt(data.shift());
    const reviewers = [];

    for (let i = 0; i < numReviewers; i++) {
        const reviewerName = data.shift();
        const reviewerPoints = parseFloat(data.shift());
        reviewers.push({ name: reviewerName, points: reviewerPoints });
    }

    let totalPoints = academyPoints;

    for (let i = 0; i < numReviewers; i++) {
        let reviewerPoints = reviewers[i].points;
        totalPoints += (reviewers[i].name.length * reviewerPoints) / 2;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = (1250.5 - totalPoints).toFixed(1);
    console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
}

calculatePoints(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);

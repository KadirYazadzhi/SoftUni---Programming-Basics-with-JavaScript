function tennisRanklist(n, startPoints, otherRank) {
    let all = 0;
    let countVictory = 0;
    let allCount = 0;

    for (let i = 0; i < n; i++) {
        if (otherRank[i] === "W") {
            startPoints += 2000;
            all += 2000;
            countVictory++;
            allCount++;
        } else if (otherRank[i] === "F") {
            startPoints += 1200;
            all += 1200;
            allCount++;
        } else if (otherRank[i] === "SF") {
            startPoints += 720;
            all += 720;
            allCount++;
        }
    }

    console.log(`Final points: ${startPoints}`);
    console.log(`Average points: ${all / allCount}`);
    console.log((countVictory / allCount * 100).toFixed(2) + "%");
}
tennisRanklist(5, 1400, ["F", "SF", "W", "W", "SF"]);
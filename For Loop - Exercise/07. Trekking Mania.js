function calculateClimbersPercentages(numGroups, groupSizes) {
    const totalClimbers = groupSizes.reduce((acc, curr) => acc + curr, 0);
    let countMusala = 0;
    let countMonblan = 0;
    let countKilimandjaro = 0;
    let countK2 = 0;
    let countEverest = 0;

    for (let i = 0; i < numGroups; i++) {
        const groupSize = groupSizes[i];
        if (groupSize <= 5) {
            countMusala += groupSize;
        } else if (groupSize >= 6 && groupSize <= 12) {
            countMonblan += groupSize;
        } else if (groupSize >= 13 && groupSize <= 25) {
            countKilimandjaro += groupSize;
        } else if (groupSize >= 26 && groupSize <= 40) {
            countK2 += groupSize;
        } else {
            countEverest += groupSize;
        }
    }

    const percentageMusala = (countMusala / totalClimbers) * 100;
    const percentageMonblan = (countMonblan / totalClimbers) * 100;
    const percentageKilimandjaro = (countKilimandjaro / totalClimbers) * 100;
    const percentageK2 = (countK2 / totalClimbers) * 100;
    const percentageEverest = (countEverest / totalClimbers) * 100;

    console.log(`${percentageMusala.toFixed(2)}%`);
    console.log(`${percentageMonblan.toFixed(2)}%`);
    console.log(`${percentageKilimandjaro.toFixed(2)}%`);
    console.log(`${percentageK2.toFixed(2)}%`);
    console.log(`${percentageEverest.toFixed(2)}%`);
}

calculateClimbersPercentages(5, [25, 41, 31, 250, 6]);
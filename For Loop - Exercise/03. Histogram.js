function histogram(n, numbers) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 0; i < n; i++) {
        let args = numbers[i];
        if (args < 200) {
            count1++;
        } else if (args >= 200 && args < 400) {
            count2++;
        } else if (args >= 400 && args < 600) {
            count3++;
        } else if (args >= 600 && args < 800) {
            count4++;
        } else if (args >= 800) {
            count5++;
        }
    }
    count1 = (count1 / n) * 100;
    count2 = (count2 / n) * 100;
    count3 = (count3 / n) * 100;
    count4 = (count4 / n) * 100;
    count5 = (count5 / n) * 100;

    console.log(`${count1.toFixed(2)}%`);
    console.log(`${count2.toFixed(2)}%`);
    console.log(`${count3.toFixed(2)}%`);
    console.log(`${count4.toFixed(2)}%`);
    console.log(`${count5.toFixed(2)}%`);
}
histogram(3, [1, 2, 999]);
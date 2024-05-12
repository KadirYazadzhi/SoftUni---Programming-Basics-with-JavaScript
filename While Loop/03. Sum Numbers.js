function sumNumber(n, args) {
    let sum = 0;
    let i = 0;
    while (sum < n) {
        sum += args[i];
        i++
    }
    console.log(sum);
}
sumNumber(100, [10, 20, 30, 40]);
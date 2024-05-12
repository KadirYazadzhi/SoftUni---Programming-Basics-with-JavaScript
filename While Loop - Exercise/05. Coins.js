function minCoinsChange(amount) {
    let parsedAmount = parseFloat(amount);
    let totalCoins = 0;
    let totalAmountInCents = parsedAmount * 100;

    const coins = [200, 100, 50, 20, 10, 5, 2, 1];

    for (let i = 0; i < coins.length; i++) {
        const currentCoins = Math.floor(totalAmountInCents / coins[i]);
        totalCoins += currentCoins;
        totalAmountInCents -= currentCoins * coins[i];
    }

    return totalCoins;
}

console.log(minCoinsChange("1.23"));
console.log(minCoinsChange("2"));
console.log(minCoinsChange("0.56"));
console.log(minCoinsChange("2.73"));
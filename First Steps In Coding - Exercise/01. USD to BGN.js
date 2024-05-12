function USDtoBGN(number) {
    const USD_BGN = 1.7954;
    return number * USD_BGN;
}
let USD = USDtoBGN(100);
console.log(USD);
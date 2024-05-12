function depositCalculater(sum, month, procent) {
    let procentForMonth = (sum * (procent / 100)) / 12;

    let total = sum + (month * procentForMonth);

    return total;
}
let answer = depositCalculater(200, 3, 5.7);
console.log(answer);
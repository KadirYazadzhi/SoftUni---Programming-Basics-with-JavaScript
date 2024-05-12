function cleverLily(age, washerPrice, toyPrice){
    let sum = 10;
    let countToys = 0;
    let other = 0;

    for (let i = 0; i <= age; i++) {
        if (i % 2 === 0) {
            sum += other;
            other += 10 - 1;
        }
        else {
            countToys++;
        }
    }
    let total = 0;
    total = sum + (countToys * toyPrice);

    if (total >= washerPrice) {
        console.log(`Yes ${(total - washerPrice).toFixed(2)}`);
    }
    else {
        console.log(`No ${(washerPrice - total).toFixed(2)}`);
    }
}
cleverLily(10, 170, 6);
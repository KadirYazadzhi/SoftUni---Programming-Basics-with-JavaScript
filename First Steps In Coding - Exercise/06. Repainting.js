function Repainting(nylon, paint, thunner, hours) {
    let totalProductPrice = ((nylon + 2) * 1.50) + (paint * 1.10 * 14.50) + (thunner * 5.00) + 0.40;
    let workPrice = (totalProductPrice * 0.3) * hours;
    let total = totalProductPrice + workPrice;
    console.log(total);
}
Repainting(10, 11, 4, 8);
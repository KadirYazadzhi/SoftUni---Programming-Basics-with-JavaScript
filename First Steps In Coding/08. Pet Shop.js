function Zoo(foodForDog, foodForCat) {
    const PRICE_DOG_FOOD = 2.50;
    const PRICE_CAT_FOOD = 4;

    let priceFoodDog = foodForDog * PRICE_DOG_FOOD;
    let priceFoodCat = foodForCat * PRICE_CAT_FOOD;

    let Total = priceFoodCat + priceFoodDog;

    return `${Total} lv.`;
}
let priceZoo = Zoo(5, 5);
console.log(priceZoo);
function yardGreening(number) {
    const PRICE_FOR_ONE_METER = 7.61;

    let priceWithoutDiscount = PRICE_FOR_ONE_METER * number;
    let discount = priceWithoutDiscount * 0.18;
    let priceWithDiscount = priceWithoutDiscount - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(500);
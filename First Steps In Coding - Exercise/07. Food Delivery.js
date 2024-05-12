function foodDelivery(chickenMenu, fishMenu, veganMenu) {
    let totalWithoutDelivery = (chickenMenu * 10.35) + (fishMenu * 12.40) + (veganMenu * 8.15);
    let dessert = totalWithoutDelivery * 0.2;
    let total = totalWithoutDelivery + dessert + 2.50;
    console.log(total);
}
foodDelivery(2, 4, 3);
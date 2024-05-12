function BasketballEquipment(fee) {
    let sneakers = fee * 0.6;
    let kit = sneakers * 0.8;
    let balls = kit / 4;
    let accessories = balls / 5;
    let total = fee + sneakers + kit + balls + accessories;
    console.log(total);
}
BasketballEquipment(365);
function film(budjet, extras, suitPrice) {
    if (extras > 150) {
        suitPrice *= 0.9;
    }

    let decor = budjet * 0.1;
    let total = (extras * suitPrice) + decor;

    if (total < budjet) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budjet - total).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(total - budjet).toFixed(2)} leva more.`);
    }
}
film(20000, 120, 55.5);
function shop(budjet, videoCard, procesor, RAM) {
    let videoCardPrice = 250 * videoCard;
    let procesorPrice = (videoCardPrice * 0.35) * procesor;
    let RAMPrice = (videoCardPrice * 0.1) * RAM;
    let total = videoCardPrice + procesorPrice + RAMPrice;

    if (videoCard > procesor) {
        total *= 0.85;
    }

    if (budjet > total) {
        console.log(`You have ${(budjet - total).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(total - budjet).toFixed(2)} leva more!`)
    }
}
shop(900, 2, 1, 3);
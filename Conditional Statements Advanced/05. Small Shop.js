function smallShop(city, product, count) {
    if (city === "Sofia") {
        if (product === "coffee") {
            console.log(count * 0.50);
        }
        else if (product === "water") {
            console.log(count * 0.80);
        }
        else if (product === "beer") {
            console.log(count * 1.20);
        }
        else if (product === "sweets") {
            console.log(count * 1.45);
        }
        else if (product === "peanuts") {
            console.log(count * 1.60);
        }
    }
    else if (city === "Plovdiv") {
        if (product === "coffee") {
            console.log(count * 0.40);
        }
        else if (product === "water") {
            console.log(count * 0.70);
        }
        else if (product === "beer") {
            console.log(count * 1.15);
        }
        else if (product === "sweets") {
            console.log(count * 1.30);
        }
        else if (product === "peanuts") {
            console.log(count * 1.50);
        }
    }
    else if (city === "Varna") {
        if (product === "coffee") {
            console.log(count * 0.45);
        }
        else if (product === "water") {
            console.log(count * 0.70);
        }
        else if (product === "beer") {
            console.log(count * 1.10);
        }
        else if (product === "sweets") {
            console.log(count * 1.35);
        }
        else if (product === "peanuts") {
            console.log(count * 1.55);
        }
    }
}
smallShop( "Varna","coffee", 2);
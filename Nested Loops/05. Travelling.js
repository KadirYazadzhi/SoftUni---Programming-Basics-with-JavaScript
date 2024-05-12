function traveling(args) {
    let i = 0;
    let destination = "";
    let needMoney = 0;
    let savedMoney = 0;

    while (i < args.length) {
        if (typeof args[i] === "string") {
            destination = String(args[i]);
            needMoney = Number(args[i + 1]);
            i++;
        }
        else {
            savedMoney += Number(args[i]);
            if (savedMoney >= needMoney) {
                console.log(`Going to ${destination}!`);
                savedMoney = 0;
            }
        }
        i++;
    }
}

traveling(["Greece", 1000, 100, 400, 300, 200, "Italy", 500, 200, 500, "End"]);

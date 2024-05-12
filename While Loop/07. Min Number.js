function minNumbers(args) {
    let i = 0
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (args[i] !== "Stop") {
        if (minNumber > Number(args[i])) {
            minNumber = Number(args[i]);
        }
        i++;
    }
    console.log(minNumber);
}
minNumbers(["10", "-100", "-20", "60", "Stop"]);
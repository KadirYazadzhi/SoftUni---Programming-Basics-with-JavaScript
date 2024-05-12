function readText(args) {
    let count = 0;
    while (args[count] !== "Stop") {
        console.log(args[count]);
        count++;
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
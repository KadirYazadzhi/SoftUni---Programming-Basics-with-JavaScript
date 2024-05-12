function examPreparation(n, args) {
    let name = "";
    let grade = 0;
    let average = 0;
    let badGrade = 0;
    let count = 0;
    let i = 0;

    while (true) {
        if (i % 2 === 0 && args[i] !== "Enough") {
            name = args[i];
            count++;
        }
        else {
            grade = Number(args[i]);
            average += grade;
        }
        i++;
        if (grade < 4.00) {
            badGrade++;
        }
        if (badGrade > n) {
            console.log(`You need a break, ${badGrade} poor grades."`);
            break;
        }
        if (args[i] === "Enough") {
            average = average / count;
            console.log(`Average score: ${average}`);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${name}`);
            break;
        }
    }
}
examPreparation(3,["Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough"]);
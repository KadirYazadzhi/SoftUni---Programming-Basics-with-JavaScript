function projectCreation(name, projects) {
    const HOURS_FOR_ONE_PROJECTS = 3;
    let needHours = projects * HOURS_FOR_ONE_PROJECTS;
    console.log(`The architect ${name} will need ${needHours} hours to complete ${projects} project/s.`);
}
projectCreation("Yoan", 5);
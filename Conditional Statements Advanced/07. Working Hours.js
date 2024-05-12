function workingHours(time, day) {
    if (time >= 10 && time <= 18 && day !== "Sunday") {
        console.log("open");
    }
    else {
        console.log("closed");
    }
}
workingHours(17, "Monday");
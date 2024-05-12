function RadiansToDegrees(radian) {
    let degree = radian * 180 / Math.PI;
    return degree;
};
let radians = RadiansToDegrees(10);
console.log(radians);
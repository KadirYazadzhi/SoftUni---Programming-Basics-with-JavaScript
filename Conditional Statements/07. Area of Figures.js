function calculateArea(input) {
    let shape = input[0];

    if (shape === "square")  {
        const side = input[1];
        return (side * side).toFixed(2);
    }
    else if (shape === "rectangle")  {
        const length = input[1];
        const width = input[2];
        return (length * width).toFixed(2);
    }
    else if (shape === "circle")  {
        const radius = input[1];
        return (Math.PI * radius * radius).toFixed(2);
    }
    else if (shape === "triangle")  {
        const base = input[1];
        const height = input[2];
        return ((base * height) / 2).toFixed(2);
    }
}
console.log(calculateArea(['square', 5]));
console.log(calculateArea(['rectangle', 4, 6]));
console.log(calculateArea(['circle', 3]));
console.log(calculateArea(['triangle', 4, 5]));


function equalSum(num1, num2) {
    let sum = "";

    for (let i = num1; i < num2; i++) {
        let numString = i.toString();
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < numString.length; j++) {
            let digit = Number(numString[j]);
            if (j % 2 === 0) {
                evenSum += digit;
            }
            else {
                oddSum += digit;
            }
        }

        if (evenSum === oddSum) {
            sum += i + " ";
        }
    }
    console.log(sum);
}

equalSum(100000, 100050);
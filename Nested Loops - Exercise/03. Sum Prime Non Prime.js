function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimeAndNonPrime(args) {
    let numPrime = 0;
    let numNonPrime = 0;
    let negative = false;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === "stop") {
            break;
        }

        let num = Number(args[i]);
        if (num < 0) {
            negative = true;
            continue;
        }

        if (isPrime(num)) {
            numPrime += num;
        } else {
            numNonPrime += num;
        }
    }

    if (negative) {
        console.log(`Number is negative.`);
    }
    console.log(`Sum of all prime numbers is: ${numPrime}`);
    console.log(`Sum of all non prime numbers is: ${numNonPrime}`);
}

sumPrimeAndNonPrime([3, 9, 0, 7, 19, 4, "stop"]);
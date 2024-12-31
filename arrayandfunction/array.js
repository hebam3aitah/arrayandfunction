function reverseNumber(x) {
    let reversed = 0;
    while (x !== 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return reversed;
}
let x = 532443;
console.log(reverseNumber(x));
// Q2: Loop to Check Odd or Even

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i+ "is even");
    } else {
        console.log(i+ "is odd");
    }
}
// Q3: Alphabetical Order Function
function sortString(str) {
    let charArray = [];
    for (let i = 0; i < str.length; i++) {
        charArray.push(str[i].toLowerCase());
    }
    for (let i = 0; i < charArray.length; i++) {
        for (let j = 0; j < charArray.length - i - 1; j++) {
            if (charArray[j] > charArray[j + 1]) {
                let temp = charArray[j];
                charArray[j] = charArray[j + 1];
                charArray[j + 1] = temp;
            }
        }
    }
    return charArray.join('');
}

// Example:
let inputString = 'Orange';
console.log(sortString(inputString)); // Output: 'aegnor'


// Q4: Insert Dashes Between Even Numbers
function insertDashes(num) {
    let result = "";
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i < str.length - 1 && str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
            result += "-";
        }
    }

    return result;
}

// Example:
 const input = 25468;
console.log(insertDashes(input));
 // الناتج: 2-54-6-8





 // Q5: Age Checker Using Ternary Operator
function ageChecker(age) {
    return age >= 18 ? "The user is Adult" : "The user is Minor";
}

// Example:
const age = 17;
console.log(ageChecker(age)); // الناتج: "The user is Minor"
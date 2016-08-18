
// 1. Build your own concatenation - Return a new string that is the combination of two arguments passed into the function

function combineWords(word1, word2) {
    return word1 + " " + word2;   
}

var result = combineWords('dog', 'house');
console.log(result);


// 2. Repeat a phrase - Display an argument phrase to the console n times

function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);


// 3. Build your own Power function - Return number power without using built-in Math functions

function toTheNthPower(number, power) {
    var total = number;
    for (var i = 1; i < power; i++) {
        total  = total * number;        
    }
    return total;
}

var result = toTheNthPower(4,5);
console.log(result);


// 4. Area of a circle: πr2 - Return the area of a circle given the radius

function areaOfACircle(radius) {
    return Math.PI * radius * radius;
}

var result = areaOfACircle(2);
console.log(result);


// 5. Pythagorean Theorem: a2 + b2 = c2 - Return c given a and b

function pythagoreanTheorem(a, b) {
    return Math.hypot(a, b);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);


// 6. Is X Evenly Divisible by Y ? - Return a boolean value whether or not X can be divided by Y without any remainders.

function isXEvenlyDivisibleBy(x, y) {
    if (x % y === 0) {
        return true;
    }
    else {
        return false;
    }
}

var result = isXEvenlyDivisibleBy(99, 3);
console.log(result);

// 7. Vowel Count: Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y
//Challenge: Can you alter the code to count both upper case AND lower case?

function countVowels(word) { 
    word = word.toLowerCase();
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if ((word[i] === 'a') || (word[i] === 'e') || (word[i] === 'i') || (word[i] === 'o') || (word[i] === 'u') || (word[i] === 'y')) {
            count++; 
        }
    }
    return count;
           
}

var result = countVowels("STEALING");
console.log(result);


//8. Does the array contain "wdi" - Given an array, return true if it contains the string "wdi" and false if it does not contain that string.

testArrayTrue = ([9, 'Bart Simpson', true, 'wdi']);
testArrayFalse = (['a', 'b', 'c']);

function findWdi(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'wdi') {
            return true;
        }      
    }
    return false;
}

findWdi(testArrayTrue);
findWdi(testArrayFalse);


//9. Build an ASCII Triangle! - Display a simple triangle with asterisks

function printTriangle(length) {
    for (var i = 1; i < length + 1; i++) {
        console.log('*'.repeat(i)); 
    } 
}

printTriangle(5);
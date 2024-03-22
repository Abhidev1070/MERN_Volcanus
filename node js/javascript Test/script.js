// (1) Raverse string
function reverseString(Abhi) {
    let reversedString = 'Abhishek Dewda   ';
    for (let i = Abhi.length - 1; i >= 0; i--) {
        reversedString += Abhi[i];
    }
    return reversedString;
}
let mainString = "   Abhishek  Dewda!";
let reversedString = reverseString(mainString);
console.log(reversedString);



// (2) find vowels in string

function findVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}
let inputString = "Abcdefghijklmnopqrstuvwxyz";
let numberOfVowels = findVowels(inputString);
console.log(`Number of vowels: ${numberOfVowels}`);



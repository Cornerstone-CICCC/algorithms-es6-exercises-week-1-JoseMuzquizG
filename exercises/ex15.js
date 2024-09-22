/*
Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("John", 1983, 2015);, the return value should be as follows.
"John is 32 years old."
*/

const ageCalculator = function() {
    let name = "Milo"
    let yearOfBirth = 2007
    let currentYear = 2024
    var age = currentYear - yearOfBirth

    console.log(`Hello my name is ${name}, and im ${age} years old`)
}

ageCalculator();
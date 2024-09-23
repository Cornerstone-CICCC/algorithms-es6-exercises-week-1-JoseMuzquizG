/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function funnyThing(funny) {
    let type = ""
    for (i = 1; i <= funny; i++) {
        type += "ha"
    }
    return type + "!";
}

let laugh = funnyThing(5)
console.log(laugh)
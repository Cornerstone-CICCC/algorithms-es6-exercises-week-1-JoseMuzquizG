/*
Write a series of conditional statements that:

- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4

*/

let musicians = 4

if (musicians === 0) {
    console.log("Not a group")
}
else if (musicians === 1) {
    console.log("Solo")
}
else if (musicians === 2) {
    console.log("Duet")
}
else if (musicians === 3) {
    console.log("Trio")
}
else if (musicians === 4) {
    console.log("Quartet")
}
else if (musicians >= 5) {
    console.log("This is a big group")
}

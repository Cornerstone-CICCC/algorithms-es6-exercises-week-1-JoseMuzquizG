/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.


Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"
*/

const shirtLength = 34
const shirtWidth = 28
const shirtSleeve = 10.13

if ((shirtLength === 28) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38) && (shirtWidth >= 18 && shirtWidth < 20)){
    console.log("You need a shirt size S")
}
else if ((shirtLength === 29) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63) && (shirtWidth >= 20 && shirtWidth < 22)){
    console.log("You need a shirt size M")
}
else if ((shirtLength === 30) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88) && (shirtWidth >= 22 && shirtWidth < 24)){
    console.log("You need a shirt size L")
}
else if ((shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63) && (shirtWidth >= 24
     && shirtWidth < 26)){
    console.log("You need a shirt size XL")
}
else if ((shirtLength === 33) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13) && (shirtWidth >= 26 && shirtWidth < 28)){
    console.log("You need a shirt size 2XL")
}
else if ((shirtLength === 34) && (shirtSleeve === 10.13) && (shirtWidth === 28)){
    console.log("You need a shirt size 3XL")
}
else {
    console.log("We do not have a shirt for you")
}

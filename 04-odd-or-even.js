//using for loop to iterate numbers 0 to 15
for (let x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even"); // 0 is even
    }
    else if (x % 2 === 0) {
        console.log(x + " is even"); // even numbers
    }
    else {
        console.log(x + " is odd") // odd numbers 
    }
}
for (x = 1; x <= 100; x++) {
    if (x % 3 == 0) {
        console.log("Marco"); //multiples of 3 
    }
    if (x % 5 == 0) {
        console.log("Polo"); // multiples of 5
    }
    if ((x % 3 != 0) && (x % 5 != 0)) {
        console.log("Marco Polo") // multiples of 3 and 5
    }
}
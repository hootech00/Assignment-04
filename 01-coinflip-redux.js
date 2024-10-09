// GLOBAL VARIABLES
let coinFlip
let choice
let flipResult

coinFlip = Math.round(Math.random()) + 1;

choice = parseInt(prompt("Enter 0 or 1"));

if (coinFlip == 0) {
    let flipResult = "Heads";
    document.write('Heads')
} else {
    let flipResult = 'Tails';
    document.write("Tails")
}
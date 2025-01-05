function pimain() {
    alert("you lost the game.");
    piValueandcalc
    document.getElementById("pi-find").innerHTML = piValue;
    
}
// note: AI gen. code needs fixing prob. note2: i cant wait to see this code implode for the "funny"
function piValueandcalc(terms) {
    let pi = 0;

    for (let k = 0; k < terms; k++) {
        const term = (1 / Math.pow(16, k)) * ( //<--wtf that for lol
            (4 / (8 * k + 1)) -
            (2 / (8 * k + 4)) -
            (1 / (8 * k + 5)) -
            (1 / (8 * k + 6))
        );
        pi += term;
    }
    return pi;
}

const terms = 9999;
const piValue = piValueandcalc(terms);
// end of ai code
console.log(piValue)
let pi_string = piValue.toString

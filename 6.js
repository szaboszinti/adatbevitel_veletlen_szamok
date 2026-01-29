//6. Írj programot, ami bekér egy inch értéket és átszámolja cm-be! (1 inch = 2,71 cm)
let inch = 2.71
let ertek = Number(prompt("Adj meg egy inch értéket: ", 0))
let cm = ertek * inch
console.log(`${cm} cm`)
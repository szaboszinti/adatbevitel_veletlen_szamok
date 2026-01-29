//4. Írj programot, ami egy dobókocka dobást szimulál!
let kocka = Math.floor(Math.random(1, 6)*6)+1
console.log(`A dobása: ${kocka}`)

// al feladat
// 15 és 23 közötti számok
let min = 15
let max = 23
let random =  Math.floor(Math.random()*(max-min) + 1) + min
console.log(random)
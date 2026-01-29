//3. Írj programot, ami beolvassa egy kör sugarát, majd kiírja a területét és a kerületét!
let r = Number(prompt("Kérem, adja meg a kör sugarát:", 0));

let k = 2 * r * Math.PI
let t = r * r * Math.PI

console.log(`A kör kerülete : ${k}`)
console.log(`A kör területe : ${t}`)

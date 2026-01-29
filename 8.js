//8. Írj programot, ami bekéri a dátumot (nap) és az órát, amiből kiszámolja, hogy a hónap
//hányadik órájában vagyunk!

let nap = Number(prompt("Add meg a napot: ",0))
let ora = Number(prompt("Add meg az órát: ", 0))
let ho = Number((nap-1)*24 + ora)
console.log(ho)
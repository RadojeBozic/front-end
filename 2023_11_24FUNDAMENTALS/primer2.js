const a = 7
const b = 5
const c = "5"

/*Logicki operatori
< manje
> vece
<= manje ili jednako
>= vece ili jednako
== jednako
=== indenticno
!= razlicito
!== neindeticno
*/
console.log("Poredjenje <:", a < b)
console.log("Jednakost ==:", b == c)
console.log("Indenticnost ===:", b === c)

// && (AND) - vraca true samo ako su leva i desna stramna true 
console.log(a > b && b !== c)
// || (OR) - vraca true ako je bar jedna strana true
console.log(a < b || b !== c)

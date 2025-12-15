/**
 *  Oczywiście, możliwe jest też jawne rzutowanie typów.
 *
 *  Nie powinniśmy jednak próbować używać go "wszędzie".
 *  Najlepiej nauczyć się podstawowych zależności niejawnego rzutowania,
 *  a jawne używać tylko tam gdzie poprawi to czytelność kodu, lub jego zrozumienie.
 *
 *  Używanie jawnego (explicit) rzutowania wygląda podobnie jak wywołanie
 *  funkcji, przy czym używany jest statyczny konstruktor typu wbudowanego
 *
 *  np. String(500)  -> "500"
 * */


// Rzutowanie na wartość String
console.log(String(12344))
console.log(String(true))

// Rzutowanie na wartość Boolean
console.log(Boolean(0))
console.log(Boolean(-1))
console.log(Boolean(1))

// Rzutowanie na wartość Number
console.log(Number('1233'))
console.log(Number(false))
console.log(Number(true))

// czasem warto korzystać z wbudowanych funkcji pomocniczych
console.log(parseFloat('1.222'))

// dzięki parseInt możemy podać jako string np. liczbę binarną a zwrócić ją w systemie dziesiętnym
// w tym wypadku argument przekazany do parametru "radix" determinuje system liczbowy
console.log(parseInt('101', 2))

// poniżej sytuacja odwrotna, rzutujemy liczbę na typ number w formacie binarnym
console.log((5).toString(2))

console.log(44..toString(2))



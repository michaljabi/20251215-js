/**
 * w JavaScript występują tzw. Truthy oraz Falsy values.
 *
 * W praktyce oznacza to że dowolną zmienną lub stałą możemy sprawdzić bezpośrednio w instrukcji warunkowej.
 *
 * Dla przykładu:
 *  0 jest falsy, ponieważ blok if(0) się nie wykona, natomiast każda inna cyfra (-1 i niżej oraz 1 i wyżej)
 *  Da nam wartość true - więc jest "truthy"
 *
 * https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * */

if(0) {
	console.log('I am working !')
}
if(false) {
	console.log('I am working !')
}
if('') {
	console.log('I am working !')
}
if('') {
	console.log('I am working !')
}
if(NaN) {
	console.log('I am working !')
}

if(1 === '1') {
	console.log('I am working !')
}

// #1 Zadanie:
// Sprawdź warunki i zastanów się jak je "odwrócić" aby bloki kodu wykonywały się.

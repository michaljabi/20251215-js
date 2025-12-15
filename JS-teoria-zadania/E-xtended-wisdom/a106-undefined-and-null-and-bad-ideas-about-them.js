/**
 *  W JavaScript rozróżnić można kilka stanów "przypisania" i deklaracji zmiennych
 *
 * */

try {
  // po 1, możemy mieć coś co nie istnieje - a chcemy tego użyć:
	console.log( notExist )
} catch(e) {
	// w tym układzie coś posiada stan "NOT DEFINED"
	// oznacza to ni mniej ni więcej - że programista chce użyć czegoś co nigdy nie zostało zadeklarowane w kodzie
	console.log(e)
}

// Wartość poniżej jest zadeklarowana jednak nie przypisana (undefined)
let iAmNotAssigned;
let iAmNothingAtTheBegin = null;
let iAmAssigned = 123;

console.log(iAmNotAssigned);
console.log(iAmNothingAtTheBegin);

// Odkomentuj poniższe aby sprawdzić wartość niezdefiniowaną:
// console.log(iAmNotDefined);

// WAŻNE:
// wartości null i undefined, nie wykonują się w przypadku instrukcji warunkowych:
if (iAmNotAssigned) {
	console.log('Boom !')
}
if (iAmNothingAtTheBegin) {
	console.log('Boom !')
}

/**
 * Deklarowanie swoich zmiennych w ten sposób - nie jest dobrym pomysłem.
 * Wszędzie tam gdzie się da - deklaruj stałe (wtedy od razu musisz przypisać im wartość)
 *
 * używaj zasady: "favor const over let"
 *
 * */

// #1 Zadanie:
// Popraw poniższy zapis:
let hello;
//.....
// 36...
// 37...
// ...
// bazillion linii kodu dalej...
//.....
hello = 'World';
console.log(hello);

/**
 * Dodatkowo:
 *
 * Staraj się zawsze określać tzw. stan początkowy - żeby od razu pokazywać intencje programisty
 * i odkryć "typ" danych jaki programista miał na myśli
 *
 * */

// unikaj!! :
let showName = null;
// bazillion linii kodu dalej...
// ....
showName = 'Jan Janusz Kowalski Jr.'


// #2 Zadanie:
// Zastanów się i odpowiedz jakie konsekwencje niesie ze sobą przypisywanie zmiennej do null?
// ^ zobacz powyżej.


// #3 Zadanie:
// Odkomentuj i napraw
// const role;
// role = 'ADMIN'

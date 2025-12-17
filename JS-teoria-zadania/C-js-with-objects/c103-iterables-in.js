/**
 *  Kolekcje iterowalne - to takie konstrukcje po których można "przeliczać"/"wyliczać" pętlami.
 *
 *  Przykładowo, najprostsza kolekcja iterowalna w JavaScript to po prostu String
 * */

const movie = 'Ender\'s Game';

for(let x = 0; x < movie.length; x++) {
	console.log(movie[x])
}

// do kolekcji iterowalnych (string, Array, Map, Set...)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for(const letter of movie) {
	console.log(letter)
}

// do obiektów, żeby dobrac się do kluczy (properties)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
const user = { name: 'Michał', isAdmin: true };
for(const key in user) {
	console.log(key)
}


/**
 * W ES6 dostajemy wygodniejszą pętle do przeliczania dowolnej kolekcji iterowalnej
 * for...of
 * */

for(let letter of 'Fight Club') {
	console.log(letter)
}

// #1 Zadanie:
// Udowodnij że pętli for...of możemy również użyć do tablic

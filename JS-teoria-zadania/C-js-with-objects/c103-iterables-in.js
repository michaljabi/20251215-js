/**
 *  Kolekcje iterowalne - to takie konstrukcje po których można "przeliczać"/"wyliczać" pętlami.
 *
 *  Przykładowo, najprostsza kolekcja iterowalna w JavaScript to po prostu String
 * */

const movie = 'Ender\'s Game';

for(let x = 0; x < movie.length; x++) {
	console.log(movie[x])
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

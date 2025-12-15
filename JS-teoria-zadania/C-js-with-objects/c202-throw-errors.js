/**

 # Zadanie:
 1. Używając bloku try - catch - finally, zaproponuj obsługę błędu
 2. Przyjrzyj się jak poprawnie opisana jest funkcja helloICanBreak w JSDoc
 3. Co by było gdybyśmy pod throw wstawili np. 'string' - czy to dobra praktyka ?

 #Cel:
 Poznanie metod obsługi błędów. Poznanie iż w JS można wyrzucać
 jako błąd - co tylko chcemy.
 Jednak w praktyce - powinniśmy używać obiektu Error,
 chcąc go rozwinąć - np. dziedziczyć po nim lub komponować go.

 */

/**
 * @method will be broken depend on condition
 *
 * @param {boolean} condition
 * @throws {Error} when condition is a true value
 *
 * @return {string}
 * */
function helloICanBreak(condition) {
	if (condition){
		throw new Error('Breaker !')
	} else {
		return 'not-break'
	}
}

// Rozwiązanie:
helloICanBreak(true)

console.log('Kod poniżej się nie wykona :(')

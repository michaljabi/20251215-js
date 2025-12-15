/**
 *  Jeśli chodzi o instrukcje warunkowe, rozróżniamy:
 *
 *  if()
 *  else if()
 *  else
 *
 *  switch
 *
 *  ternary operator
 *
 *  możemy również wykorzystać operatory logiczne
 *
 *
 * Uwaga:
 * W JavaScript musimy uważać na porównania.
 * Trzeba używać === znaku porównania
 *
 * zobacz
 * https://dorey.github.io/JavaScript-Equality-Table/
 * */

let numericCondition = 0;

if(numericCondition === 1) {
	console.log('if !')
} else if (numericCondition){
	console.log('else if !')
} else {
	console.log('else !?')
}


const x = 100;
const higherThen10 = x > 10;
const hello = higherThen10 ? 'witaj' : 'żegnaj';

switch(hello) {
	case 'witaj':
		console.log('logika do witaj...');
		break;
	case 'żegnaj':
		console.log('logika do witaj...');
		break;
	default:
		console.log('Nieznana wartość')
}


// #1 Zadanie
// Sprawdź jaką wartość będzie miało hello jeśli zmienisz x na mniejsze niż 10
// Dlaczego tak się dzieje

// #2 Przygotuj własny console.log z który napisze "take a " oraz "coat" lub "t-shirt"
// w zależności od zmiennej weather która może przyjąć wartości "windy" oraz "sunny"
// wykorzystaj ternary operator

// #3 Zadanie:
// Jaką wartość przyjmie name poniżej?
// dlaczego tak się dzieje?


const name = 0 || false || '' || 'Jacek'


// #4 Zadanie:
// Popraw isFinal oraz profile tak aby otherName posiadało wartość "Grażyna"

const isFinal = false;
const profile = '';
const otherName = profile && isFinal && 'Grażyna'

console.log(otherName);

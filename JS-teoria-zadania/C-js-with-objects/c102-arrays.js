/**
 * Tablice są kolekcjami elementów o różnych typach.
 * W JavaScript - zawsze są one dynamiczne.
 *
 * Nawet określając wielkość tablicy - używając konstruktora
 * - można ją później zmienić - dodając elementy
 *
 *
 * W tablicy elementy mają określony porządek, i można się do nich odnieść po indeksach.
 * Tablica tworzona jest najczęściej za pomocą znaków: [] - to tzw. literał tablicowy
 * To wystarczy (nie używamy konstruktora)
 *
 * */

// Przykład tablicy:
// dla C#, pamiętaj że Array to typ generyczny w TS, co onacza że wyglą tak Array<T> => T[] (zapis w TS)
// co zonacza że  wmomencie deklarowania tablicy (przypisania) TS jest w stanie określić dopiero co tablica przechowuje
// TS przedstawia to tak: zamiast Array<string> to masz string[] (choć obydwa zapisy są poprawne)
// jeszcze dla C# i pozostałychL
// [] to jest to samo co new Array()
// to znaczy że [] - jest literał tablicowy (analogicznie {} to literał obiektowy )
const mutableArray = [ 'a', 'b', 'c', 'd' ];

// Sprawdzenie długości tablicy
console.log(mutableArray.length);

// Odczytanie elementu tablicy pod konkretnym indeksem:
console.log(mutableArray[0]);
console.log(mutableArray[4]);
console.log(mutableArray[-1]);
// można po 2024 metodą .at()
console.log(mutableArray.at(-1));
console.log(mutableArray[1]);

// Modyfikacja elementu tablicy pod konkretnym indeksem:
mutableArray[2] = 'x'

mutableArray.push('z', 'y', 'o', 'p' );
mutableArray.unshift('!')

// Jest to kolekcja po której można iterować
// Za równo pętlą for
for(let idx = 0; idx < mutableArray.length; idx++) {
	// wtedy odnosimy się do index'ów tablicy:
	console.log(mutableArray[idx]);
	console.log(idx);
}
// jak i składnią pętli "for of"
for(let element of mutableArray) {
	console.log(element);
}
// jak i wbudowaną metodą forEach
mutableArray.forEach( ( element, idx ) => {
	console.log(element)
	console.log(idx)
})

mutableArray.forEach( ( element ) => {
	console.log(element)
})


mutableArray.forEach( () => {
	console.log(' chce wywoła się tyle razy ile elmentów w tablicy, ale nie iteresują mnie te elementy')
})

// Metody mutujące tablicę (zmieniające jej składniki):
// Więcej ? sprawdź: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

// dodanie element(u/ów) na koniec:
mutableArray.push( 'e', 'f', 'g' );
console.log(mutableArray);

// "wyjęcie" ostatniego elementu:
mutableArray.pop();

console.log(mutableArray.slice(5)) 

// mutacja tablic w środku
console.log(mutableArray) 
console.log(mutableArray.splice(4, 1)) 

// dodanie element(u/ów) na początek:
mutableArray.unshift( 'x', 'y' );
console.log(mutableArray)

// "wyjęcie" pierwszego elementu:
const first = mutableArray.shift();

console.log(first);
console.log(mutableArray);

// UWAGA ! Tablica z elementami różnego typu | !-TEGO NIE PRAKTYKUJEMY-! |
const myBadArray = [ 1, 2, 'banana', 44, 55, 3, 'apple' ];

// pomimo że JS pozwala nam na trzymanie elementów różnego typu w Array - nie chcemy tego robić.

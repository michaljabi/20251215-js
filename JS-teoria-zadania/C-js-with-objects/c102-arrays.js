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
const mutableArray = [ 'a', 'b', 'c', 'd' ];

// Sprawdzenie długości tablicy
console.log(mutableArray.length);

// Odczytanie elementu tablicy pod konkretnym indeksem:
console.log(mutableArray[2]);

// Modyfikacja elementu tablicy pod konkretnym indeksem:
mutableArray[2] = 'x'

// Jest to kolekcja po której można iterować
// Za równo pętlą for
for(let x = 0; x < mutableArray.length; x++) {
	// wtedy odnosimy się do index'ów tablicy:
	console.log(mutableArray[x]);
}
// jak i składnią pętli "for of"
for(let element of mutableArray) {
	console.log(element);
}
// jak i wbudowaną metodą forEach
mutableArray.forEach(function ( element ) {
	console.log(element)
})

// Metody mutujące tablicę (zmieniające jej składniki):
// Więcej ? sprawdź: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

// dodanie element(u/ów) na koniec:
mutableArray.push( 'e', 'f', 'g' );

// "wyjęcie" ostatniego elementu:
mutableArray.pop();

// dodanie element(u/ów) na początek:
mutableArray.unshift( 'x', 'y' );

// "wyjęcie" pierwszego elementu:
const first = mutableArray.shift();

console.log(first);
console.log(mutableArray);

// UWAGA ! Tablica z elementami różnego typu | !-TEGO NIE PRAKTYKUJEMY-! |
const myBadArray = [ 1, 2, 'banana', 44, 55, 3, 'apple' ];

// pomimo że JS pozwala nam na trzymanie elementów różnego typu w Array - nie chcemy tego robić.

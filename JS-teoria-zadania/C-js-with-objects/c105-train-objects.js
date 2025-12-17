//  typy obiektowe przekazywane przez REFERENCJE
const fruits = ['cherry', 'apple', 'banana']; // typy obiektowe (czyli każdy inny niż te 7 co mieliśmy zapamiętać) - MUTABLE
// typy proste - przkazywane przez WARTOŚCI
let name = 'Fruit shop' // typy proste: IMMUTABLE

console.log(name.toUpperCase())

console.log(String); // konstuktor do typu prostego - dzięki któremu możliwe jest na typach prostych wywoływanie metod (taka sztuczka)
console.log(Boolean); 
console.log(BigInt); 
console.log(Number);
// NIGDY nie chcesz używać tych konstruktrów ze słowem kluczowym new!

// Na co dzień używamy tych funkcji powyżej (konstruktorów) do rzutowania:
console.log(String(1238612735))
console.log(Number('23672.123'))

// console.log(uppercase('abc'))

function greetings() {
	return 'welcome!'
}

/* #1 Zadanie:
	 Utwórz obiekt shop
	 który będzie posiadał pola: fruits name greetings
	 mają one mieć te same wartości co rzeczy zadeklarowane powyżej
*/
const shop = {
	// fruits: fruits,
	// name: name,
	// greetings: greetings
	
	// fruits: [].concat(fruits), //old JS
	fruits: [...fruits], // NEW shiny JS
	// fruits, // to będzie mutować, bo dajemy referencje
	name,
	greetings,
};

console.log(fruits);
console.log([...fruits]);
console.log([fruits])

console.log(fruits[2])
// console.log(fruits[20])
console.log(['A', 'B'][1])
// tablica tablic....
console.log([['A','B']][0][1])


console.log(shop);
console.log(shop.greetings())

name = 'Other shop';

console.log(shop.name)

fruits.push('?')

console.log(shop);

console.log(shop.fruits);
console.log(fruits);

// #2 Zadanie:
// pokaż na konsoli napis "banana welcome!" używając danych z obiektu
console.log(shop.fruits[2], shop.greetings())

const [,,banana] = shop.fruits;
// programistycznie to się nazywa interpolacja
// w js to się dokładnie nazywa (tak to szukaj w DOC) - template literals (template strings)
console.log(`${banana} ${shop.greetings()}`)
console.log(`${banana} ${shop.greetings()} ----> ${ 5 + 2 * 3 }`)
// old JS:
console.log(banana + ' ' + shop.greetings() + ' ----> ' + (5 + 2 * 3))

// #3 Zadanie:
// utwórz 2 obiekt concurrentShop który będzie klonem poprzedniego (zadeklaruj z tymi samymi wartościami)
// dodatkowo będzie miał również metodę banner - która zwróci "here prices are the lowest!"

const concurrentShop = {
	// fruits,
	// name,
	// greetings,
	...shop, // to jest shallow copy (czyli fruits dalej będzie referencją do shop.fruits)
	// 100% clone (dlatego żeby nie mieć referencji do shop.fruits tylko nową tablicę z owocami):
	fruits: [...shop.fruits],
	banner() {
		return "here prices are the lowest!"
	}
}
console.log(concurrentShop);

console.log(concurrentShop.fruits);
console.log(concurrentShop.greetings());

// #4 Zadnie:
// Pokaż na konsoli wszystkie nazwy pól obiektu shop
// 4.1 solucja 1
for( const field in shop) {
	console.log(field);
}
// 4.2 solucja 2
console.log(Object.keys(shop))

// inne metody statyczne na konstruktorze Object, które pozwalają nam na:
console.log(Object.values(shop))
console.log(Object.entries(shop))




// TODO: wyjaśnij Michał jak będzie mowa o ESM modules
export {};
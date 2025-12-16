/* #1 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości
*/
const shoppingCartItem = {
	name: 'Computer',
	price: 2000,
	tax: 0.23
}

/* #2 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem2 z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości

Pokaż w console.log sumy cen(price) i podatków(tax) obydwu produktów jako wartość koszyka
*/

const shoppingCartItem2 = {
	name: 'Fan',
	price: 200,
	tax: 0.23
}

const grossValue1 = shoppingCartItem.price + shoppingCartItem.price * shoppingCartItem.tax;
console.log(grossValue1);
const grossValue2 = shoppingCartItem2.price * shoppingCartItem2.tax + shoppingCartItem2.price;
console.log(grossValue2);
const cartValue = grossValue1 + grossValue2;

console.log(cartValue);


// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje
console.log({} === {})
console.log({} == {})

// TAK NAPRAWDĘ my robimy tak pod spodem:
console.log(new Object() === new Object())
console.log(new Object() == new Object())


// tzw. Factory function
// zadaniem tej funkcji będzie towrzenie nowych obiektów cartItem
function makeCartItem(name = '', price = 0, tax = 0.23) {
	return {
		name,
		price,
		tax,
		countGrossValue() {
			return this.price + this.price * this.tax;
		}
	}
}

const shoppingCartItem = makeCartItem('Computer', 2000);
const shoppingCartItem2 = makeCartItem('Fan', 200);

const grossValue1 = shoppingCartItem.countGrossValue();
console.log(grossValue1);
const grossValue2 = shoppingCartItem2.countGrossValue();
console.log(grossValue2);

console.log(shoppingCartItem.countGrossValue() + shoppingCartItem2.countGrossValue());


// A jak klasą ?
// np. na frontend Angular - używa class
class CartItem {

	constructor(name = '', price = 0, tax = 0.23) {
		this.name = name;
		this.price = price;
		this.tax = tax;
	}

	countGrossValue() {
		return this.price + this.price * this.tax;
	}
}

const shoppingCartItem3 = new CartItem('Computer', 2000);
const shoppingCartItem4 = new CartItem('Fan', 200);

console.log(shoppingCartItem3.countGrossValue() + shoppingCartItem4.countGrossValue());

// PROS dla class:
console.log(shoppingCartItem2 instanceof CartItem);
console.log(shoppingCartItem2 instanceof Object);
// wartość dodana klasy:
console.log(shoppingCartItem3 instanceof CartItem);
console.log(shoppingCartItem3 instanceof Object);

// CONS dla class:
// BOILERPLATE code tzw. - czyli musimy się wiecej kodu napisać


// Gdzie klasy błyszczą ZAWSZE w JS:
console.log(Error)
// 
class MyApplicationError extends Error {
	
}

console.log(new MyApplicationError('coś poszło nie tak'));

console.log('?');

// CDN. c202
throw new MyApplicationError('Coś poszło nie tak')

console.log('Jesli użyjesz `throw` to program nie działa dalej.... (uwaga: to zależy od scope)' )

const shoppingCartItem = {
	name: 'Computer',
	price: 2000,
	tax: 0.23,
	countGrossValue() {
		return this.price + this.price * this.tax;
	}
}

const shoppingCartItem2 = {
	name: 'Fan',
	price: 200,
	tax: 0.23,
	countGrossValue() {
		return this.price + this.price * this.tax;
	}
}

const grossValue1 = shoppingCartItem.countGrossValue();
console.log(grossValue1);
const grossValue2 = shoppingCartItem2.countGrossValue();
console.log(grossValue2);
const cartValue = grossValue1 + grossValue2;

console.log(cartValue);


console.log(shoppingCartItem.countGrossValue() + shoppingCartItem2.countGrossValue());

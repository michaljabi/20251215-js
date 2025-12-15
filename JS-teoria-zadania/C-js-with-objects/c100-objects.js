/**
 * JavaScript posiada tzw. literały obiektowe.
 * Pozwalają one utworzyć dany obiekt - bez potrzeby definiowania jego struktury
 * Tak jak dzieje się to w językach zorientowanych obiektowo - które używają klas.
 *
 * Na początek prosty przykład....
 */

// typy proste przekazywane są przez wartości
// a typy obiektowe - przez referencje
// możemy mieć kilka referencji do tego samego obiektu

// {} - jako obiekt, to tzw. Literał obiektowy, czyli sktócony sposób zapisu tego: new Object();

// Prosty przykład obiektu:
const user = {
	name: 'Marek',
	age: 24,
	isAdmin: false,
	address: {
		street: '',
		no: 0,
		postalCode: '00-000'
	}
};

user.isAdmin = true;

console.log(user.address);

// to jest pusty obiekt na console.log
console.log({});
console.log(new Object());

// jakiś konretny (wyjaśnienie pod C#)
console.log({ name: 'Marzena'}); // Wniosek: Literał obiektowy to tzw. Syntactic Sugar (lukier składnowy) - skrócony sposób towrzenia nowego obiektu
console.log(new Object({ name: 'Marzena'}));

const user2 = user;

user2.name = 'Krysia'
// user = {};

// użycie obiektu:
console.log(user);
// użycie pola obiektu:
console.log(user.name);

// Do pól obiektu można dostawać się dynamicznie !
console.log(user['name'])

// lub:
const key = 'name';
console.log(user[key])


// winnych jezykach programowania istnieją klasy:
class User {
	name = 'Marek'
}

console.log(new User());
console.log(new User());
console.log(new User());
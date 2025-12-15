/**
 * Obiekty które tworzyliśmy do tej pory, były przypisywane od razu - jednak
 * nie dawały nam swobody podobnej do "class" gdzie na podstawie klasy,
 * można tworzyć kolejne obiekty.
 *
 * Jak można osiągnąć taką funkcjonalność w JS?
 *
 * */


// Najprostszy sposób to metoda konstruująca:
function makeUser(name, lastName, email) {

	return {
		name: name,
		lastName: lastName,
		email: email
	}
}

const mike = makeUser('Mike', 'Doe', 'mike.doe@example.com');

console.log(mike)

// Można również imitować zachowanie klasy używając kontekstu
// (zwróć uwagę na słowo "this")

function User ( name, lastName, email ) {
	this.name = name;
	this.lastName = lastName;
	this.email = email;
}

const jenna = new User('Jenna', 'Doe', 'jenna.doe@example.com');

console.log(jenna)

// #1 Zadanie:
// Spróbuj użyć pól obiektów które zostały przygotowane
// zainicjuj nowe własne obiekty

// #2 Zadanie:
// Jak można skrócić zapis w funkcji "makeUser"?

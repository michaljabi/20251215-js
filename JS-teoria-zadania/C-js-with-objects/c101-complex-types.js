// // @ts-check
/**
 * W odróżnieniu od innych wysokopoziomowych języków,
 * pomimo swojej obiektowości, JS nie potrzebuje class
 *
 * Tutaj w momencie przypisania do zmiennej lub po prostu wpisania
 * w kod tzw. "Literału obiektowego" {}
 *
 * Tworzone jest miejsce w pamięci i nowa instancja obiektu
 *
 * Obiekt może być dynamicznie rozszerzany o nowe pola.
 * */

// Inny przykład obiektu JS:
// Po deklaracji i przypisaniu, jest gotowy do użytku!
const cat = {
	whiskers: 'long',
	eyes: 2,
	voice: function () {
		return 'Mrauuu';
	},
	// po 2015, możesz pisać tak:
	makeSomeNoice() {
		if(this.eyes > 1) {
			return `Mrauuu, I have got ${this.eyes} eyes`;
			// return 'Mrauuu, I have got ' + this.eyes + ' eyes'; // to wyżej to samo co tutaj.
		}
		return 'Mrauuu';
	},
	alwaysLandsOn4Feet: true
};

// #1 Zadanie:
// Pokaż na konsoli wynik działania metody voice
console.log(cat.voice());

console.log(cat.makeSomeNoice());
cat.eyes = 1;
console.log(cat.makeSomeNoice());
cat.eyes = 3;
console.log(cat.makeSomeNoice());

console.log(cat.voice);



// Kolejne przykłady:

// Na początku user posiada tylko pole "name"
const myUser = {
	name: 'Janina'
};

// Potem dynamicznie dodawane jest pole "lastName" z wartością:
myUser.lastName = 'Kowalska'

// przypomnienie:
// Istnieje zapis, który pozwala odnosić się do obiektu tak jak do kolekcji
// W tym układzie możemy "dynamicznie" dostać się do pola w obiekcie
// np.
console.log(myUser['name'])

// #2 Zadanie:
// Przypisz nowy obiekt do stałej - sprawdź i udowodnij że:
	// a) Nie można mieć kilka tak samo nazwanych pól w obiekcie
	// b) Jeśli wystąpi taka sytuacja to "wartość ostatniego pola wygrywa"

const warderobe = {
	name: 'My shop',
	
	// wniosek: ostatni wygrywa... będzie `t-shirt`
	clothes: 'skirt',
	clothes: 't-shirt',
}


console.log( { warderobe: warderobe } )
// po 2015, mamy skrócony syntax, jeśli nazwa indentifier istnieje to będzie to nazwa property tego obiektu
console.log( { warderobe } )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions

// po 2015 mamy spread operator, i ta operacja to przekopowanie do innego obiektu (shallow copy)
console.log( { ...warderobe } )
// można takie kopiowanie zrobic też tak, tylko UWAGA, 1 argument to musi być {} pusty obiekt, i wtedy też mamy shallow copy!.
console.log(Object.assign({}, warderobe)) 

// warderobe.name = 'My OTHER SHOP';

console.log(warderobe)

// Mamy nową szafę, i nadpisujemy wartość name
console.log({...warderobe, name: 'My new furniture'})

console.log({name: 'My new furniture', ...warderobe})


// Poza dynamicznym zapisem, można "dostać się" do wszystkich pól obiektu - dzięki pętli for...in
for(let key in myUser) {
	console.log(key);
}


// Zauważ, że obiekty można zagnieżdżać:
const tree = {
	branch: {
		leaf: 'green',
		isRoot: false
	}
}

console.log(tree.branch.leaf)

// #3 Zadanie:
// Pokaż na konsoli wartość isRoot w obiekcie tree:

console.log(tree.branch.isRoot);

// deep copy
console.log(structuredClone(tree) === tree)
console.log(structuredClone(tree).branch === tree.branch)

// shallow copy
const treeShallow = {...tree};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// branch obiekt w środku nie został skopiowany ! to referencje do tego samego obiektu w pamięci.
console.log(treeShallow.branch === tree.branch)

/**
 * W odróżnieniu od typów prostych (primitives).
 *
 * Obiekty nie są przekazywane przez wartości, a przez referencje.
 * Innymi słowy - tworząc jeden obiekt i przypisując go do zmiennej / stałej.
 * Jeśli zapiszemy kolejną zmienną / stałą i przyrównany do poprzedniej,
 * nie utworzymy niezależnej kopii obiektu - a jedynie 2 prowadzące w to samo miejsce w pamięci - odniesienia.
 * */

const house = {
	name: 'MyHome'
}
console.log(house);

const otherHouse = house;
console.log(otherHouse);

// jednakże to tak naprawdę ten sam obiekt:
console.log(house === otherHouse);
// a 2 wskazujące na to samo miejsce w pamięci odniesienia "referencje"
// dowód:
otherHouse.name = 'CHANGED NAME of my home 🏢'

console.log(house);


const realOtherHouse = {...house}; // shallow copy

console.log(realOtherHouse === house)
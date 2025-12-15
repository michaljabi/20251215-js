
const x = 2;
const y = 3;

// #1 Zadanie:
// Pokaż wynik dodawania x i y (oczekiwane: 5)
console.log(x + y);

// #2 Zadanie:
// Pokaż wynik potęgowania x do 3 (lub x do y) (oczekiwane: 8)
console.log(x * x * x)

console.log(Math.pow(x, y))
// po 2015:
console.log(x ** y);

//------------------------------------------------------------
const hello = 'Hello';
const almostWorld = 'Almost World';

console.log(almostWorld[0])
console.log(almostWorld[1])
console.log(almostWorld[2])

// 
console.log(almostWorld[6] + almostWorld[7] + almostWorld[8] + almostWorld[9]) //etc..


// #3 Zadanie:
/*
	Pokaż wynik dodawania hello + almostWorld
    Tak aby na konsoli pokazał się napis "Hello World"
    użyj odpowiedniej metody wbudowanej na stałej almostWorld (!)
*/
console.log(hello + almostWorld);

// 1:
console.log(almostWorld.substring(7));

// 2:
console.log(almostWorld.slice(-6));
console.log(almostWorld.slice(6));
console.log(hello + almostWorld.slice(6));

// 3:
const words = almostWorld.split(' ') 

// nowość po 2015, można zrobić destrukturyzacje tablicy
// spokojnie powiemy o tym przy temacie Arrays
// temat c102 i dalej..
const [, world] = almostWorld.split(' ');
console.log(world)

console.log(words);
console.log(words[0]);
console.log(words[1]);

console.log(hello + ' ' + words[1]);
console.log(hello, words[1]);
console.log(`${hello} ${words[1]}`)

//------------------------------------------------------------
let isAnAdmin = true;
console.log(isAnAdmin)
isAnAdmin = false;
console.log(isAnAdmin)

// logiczne NOT: to "!" przed wartością w JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
console.log(!isAnAdmin)

// tutaj wrócimy przy omiawianiu truthy / falsy values w JS.
console.log(!'');
console.log(!'a');

// #4 Zadanie
// Odkomentuj i napraw błąd w linii z kodem "isAnAdmin = false"
// Powinieneś zobaczyć następujący wynik na konsoli:
// true
// false


// To wyżej to nie do końca "refactoring", bo zmieniliśmy i kod i efekt finalny;

// refactoring - podejście w którym zmieniasz kod, ale efekt działania programu jest ten sam
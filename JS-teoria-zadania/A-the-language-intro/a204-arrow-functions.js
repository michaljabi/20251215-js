/**
 * --> ES6
 *
 Po 2015 roku do JS wprowadzony zostaje tzw. skrócony zapis funkcji: arrow functions.
 (w niektórych językach programowania mówi się o np. lambda expressions)

 Arrow functions poza skróconym zapisem posiadają jeszcze kilka własności:
 a) zawsze są anonimowe i zapisane jako wyrażenia
 b) jeśli możemy je zapisać w jednej linii jako poprawne wyrażenie, które oblicza się do wartości,
    wartość ta zostanie zwrócona jako wynik działania funkcji - bez konieczności użycia słowa kluczowego "return"

 # Zadania
 1. Porównaj i sprawdź działania "arrow functions", wywołując te funkcje i przedstawiając ich wartości na konsoli

 */

// Nowości ES6+ (po 2015r):
// dostajemy Arrow functions:
// Lukier składniowy (syntactic sugar) - krótszy sposób zapisu czegoś (w typadku funkcji a dokładniej wyrażenia funkcyjnego)
// arrow function TO ZAWSZE function expression
const newFunc = ( name ) => `Hello ${name}!`;
const newFunc2 = name => `Hello ${name}!`;
const newFunc3 = ( name ) => {




    return `Hello ${name}!`;
};

console.log(newFunc('Michał'))
console.log(newFunc2('Marek'))
console.log(newFunc3('Marzena'))

const x = 133;
x;

// to niżej nie zwróci obiektu, bo myśli że {} to ciało funkcji (zakres funkcji - scope)
const oneLinerReturingAnObjectFail = (name) => { 
    name 
};

// Sztuczka zapisu, żeby z arrow function zwrócic obiekt
const oneLinerReturingAnObject = (name) => ({ name });
console.log(oneLinerReturingAnObject('Michał'))

// Jeżli to wyżej nie do końca jeszcze dla Ciebie zrozumiałe (jeśli jeszcze tego nie czujesz), to pamiętaj że pod spodem to jest coś takiego:
const returningAnObject = (name) => {
    return {name}
    // return {name: name} // to wyżej to srkócony zapis tego
}
console.log(returningAnObject('Michał'))

// Przypomnienie:
// Funkcja może zwracać inną funkcję:
function hello() {
    return () => 'World';
    // return () => () => () => () => () => () => () => () => () => 'World';
}

const innerFn = hello();
// #2 Zadanie:
// Jak wyciągnąć wynik "World" ?

console.log(innerFn)
console.log(innerFn())

// przypomnienie:
// dla interpretera NIE MA ZMACZENIA - czy mamy stałą pomocniczą czy nie
console.log(hello()());







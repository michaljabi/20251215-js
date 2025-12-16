// @ts-check
// Dzieki temu komentarzowi powyżej, TS Serwer pomaga nam przy typowaniu i szukaniu błędów typowania w kodzie

// Identifier to coś takiego czemu nazwę nadaje programista.


// przed 2015r.
var x = 0
x = 1

// po 2015;
let myWorld = '';

let y = 2;
y = 5;
y++;
y += 20;
y = y + 3;
console.log(y);

const z = 3;

// z = 21;


// zmiana typu danych jest błędem ale tylko w TS 😭
let a = '22';
a = 1; // to jest błąd ale w TS, zauważ że runtimeowo działa ! (PS. TypeScript nie ma nic do runtime JS... pomaga nam tylko w edytorze kodu)
console.log(a);



// identifier użyty w tym samym SCOPE (zakres, zasięg), musi mieć inną nazwę !!!
// + JS jest case sensitive!
let xx = 2;
let xX = 3;

// raczej tak nie piszemy zakresów, one będą same nam się tworzyć
// jak robisz funkcję, jak używasz if/else, try/catch, pętli: for i while, oraz instukcji warunkowej switch() {}
{
    // to jest zakres, jeśli używamy let + const (nie zadziała dla var)
    // var NIE MA zasięgu leksykalnego

    let xx = 4;
    let iEgsistOnlyInThisScope = 'test'
    console.log(iEgsistOnlyInThisScope);


    // var nie daje błędy "cannot access before intialization"
    console.log(zzz);
    var zzz = 3
}

//  co to znaczy że var, nie ma zasięgu leksykalnego
// zobacz, wyciekło poza zakres:
console.log(zzz);
// to powyżej powinno zwróć błąd !
// tak jak np. to tutaj (bo tutaj użyłem let/const):
// console.log(iEgsistOnlyInThisScope);

function helloWorld() {
    let xx = 5;
}

// wywołanie funkcji:
helloWorld()
helloWorld()

// Reguły nazwnicze, jedynie 2 znaki alfanumeryczne:
let background_$Color = 'red'
// numbers:
let b3ack22groun2d_$Color2 = 'red'

// Nie możemy używać tzw. reserved keywords w języku do identifiers!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
/*
let let = 2;
let do = 2;
let if = 2;
let for = 2;
*/
let LET = 3;
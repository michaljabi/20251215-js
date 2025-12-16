
const helloWorld = "hello world!";
//const helloWorld = "";

console.log(helloWorld[0])
console.log(helloWorld[helloWorld.length-1])
// standardowy problem JS (a jakże...)
console.log(helloWorld[200])

//  nowość 2023 rok?
console.log(helloWorld.at(0))

// console.log(undefined.toUpperCase())
// console.log(helloWorld.at(0).toUpperCase())
console.log(helloWorld.at(-1))



// console.log(helloWorld.charAt(0))
// console.log(helloWorld.charAt(-1))
// Najbezpieczniejsze rozwiązanie, ponieważ .charAt - ZAWSZE zwróci string (sprawdź doc.):
console.log(helloWorld.charAt(0))
console.log(helloWorld.charAt(0).toUpperCase())
console.log(helloWorld.charAt(200))
console.log(helloWorld.charAt(helloWorld.length - 1))

// #1 Zadanie:
// Przygotuj funkcję a następnie wywołaj ją
// Niech odnosi się ona do zewnętrznego zakresu i korzysta z helloWorld, pokazując na ekranie
// pierwszy i ostatni znak stringa = 'h!'
// pomocna dłoń?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

function callMeNow() {
    console.log(helloWorld.at(0) + helloWorld.at(-1))
    let x = 10;
    function printMyNumber() {
        console.log(x + 400);
        console.log(helloWorld);
    }
    printMyNumber();
}
callMeNow();

// #2 Zadanie:
// Dopisz w środku funkcji zmienną lokalną x = 10

// #3 Zadanie:
// Dopisz w środku tej funkcji inną, która skorzysta i pokaże na ekranie wartość x + 400 (410)

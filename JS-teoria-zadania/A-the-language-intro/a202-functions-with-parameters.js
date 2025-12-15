// @ts-check

/**
 *  Funkcje mogą być deklarowane z tzw. parametrami.
 *  Są to zapisy odnoszące się do argumentów (danych) przekazanych do funkcji.
 *
 *  Można ich zdefiniować teoretycznie "nieskończenie wiele"
 *  stosując odpowiedni zapis z operatorem rest "..."
 *
 *  Jednak w praktyce nie chcemy żeby tych parametrów było więcej jak 5-7.
 *  Dla czytelności naszego kodu i wygody jego używania.
 *
 *
 *  W momencie deklarowania litery a i b to "parametry"
 *
 *  natomiast przesyłane dane "10" i "20" nazywamy argumentami
 */
function callMeWithoutArgs(a, b) {
	console.log(a);
	console.log(b);
	return a + b;
}
console.log(callMeWithoutArgs())
console.log(undefined + undefined);

console.log(123 * 'A');


// Deklaracja:
/**
 * Funkcja do obliczania sumy 2 liczb.
 * @param {number} a - 1 liczba
 * @param {number} b - 2 liczba
 * @returns number
 * 
 * JSDoc https://jsdoc.app/
 * Fajne z @ts-check i dopełnia to @ts-check ale "kosztowne" w utrzymaniu
 */
function sumTwoNumbers(a, b) {
	return a + b
}

// Wywołanie, podaje 2 argumenty, 10 i 20:
const result = sumTwoNumbers(10, 20)



// W momencie wywołania decyduje jakiego typu wrzucę argumenty
console.log(sumTwoNumbers('a', 'b'));
console.log(sumTwoNumbers(true, false));

// W momencie wyołania decyduje czy w ogole i jakie argumenty wrzucę
sumTwoNumbers();
sumTwoNumbers(1, 2, 3, 4, 5);
// sprawdzmy wynik:
console.log(sumTwoNumbers())
console.log(sumTwoNumbers(1, 2, 3, 4, 5))

// #1 Zadanie:
// Pokaż wynik dodawania 10 + 20 na ekranie
console.log(10 + 20);

console.log(result);
console.log(sumTwoNumbers(10, 20));

// #2 Zadanie:
// Policz ile to 30 + 560


// #3 Zadanie:
// co jeśli byśmy mieli policzyć 450 + 200 + 100 ?



/* ---------------------- */
// Funkcje po 2015 roku mogą posiadać parametry domyślne:

function greetings(user = 'Admin') {
	console.log('Hello', user)
}

// #4 Zadanie:
// spróbuj wywołać greetings z argumentami i bez argumentu, co się stanie ?

// greetings(null); to podmieni wartość user na `null`
greetings();
greetings(undefined);


// #5 Zadanie:
// Po wykonaniu zadania #4 usuń domyślną wartość user - co się stanie ?




//  nie używaj null, zwłaszcza przy początkowym przypisaniu wartości, stosuj taki typ jaki potem będzie przechowywała ta zmienna
// staraj się NIE ZMIENIAĆ dynamicznie typu
let x = 0;

x = 2
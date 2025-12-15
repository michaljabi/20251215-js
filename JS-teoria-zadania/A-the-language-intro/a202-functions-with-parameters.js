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

// Deklaracja:
function sumTwoNumbers(a, b) {
	return a + b
}

// Wywołanie:
const result = sumTwoNumbers(10, 20)


// #1 Zadanie:
// Pokaż wynik dodawania 10 + 20 na ekranie


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


// #5 Zadanie:
// Po wykonaniu zadania #4 usuń domyślną wartość user - co się stanie ?

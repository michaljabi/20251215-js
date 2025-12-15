/**

 Dlaczego funkcje są tak ważnym elementem ?

 Po 1 pozwalają one na "zamknięcie" części naszego kodu i wywołanie go w dowolnym momencie.
 Po 2 powodują iż nie musimy się powtarzać z kodem
 Po 3 możemy zdefiniować ich parametry wejściowe i na ich podstawie zwracać wynik działania


 # Zadania
 1. Co się stanie jeśli spróbujesz wywołać "sumMyNumbers" przed deklaracją ?
 2. Co zwraca funkcja która nic nie zwraca ?

 */

/*-----------> PART 1: >---------------------------------*/

// Funkcja anonimowa, która posiada wskaźnik "sumMyNumbers"
// Tylko dzięki wskaźnikowi (stałej) - możemy się do niej później odwołać!
const sumMyNumbers = function(a = 0, b = 0) {
    return a + b
}

console.log(sumMyNumbers())
console.log(sumMyNumbers(10, 20))


/*-----------> PART 2: >---------------------------------*/

// Hmmm... skoro funkcje możemy traktować jak zwykłe "wartości" np.
let sampleNumber = 10
// To powinniśmy je również móc przekazać jako parametr w funkcji:

const sayHello = function() {
	console.log('Hello John!')
}
// Zapis powyżej to tzw. "Function expression" - wyrażenie funkcji
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

function greetings(sayHelloFn, luckyNumber) {
	sayHelloFn()
	console.log('Your lucky number is', luckyNumber)
}
// Zapis powyżej to tzw. "Function declaration" - deklaracja funkcji
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

greetings(sayHello, sampleNumber)


/*-----------> PART 3: >---------------------------------*/

// Hmmm... skoro funkcja przyjmuje funkcje to może ją też zwracać!?

function welcome() {
	return function() {
		console.log('Welcome stranger')
	}
}

// #3 Zadanie:
// Jak dostać się i wywołać "Welcome stranger" na ekranie ?



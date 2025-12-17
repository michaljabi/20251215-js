// #1 Zadanie:
// Zadeklaruj nową tablicę z numerami 1 do 8
// Wyrzuć z niej pierwszą i ostatnią wartość
const myNumbers = [1,2,3,4,5,6,7,8];
console.log(myNumbers.pop());
console.log(myNumbers.shift());

console.log(myNumbers);

// usuiniecie i wyciągniecie lementów ze środka
// console.log(number.splice(1, 2))
// console.log(number)

// #2 Zadanie:
// Pokaż na konsoli "jedno pod drugim" wynik mnożenia pól tej tablicy przez 3
for(const num of myNumbers) {
    console.log(num * 3);
    //myNumbers
}


// #3 Zadanie:
// Sprawdź w dokumentacji metodę "indexOf" dla tablic. Jak ją użyć? Pokaż przykład zastosowania
console.log(myNumbers.indexOf('a'))
console.log(myNumbers.indexOf(0))

console.log(myNumbers.indexOf(5))
// szukam następnej cyfry 5, w array:
console.log(myNumbers.indexOf(5, myNumbers.indexOf(5) + 1))

// #4 Zadanie: 
// Pokaż na konsoli 1-wszy i ostatni element tablicy (jeden pod drugim)
// (make it work)
console.log(myNumbers[0])
console.log(myNumbers[myNumbers.length - 1])

// refactor #4 (make it right)
console.log(myNumbers.at(0))
console.log(myNumbers.at(-1))
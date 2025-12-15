/**
 *  W JavaScript występuje mechanizm tzw. niejawnego rzutowania typów.
 *  Ważne jest żeby wiedzieć o jego istnieniu, aby zaoszczędzić sobie czasu
 *  na głowienie się dlaczego coś nie działa w kodzie tak jakbyśmy tego chcieli
 *
 *  Standardowo w większości języków wysokopoziomowych operacja tego typu:
 *
 *  '1' + 100
 *  jest niedozwolona!
 *
 *  Trzeba "rzutować" jawnie typ na jednakowy (albo string albo number)
 *  inaczej kompilator zwróci błąd.
 *
 *  Programista musi wtedy pokazać swoje intencje i wrócić (poprawić) kod.
 *
 *  W JavaScript takie operacje przechodzą "bez większego echa"
 *  Są prawidłowe - a JS za nas dokona "
 *
 * */

// Wyniki takiego zapisu wyglądają podobnie:
console.log(1 + '');
console.log('' + 1);

// To że kolejność tych działań ma znaczenie, pokazuje dokładnie przykład poniżej:
console.log(1 + 1 + 1 + '222')
console.log('222' + 1 + 1 + 1)

// Inne przykłady niejawnego rzutowania
console.log(true + false)
console.log(false + true)
console.log(true + true + true + true)
console.log(2 + true)
console.log(2 - true)

console.log(true + 1 + '')
console.log('' + true + 1)

console.log(true/2)

// Nawet jeśli operacja nie może być "rzutowana" niejawnie
// JavaScript i tak nie rzuci nam błędu.
// Po prostu wyświetli nam wynik jako NaN -> (Not a Number)
console.log(true*'false')

// Istnieje jeszcze jeden "dziwny" wynik liczbowy - możliwy do uzyskania w JavaScript:
// np. weźmy pod lupę niemożliwe w matematyce "dzielenie przez zero":
console.log(1900/0)

// Czasem możemy wykorzystać niejawne rzutowanie na swoją korzyść
// pomagają nam w tym operatory:
console.log(!!'', typeof !!'')
console.log(!!0, typeof !!0)
console.log(!!100, typeof !!100)
console.log(!!'hello', typeof !!'hello')

console.log(+'100', typeof +'100')
console.log(+'52', typeof +'52')

console.log(''+100, typeof (''+100))

// #1 Zadanie:
// Udowadniając zrozumienie niejawnego rzutowania
// Napisz linię kodu która pokaże na ekranie napis: "Hello Infinity"
// Użyj jak najmniejszej ilości znaków w kodzie !!!


// #2 Zadanie:
// Bez podglądania z console.log() postaraj się odpowiedzieć
// jaką wartość ma stała myCoercionFriend
const myCoercionFriend = true + 1 + 2 * 3 + ' is your lucky flag!'

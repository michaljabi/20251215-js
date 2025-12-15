/**
 * Po 2015 dostajemy zasięg leksykalny zmiennych i 2 słowa kluczowe
 * używamy let i const zamiast var
 *
 * Używanie "var" niesie ze sobą niebezpieczeństwo - ponieważ zmienna zadeklarowana z "var" nie posiada tzw. zasięgu leksykalnego
 * (innymi słowy 'wylewa się' poza pętle for, instrukcje warunkowe i inne { bloki kodu } nie będące funkcjami)
 *
 * */

const welcomeMessage = 'Hello World!'

console.log(welcomeMessage);

// let, const i konwencje nazewnicze:


// Nazwy zmiennych piszemy camelCase:
let myNumber = 10;

// Staramy się nie zmieniać typu zmiennych, czyli number ma zostać number'em:
myNumber = 100;
console.log(myNumber + 200);
// myNumber = 'hello'; // NIE ! tego nie praktykuj - więcej o tym powiemy w ./a103-js-is-dynamic.js

// Jeśli wiemy że nie będziemy nigdzie zmieniać wartości zmiennej - to zamiast tego robimy stałą:
const luckyNumber = 7;

// luckyNumber = 10; // ta operacja nie jest teraz dozwolona - i o to nam chodzi.

// Nazwy specjalnych stałych - często używanych w większej części aplikacji
// Zdefiniowanych dla kilku "plików" (modułów)
// możemy zapisać z dużych liter w SNAKE_CASE:

const MAX_SCREEN_WIDTH = 1920;


// W JS nie musisz pisać średników na końcu,
// w większości przypadków - nie powoduje to żadnych konsekwencji (są wyjątki 😑 )
console.log('Hello !')
console.log('Hello 1!')
console.log('Hello 2!')

// Zadanie:
// pokaż na ekranie liczbę: 1920
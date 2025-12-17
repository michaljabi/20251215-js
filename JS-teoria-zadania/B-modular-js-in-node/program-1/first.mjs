import { Car } from "../program-2/Car.mjs";
import hello, { myText, myOtherNumber } from "./say-hello-world.mjs"; //rozszerzenie .mjs jest CELOWE - żeby zadziałało w Node.js bez użycia `package.json`

// Osobne pliki w JS nazywają się "Modułami".
// Składnia import/export nazywa się ESM
// co rozwija się Ecma Script Modules.

console.log(hello);

//console.log(hello === sayHelloWorld);
console.log(myText);

console.log(myOtherNumber);

hello.sayHello();

console.log('Your lucky number is', hello.LUCKY_NUMBER)


// Zaimportuj do tego pliku, klasę Car
// zrób za jej pomocą instancję car czyli (const car = new Car() )
// pokaż instancję na konsoli ../
const car = new Car();
console.log(car);
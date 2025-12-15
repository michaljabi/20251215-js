/**
 *  JavaScript posiada jeszcze kilka popularnych typów wbudowanych
 *
 * */

// Data i czas:
console.log('>> DATES hello:');
console.log(new Date());
console.log(new Date().toISOString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().getHours());
// więcej:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Wyrażenia regularne:
console.log('>> REGEXP:');
console.log(/[lH]/g.test('Hello'));
console.log(new RegExp('[lH]', 'g').test('Hello World'));
// więcej:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// Obliczenia matematyczne
console.log('>> MATH:');
console.log(Math.log(Math.E));
console.log(Math.max(10,9,2,1,100,22,0,0,0,-120));
console.log(Math.random());
console.log(Math.round(2.111214));
console.log(Math.abs(-121));
console.log(Math.PI);
// więcej:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Błędy
console.log('>> ERROR:');
const err = new Error('this is the end!');
console.log(err);
console.log(err.message);
console.log(err.name);
console.log(err.toString());
// więcej:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

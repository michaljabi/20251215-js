// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// jestem gotów na nieskończenie wiele parametrów
function sum(specialNumber = 0, ...numbers) {
    // let numbers = []
    console.log(specialNumber);
    console.log(numbers);
    // console.log(numbers1);
    // console.log(numbers2);
    // console.log(numbers3);
    // reszta do Implementacja sumowania
    let result = specialNumber;
    for(const num of numbers) {
        // console.log(num);
        result += num;
    }
    return result;
}


// sum(1)
// nieskończenie wiele argumentów
// sum(55,2,3,4,5,6,7,90,1300, '?')
console.log(sum())
console.log(sum(2))

console.log(sum(2,9,82,3,1,12,3))

// console.log(sum(1,2,3))

// console.log(sum(1,2,3,6,6))

// console.log(sum())


const numericValues = [9,10,11];
// a spread byłby tak:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
console.log(sum(...numericValues))

// można spreadować jako argumenty DOWOLNĄ kolekcję iterowalną
console.log(sum(...['a', 'b', 'c']))
console.log(sum(...'abcdef'))

console.log(sum(...[]))
console.log(sum(...[6]))
console.log(sum(...[6, 10]))
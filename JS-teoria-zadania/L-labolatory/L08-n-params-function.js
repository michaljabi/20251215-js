// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// jestem gotów na nieskończenie wiele parametrów
function sum(...numbers) {
    console.log(numbers);
    let result = 0;
    for(const num of numbers) {
        // console.log(num);
        result += num;
    }
    return result;
}


// sum(1)
// nieskończenie wiele argumentów
console.log(sum(1,2,3,4,5,6,7,8,9))

console.log(sum(1,2,3))

console.log(sum(1,2,3,6,6))

console.log(sum())
function sayHello() {
    console.log('Hello world');
}

sayHello();
console.log('Fireworks!')
sayHello();



// Asynchroniczność:

// To wynika z faktu że JS jest jednowątkowy ALE ! nie "zapycha wątku"
// Jeśli chcesz więcej w temacie (tzw. mikrotaski (np. Promise) i taski w JS) - poczytaj o EventLoop
setTimeout(() => {
    console.log('Pierwszy')
}, 0)
console.log('Drugi')

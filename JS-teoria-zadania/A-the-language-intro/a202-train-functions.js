// #1 Zadanie:
// Napisz funkcję, która wyświetli na ekranie napis: 'Witaj Nieznajomy'
// wywołana bez argumentu
// wywołana z argumentem 'Michał' wyświetli napis: 'Witaj Michał'
// Zastanów się nad poprawnymi nazwami funkcji i jej parametru

function sayHello(name = 'Nieznajomy') {
    // console.log('Witaj', name)
    // console.log('Witaj ' + name);
    console.log(`Witaj ${name}`);
}

// 1 bez argumentu
sayHello();

// z argumentem
sayHello('Michał');
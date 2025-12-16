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

// Rozwiązanie z ifami + sprawdzenie typu + zaprzeczenie !== - "nie równa się":
function sayHelloIf(name) {
    if(typeof name !== 'undefined') {
        console.log(`Witaj ${name}`);
    } else {
        console.log(`Witaj Nieznajomy`);
    }
}


sayHelloIf();
// sayHelloIf('Michał');

// Jednakże w JS możemy zapisać to też tak:
function sayHelloIf2(name) {
    if(name) { // do if() możesz wrzucić CO CHCESZ, dosłownie co chcesz... dosłownie co chcesz (nie tylko wartość logiczną)
        console.log(`Witaj ${name}`);
    } else {
        console.log(`Witaj Nieznajomy`);

    
    }
    // console.log('nie zależnie od przypadku....')
}

sayHelloIf2();
sayHelloIf2(null);
sayHelloIf2('');
sayHelloIf2(0);
sayHelloIf2(NaN);


sayHelloIf2("Ania");


function sayHelloMustBeString(name) {
    if(typeof name !== 'string') {
        throw new Error('Name must be a string');
        // return 2;
    }
    console.log(`Witaj ${name}`);
}


// console.log(sayHelloMustBeString());










// sayHelloMustBeString('Marzena')
try {
    sayHelloMustBeString()
    sayHelloMustBeString()
    sayHelloMustBeString()
} catch(e) {
    console.log(e.message);
}

// dzięki użyciu try - catch, program idzie dalej

console.log('Ja nie działam :(')
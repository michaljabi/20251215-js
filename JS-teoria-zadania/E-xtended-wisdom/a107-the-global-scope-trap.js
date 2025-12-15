//"use strict";
/**
 * Niestety w JavaScript można zadeklarować i przypisać zmienną bez użycia słowa kluczowego.
 *
 * Nie powinniśmy tego robić!.
 * Jednak przy standardowych ustawieniach - JS nie zwróci błędu.
 *
 * Pamiętaj o tym żeby zawsze używać let, lub const.
 *
 * Zobaczmy jednak co stanie się jeśli tego nie zrobimy
 * */

function makeAHello() {
	hello = 'World';
	// Linia powyżej jest akceptowalna w JS. (zwróć uwagę na brak: var / let / const)
	// Powoduje to jednak pewien problem.
}

makeAHello();

// zmienna hello nie jest teraz jak nam się wydaje w zakresie tylko funkcji makeAHello() !
// została ona przypisana do przestrzeni globalnej
// oto dowód w Node.js:
console.log(global.hello);

// Wniosek:
// ZAWSZE PAMIĘTAJ O SłOWIE KLUCZOWYM przed deklaracją zmiennej!

// Czy można to zachowanie zmienić ?!
// Czy JavaScript mogłoby zwracać w tym układzie błąd - żeby nam pomóc wychwycić takie momenty?

// TAK.
// Należy odkomentować "use strict" na górze i jeszcze raz uruchomić interpreter (restart Quokka.js lub JS REPL)
// Wtedy naszym oczom ukaże się piękny błąd.
// O to dokładnie chodziło!


// Więcej o strict mode?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

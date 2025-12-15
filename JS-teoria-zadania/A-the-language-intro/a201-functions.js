/**
 *  Funkcje - to jedne z podstawowych elementów bez których nie można mówić
 *  o zbudowaniu aplikacji.
 *
 *  Po 1 pozwalają zamknąć wykonywany kod w postaci procedur.
 *  Mówiąc prościej: unikami powtórzeń, ponieważ coś co napisaliśmy możemy wywołać kilka razy
 *  Dzięki użyciu funkcji
 *
 *  Po 2 są w stanie przeliczać dane w zdefiniowany przez nas sposób. Posiadając dane wejściowe
 *  Input - generują dane wyjściowe - Output.
 *
 */

// Deklaracja:
function sayHello() {
	console.log('Witaj!')
}

// Wywołanie:
sayHello()


// #1 Zadanie:
// Jak szybko powtórzyć te zapisy 4 razy na ekranie:
// chcemy widzieć 4 pudełka jedno pod drugim

function showMeTheBox() {
	console.log('  ____________')
	console.log('|  in the box  |')
	console.log('  ------------')
}

showMeTheBox();
showMeTheBox();
showMeTheBox();
showMeTheBox();

/*
console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')

console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')

console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')
*/
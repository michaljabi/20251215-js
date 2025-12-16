
/**
 * Tutaj testujemy zachowanie kolejnych poziomów w przypadku zakresów (SCOPES);
 *
 *
 * #1 Zadanie:
 * Idąc od wewnątrz (fourthDream) do zewnątrz (inception)
 * Komentuj po kolei stałą nazwaną: "myColor"
 * (najpierw linia 24 potem 21 etc... aż do 12)
 *
 * Zobacz jak zachowuje się i co pokazuje console.log z linii 28
 *
 * */

//const myColor = 'red';

function inception() {
	//const myColor = 'cristal';

	function secondDream() {
		//const myColor = 'sapphire';

		function thirdDream() {
			const myColor = 'emerald';
			fourthDream();

			function fourthDream() {
				"use strict"; // m.in. naprawia this w funkcjach które nie są podpięte pod obiekt (NIE POWINNY stosować this), dlatego this będzie undefined;
				const myColor2 = 'diamond';
				//global.myColor = 'bazinga!';
				console.log(global)

				console.log(this);
				// jeżeli twoja zmiena/stała/paramert (w skrócie: Identifier) nazywa się tak samo jak inny Identifier którego chcesz użyć
				// z Outer Socope - to niestety.... to jest niemożliwe, bo występuje tzw. Shadowing 
				// więć musisz zmienić nazwę tego identifiera np. tutaj na myColor2
				console.log(myColor2);
				console.log(myColor);
			}
			
		}
		thirdDream();
	}
	secondDream();
}
inception();

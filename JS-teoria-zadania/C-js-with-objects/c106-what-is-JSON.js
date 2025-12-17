/**
 *  JSON = JavaScript Object Notation
 *
 *  Sposób zapisu JavaScript, który pozwala na jego przechowywanie w postaci tekstowej.
 *  Jego szerokie zastosowanie widać w komunikacji klient - server za pomocą AJAX.
 *  Gdzie dane z serwera do klienta są przesyłane właśnie w tej formie.
 *
 *  Dodatkowo jest zastosowany jako warstwa zapisu w niektórych bazach NoSQL oraz potrafi być zapisany
 *  jako pole rekordu w bazie danych (np. format json/jsonb w PostgreSQL)
 *
*/

// Przykład notacji JSON:

const myJSON = {
	"name": "Michał",
	"lastName": "Kowalski",
	"age": 22
}

// Zauważ że każdy z kluczy - musi tutaj być "opakowany" w znaki cudzysłowu - "...."
// Nie ma "alternatywy" - nie można zmienić tych znaków np. na - '...'
// co w przypadku czystego JS - jest możliwe dla stringów.

// Poza tym, string jest opakowywany w cudzysłowy, boolean i number - nie muszą.
// Cały ten zapis daje pewną elastyczność, przechowywania danych jako tekstowe, przykładowo:
console.log("\"")
console.log('"')

const myJSONString = '{"name":"Michał","lastName":"Kowalski","age":22}';

// Powyższy zapis można później sparsować - jako klasyczny obiekt JavaScript z polami i wartościami.

console.log(myJSONString.lastName) // to nie zadziała - bo myJSONString to po prostu string.

// Jednak po parsowaniu do JS:
console.log(JSON.parse(myJSONString).lastName)
console.log(JSON.parse(myJSONString))

/**
*  Dane z obiektu łatwo można przekształcić w natywny JavaScript i odwrotnie, łatwo obiekt JS zmienić w JSON
*
*  ALE UWAGA:
	*  Nie odbywa się to "bezstratnie" ! Nie da się przekonwertować niektórych elementów - a niektóre ulegają zmianie.
*
*  Tutaj przetestujemy zachowanie serializacji i deserializacji do JSON (przekształcenia do JSON i z powrotem)
* */

const superObject = {
	name: 'Michał',
	age: 56,
	isAMember: true,
	birth: new Date(1963, 10, 1),
	shoutHello() {
		console.log('Hello !')
	},

	// Circular structure - imitacja:
	/* 
	get unwrap() {
		return this
	}
	*/
	// myNumber: 29n
}

console.log(superObject.unwrap);

// Serializacja do JSON:
try {
	const jsonData = JSON.stringify(superObject, null, 2);
	console.log(typeof jsonData);
	console.log(jsonData);
} catch (e) {
	console.log(e.message)
}

// Mam JSON a chce mieć JS:
const addressStr = `
{
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
`

console.log(typeof addressStr);

const address = JSON.parse(addressStr)

console.log(typeof address);
console.log(address)
console.log(address.geo)
console.log(address.zipcode)

// Przykład zastosowania JSON:
// komunikacja z back-end:
// https://jsonplaceholder.typicode.com/users

// Deserializacja:
// const myReturnedObject = JSON.parse(jsonData)

// #1 Zadanie:
// Wyświetl dane po serializacji do JSON - zobacz co się stało z danymi

// #2 Zadanie:
// Teraz przywróć dane za pomocą JSON.parse - co się stało z danymi? W jakim są formacie?



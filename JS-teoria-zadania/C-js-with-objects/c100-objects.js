/**
 * JavaScript posiada tzw. literały obiektowe.
 * Pozwalają one utworzyć dany obiekt - bez potrzeby definiowania jego struktury
 * Tak jak dzieje się to w językach zorientowanych obiektowo - które używają klas.
 *
 * Na początek prosty przykład....
 */

// Prosty przykład obiektu:
const user = {
	name: 'Marek'
};

// użycie obiektu:
console.log(user);
// użycie pola obiektu:
console.log(user.name);

// Do pól obiektu można dostawać się dynamicznie !
console.log(user['name'])

// lub:
const key = 'name';
console.log(user[key])

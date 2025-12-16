

// Rzeczy które nie istnieją w Node.js ale istnieją w browser:
try {
    console.log(window);
    console.log(document);

    // W przeglądarce:
    console.log(globalThis === window)
} catch(e) {
    console.log('Mam error', e.message)
    console.log('Ale ide dalej...')
}

// coś co istnieje w Node.js a nie istnieje w browser:
console.log(global);


// Dlatego bezpiecznie (niezależnie od runtime, użyć globalThis)
// glbalThis w Node.js to global
console.log(globalThis === global)


// Możemy zrobić dzięki temu tzw. skrypt IZOMORFICZNY
// Czyli działający i tutaj i tutaj (jeśli w tym skrypcie odnosimy sie do przestrzeni globalnej)

// CDN. ten problem rozwiążemy jutro (dzięki użyciu ESM = Ecma Script Modules)
// const h1 = document.querySelector('h1')

if(h1) {
    setTimeout(() => {
        // h1.innerText = h1.innerText + '🎅';
        // kolejny lukier składniowy:
        h1.innerText += '🎅';
    }, 5000) 
}
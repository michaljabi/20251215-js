// import na samej górze pliku
// import { insertPanel, fruitInput } from './selectors.js'
import sel from './selectors.js'

export function addFruitToList(name = '') {
    if(!name.trim()) {
        return;
    }
    const panelBlockA = makePanelBlockAnchor(name);
    sel.insertPanel.before(panelBlockA);
    sel.fruitInput.value = '';
}

function makePanelBlockAnchor(text = '', classList = 'panel-block p-4 is-size-4') {
    const anchor = document.createElement('a');
    anchor.className = classList;
    anchor.textContent = text;
    return anchor;
}
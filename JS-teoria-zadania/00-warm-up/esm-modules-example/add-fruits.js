// impona samej górze pliku

const insertPanel = document.querySelector('[data-insert-panel]');
const fruitInput = document.querySelector('[data-fruit]');

export function addFruitToList(name = '') {
    if(!name.trim()) {
        return;
    }
    const panelBlockA = makePanelBlockAnchor(name);
    insertPanel.before(panelBlockA);
    fruitInput.value = '';
}

function makePanelBlockAnchor(text = '', classList = 'panel-block p-4 is-size-4') {
    const anchor = document.createElement('a');
    anchor.className = classList;
    anchor.textContent = text;
    return anchor;
}
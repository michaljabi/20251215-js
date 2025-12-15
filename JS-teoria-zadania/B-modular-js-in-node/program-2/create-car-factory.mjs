/*
* Ten kod zadziała bardzo podobnie do ./Car.mjs.
* Jego cel - jest ten sam
* tj. tworzenie nowych obiektów z .name + .model + metoda .makeSomeNoise()
* */

export function createCarFactory(name = 'Audi', model = 'A8') {

    return {
        name,
        model,
        makeSomeNoise() {
            console.log( `Wroom, wroom... ${this.name} ${this.model}` );
        }
    }
}
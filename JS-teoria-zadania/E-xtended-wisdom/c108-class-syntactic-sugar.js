
  /**

   # Zadania
   1. Sprawdź dziedziczenie, zadeklaruj nową klasę Vehicle i dziedzicz po niej NewCar
   2. Co się stanie jeśli zapomnimy słowa new (porównaj z c107-making-classes-in)


   Poznanie lukru składniowego "class".
   Piękno takich nowości w JavaScript polega na tym, że tak naprawdę pod spodem
   JS zamieni tę klasę na faktyczną "funkcję konstruującą". Wiec zachowa swoją dotychczasową naturę.
   można to zobaczyć np. w Babel'u: {@link https://babeljs.io/}

   */

  class NewCar {

    constructor () {
      this.engine = 'V8';
      this.name = 'Aston Martin Vantage';
    }

    makeSomeNoise () {
      console.log( `Wroom ${this.engine}, wroom - the ${this.name} is driving here` );
    }
  }

  new NewCar().makeSomeNoise();

  const otherCar = new NewCar();

  otherCar.engine = 'V12';
  otherCar.name = 'Aston Martin DB11';

  otherCar.makeSomeNoise();


  /**
   Poznanie nowych Obiektów w ES6+: Sety i Map'y.

   Iteracja po elementach Mapy i Set'u
   */


// Dawniej jako Hash Mapę można było uzyskać dzięki wykorzystaniu obiektu
// i jego dynamicznych rozszerzeniach

  const oldFashionWay = {};
  oldFashionWay[ 'key' ] = 'value';
  oldFashionWay[ 'key' ] = 'other-value';
  console.log( oldFashionWay[ 'key' ] );

//MAPS:

  const myMap = new Map();

  myMap.set( 'hello', 'world' );
  myMap.set( 'hello', 'world 2' );
  myMap.set( 'myName', 'Andrew Walker' );

  console.log( myMap );
  console.log( myMap.get( 'non-existing' ) );
  console.log( myMap.get( 'hello' ) );

  const mapFromArray = new Map( [ [ 'key', 'value' ], [ 'key2', 'value2' ] ] );

  console.log( mapFromArray.get( 'key' ) );

  console.assert( mapFromArray.delete( 'key' ) );
  console.log( mapFromArray.get( 'key' ) );

  // więcej:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// SETS:
  const mySet = new Set();

  mySet.add( 'value' );
  mySet.add( 'value' );
  mySet.add( 'value' );

  console.log( mySet );

  const mySetFromArray = new Set( [ 1, 1, 2, 3, 3, 4, 6, 8, 10, 190, 190 ] );

  let iterator = mySetFromArray.values();
  console.log( iterator.next() );
  iterator = mySetFromArray.values();
  console.log( iterator.next() );

  for ( let item of myMap.values() ) {
    console.log( item );
  }

  // więcej:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  // Zadania:

  // #1 Dodaj i odejmij elementy do map'y i do set'u

  // #2 Sprawdź iterowanie używając pętli for...of

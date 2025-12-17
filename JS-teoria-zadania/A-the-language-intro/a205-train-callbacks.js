function sum(a, b) {
	console.log(a + b);
}

function getPosition(u) {
	console.log(u.jobTitle);
}


// PROVIDER
// roboczo funkcja przekzywana (jako argument) a tutaj pod parametrem getCalculationsCallback nazywa się "callback".
function getVatTaxRateFromServer(getCalculations) {
	// getCalculations(0.23)
	// getCalculations(0.21)
	setTimeout(() => {
		// korzystam z outer scope - zakres,
		// precyzyjnie ta sytuacja tutaj nazywa się "closure" - domknięcie
		getCalculations(0.22)
	}, 5000)

	// return 0.12
}

// odbierz 0.23 i pokaż na console.log() 
// poza getVatTaxRateFromServer
// console.log(getVatTaxRateFromServer(() => {}))

// CONSUMER #1 arrow function expression
getVatTaxRateFromServer((v) => { 
	console.log(v); 
})

// CONSUMER #2 function expression
getVatTaxRateFromServer(function (val) { 
	console.log(val); 
})

// CONSUMER #3 function declaration
function consumer3Callback(value) {
	console.log(value); 
}

getVatTaxRateFromServer(consumer3Callback)












function myCallback(value) {
	console.log(value)
}

myCallback(2)

//getVatTaxRateFromServer(myCallback)

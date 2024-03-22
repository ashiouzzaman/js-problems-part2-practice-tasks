// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// Function
function calculateElectronicsBudget(
	laptopQuantity,
	tabletQuantity,
	mobileQuantity
) {
	const laptopPrice = 35000;
	const tabletPrice = 15000;
	const mobilePrice = 20000;

	let totalMoneyRequired =
		laptopPrice * laptopQuantity +
		tabletPrice * tabletQuantity +
		mobilePrice * mobileQuantity;

	return totalMoneyRequired;
}


// Calling the function
console.log(calculateElectronicsBudget(35, 12, 2))
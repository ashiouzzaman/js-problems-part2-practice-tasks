// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// Creating function for finding lowest number
function lowestNumber(numbers) {
	let checkLowest = numbers[0];
	for (number of numbers) {
		if (number <= checkLowest) {
			checkLowest = number;
		}
	}
	return checkLowest;
}

// Calling the function
const heights2 = [167, 190, 120, 165, 137, 5, 10, 3];
console.log(lowestNumber(heights2));

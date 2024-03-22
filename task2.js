// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// Creating function for finding smallest name
function smallestName(names) {
	let checkSmallestName = names[0];
	for (let name of names) {
		if (name.length <= checkSmallestName.length) {
			checkSmallestName = name;
		}
	}
	return checkSmallestName;
}

// Calling the function
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'po'];
console.log(smallestName(heights2))

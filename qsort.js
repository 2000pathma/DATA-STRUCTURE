////javascript program for sorting an array using Quicksort algorithm
var num = [3, 0, 2, 5, 4, 1 ];
console.log("Original array: " ,num);
var sortedArray = quick_Sort(num);
console.log("Sorted array: " , sortedArray);
function quick_Sort(numarr) {
	if (numarr.length <= 1) { 
		return numarr;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = numarr.pop();
		var length = numarr.length;

		for (var i = 0; i < length; i++) {
			if (numarr[i] <= pivot) {
				left.push(numarr[i]);
			} else {
				right.push(numarr[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}


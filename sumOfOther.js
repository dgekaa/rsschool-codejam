
function sumOfOther(arr) {
	let newArr = [];

	let sum = arr.reduce((x,y) => x+y);

	for(var i = 0 ; i<arr.length ; i++){
		 newArr.push(sum-arr[i]);
	}
	return newArr;
}

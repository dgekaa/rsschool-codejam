
function sum(x,y){
	return x+y;
}
function make(a){
	function inner(...arr){
		return function (...arr1){
			return function (sum){
				let array = [].concat(a,arr,arr1);
				return make(array.length>1 ? array.reduce(sum,0) : a);
			}
		}	
	}
	inner.valueOf = function(){return a};
	return inner;
};
console.log(make(1)(1,1)(1,1,1)(sum))

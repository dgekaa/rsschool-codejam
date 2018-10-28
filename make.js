
function sum(a,b){
	return a+b;
}

function make(...arr) {
  const argArray = [];

  const inner = (...arr1) => {
  	if (typeof arr1[0] === 'function') {
    	return argArray.reduce(arr1[0]);
  	}else{
    	argArray.push(...arr1);
   		return inner;
  	}
  };
  return inner(...arr);
}
console.log(make(1)(1,1)(1,1,1)(1)(sum))
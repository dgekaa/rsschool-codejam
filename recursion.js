

function recursion(obj, index=0, arr=[]) {
  if (!obj) return 0;

  let left = obj.left || undefined;
  let right = obj.right || undefined;

  if (!arr[index]){
  	arr[index] = [];
  }
  arr[index].push(obj.value);

  recursion(left, index+1, arr);
  recursion(right, index+1, arr);

  return arr;
};
console.log(recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}));
// [[100], [90, 120], [70,99,110,130]]
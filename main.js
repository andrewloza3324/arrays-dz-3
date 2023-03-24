//function sum(a, b, c) {
//let k = a + b + c;
//console.log(k);
//}
//sum(13, 12, 11);

//function func(a, b) {
//if (a < b) {
//alert(b);
//} else if (b > a) {
//alert(a);
//} else if (a == b) {
//alert("a = b");
//}
//}
//func(5, 5);
//function names(a, b, c) {
//let array = [a, b, c];
//return array;
//}
//let result = names("andrew", "vlad", "ighor");
//console.log(result);

//function info(age, name, height) {
//let obj = {
//first: age,

//second: name,

//third: height,
//};
//return obj;
//}

//let result = info(24, "andrew", 180);
//console.log(result);
function num(array) {
  let b = array[0];
  return b;
}
let result = num([1, 2, 3, 4]);
console.log(result);

function obj(ob) {
  let c = ob.name;
  return c;
}
let res = obj({ name: "andrew" });
console.log(res);

function num(name) {
  let n = name;
  return n;
}
let re = num(Number(prompt("enter name")));
console.log(re);

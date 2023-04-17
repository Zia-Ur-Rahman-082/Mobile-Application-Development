//Array length
const person = ["zia ur", "rahman",20,"Comsats"];
document.write(person.length + "<br>");

//Converting Arrays to Strings
console.log(person.toString());
document.write(person.toString());

//join() method also joins all array elements into a string
console.log(person.join("*"));

//pop() method removes the last element from an array
console.log(person.pop());

//push() method adds a new element to an array
console.log(person.push("CS"));

//Array shift().. removes the first array element and shifts all other elements to a lower index
const arr = ["zia ur", "rahman",20,"Comsats"];
console.log(arr.shift());
console.log(arr);

//unshift() method adds a new element to an array at beginning and unshift others
console.log(arr.unshift("Salman"));
console.log(arr);

//changing elements
arr[0] = "Saif";
console.log(arr);

//concat
const std1 = ["Zia", "CS"];
const std2 = ["Salman", "CS", "3.1"];

const std = std1.concat(std2);
console.log(std +"<br>");

//splicing... The splice() method adds new items to an array
document.write(person +"<br>");
person.splice(2,0,"Attock");
document.write(person);

//Falt...creates a new array with sub-array elements concatenated to a specified depth
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//Slicing... The slice() method slices out a piece of an array.
document.write(person +"<br>");
const per = person.slice(2);
document.write("<br>");
const p =  person.slice(1,3);
document.write(p +"<br>");

//filter
const arr1 = [1,2,3,4,5,6];
let test = x =>
  x%2==0;

let a = arr1.filter(test);
document.write(a + "<br>");

//map
const arr2 = [1,2,3,4,5,6];

let b= arr2.map(x=> x**2)
document.write(b);

//sort
const arr3 = [5,9,1,3,0,4];
console.log(arr3.sort());



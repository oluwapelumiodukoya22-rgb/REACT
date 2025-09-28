// used to spread out the element of an array into inidvidual elements not just array but other irritable
// like strings
// it can be used to merge,copy and convert strings to array
let arr1 = [1,2,3];
let arry2 = [4,5,6];
let arry3 =[...arr1,...arry2];// merge and copy
console.log(arry3);
function sum(a,b,c){
    return a+b+c;
}
let arr4 = [1,2,3];
console.log(sum(...arr4));// spreading element into individual elements
let str = "hello";
let char = [...str];
console.log(char);// string to array.  
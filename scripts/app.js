// All about arrays

// Array Literal
let a = [1, 2, 3, 4, 5];

// array using constructor
let j = new Array();
console.log(`Empty array:  ${j}`);
j.push(34);
console.log(`Not Empty array: ${j}`);

// constructior with values 
let k = new Array(10, 20, 30);
console.log(`#- value array: ${k}`);

let m = new Array(10);
console.log(`New Array: ${m}`);
m.push(88);
console.log(`New Array: ${m}`);
m[0] = 20;
console.log(`Replacement element: ${m}`);

// Friday!
let p = new Array(10).fill("Friday!");
console.log(`Really happy it is: ${p}`);

function square(x) {
    return x * x;
}

let r = new Array(1, 33, 22, 5);
let newR = r.map(function(value){
    //console.log('value is ${value}');
    return square(value);
});

console.log(`value: ${newR}`);

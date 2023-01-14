// HW
// task1 (calculator +-/*)
// function calculator (a, b){
//   console.log(a+b);
//   console.log(a-b);
//   console.log(a*b);
//   console.log(a/b);
// }
// calculator(3, 5);

// HW
// task2 (input: 'a', 6times => output: 'a','a','a','a','a','a',)
// let arr = [];
// function fewTimes(val, len){
//   for(let i=0; i<len; i++){
//     arr.push (val);
//   }
// }
// fewTimes('apples', 6);
// console.log(arr);

// HW
// task3 (input: ['a', 1, 'apples'], 'apples' => output: ['a', 1])
let arr = ['a', 1, 'apples', 'a2', 15, 'apples2'];
arr.splice(2, 1);
console.log(arr);

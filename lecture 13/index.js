// HW 
// task1 (1 2 3 4 5 через loop FOR)
// let a = 5;
// let i = 0;
// for(a>i; i<5; a--){
//     console.log(++i)
// }

// HW 
// task1 (1 2 3 4 5 через loop WHILE)
// let a = 5;
// let i = 0;
// while(a>i){
//     console.log(++i)
// }

// HW 
// task2 (5 4 3 2 1 через loop FOR)
// let a = 5;
// let i = 0;
// for(a>i; i<5; ++i){
//     console.log(a--)
// }

// HW 
// task2 (5 4 3 2 1 через loop WHILE)
// let a = 5;
// let i = 0;
// while(a>i){
//     console.log(a--)
// }

// HW 
// task3 (multiplication table with 3 через loop FOR)
// let a = 3;
// let i = 1;
// for(a>i; i<11; i++){
//     console.log(a * i)
// }

// HW 
// task3 (multiplication table with 3 через loop WHILE)
// let i = 0;
// while(i<10){
//     console.log(3 * ++i)
// }

// HW 
// task3 (multiplication table with 3 решение от сенсея)
// const a = 3;
// for(let i=1; i<=10; i++){
//     console.log(`3 * ${i} =`, a*i)
// }

// HW 
// task4 (enter a number and it sums up every number till yours через loop FOR)
// const a = +prompt('enter a number, please');
// let result = a;
// for(let i=1; i<a; i++){
//     result+=i;
// }
// console.log(result);

// HW 
// task5 (input 10 and output all odd numbers через loop FOR)
// let a = +prompt('enter a number, please');
// for(let i=1; i<=a; i++){
//     if(i%2 ===1){
//         console.log(i)
//     }
// }

// HW 
// task5 (input 10 and output all odd numbers через loop WHILE)
// let a = +prompt('enter a number, please');
// let i=1;
// while(i<a){
//     i++;
//     if(i%2 ===1){
//         console.log(i)
//     }
// }

// HW 
// task6 (input 10 and output all even numbers через loop FOR)
// let a = +prompt('enter a number, please');
// for(let i=1; i<=a; i++){
//     if(i%2 ===0){
//         console.log(i)
//     }
// }

// HW 
// task6 (input 10 and output all even numbers через loop WHILE)
// let a = +prompt('enter a number, please');
// let i=1;
// while(i<a){
//     i++;
//     if(i%2 ===0){
//         console.log(i)
//     }
// }

// HW 
// task7 (multiplication table через loop FOR)
// let a = +prompt('enter a number, please');
// for(let i=1; i<=10; i++){
//     console.log(`${a} * ${i} =`, a*i)
// }

// HW 
// task7 (multiplication table через loop WHILE)
// let a = +prompt('enter a number, please');
// let i=0;
// while(i<10){
//     i++;
//     console.log(`${a} * ${i} =`, a*i);
// }

// HW 
// task8 (multiplication table reverse через loop FOR)
// let a = +prompt('enter a number, please');
// for(let i=10; i>0; i--){
//     console.log(`${a} * ${i} =`, a*i)
// }

// HW 
// task8 (multiplication table reverse через loop WHILE)
// let a = +prompt('enter a number, please');
// let i=10;
// while(i>1){
//     i--;
//     console.log(`${a} * ${i} =`, a*i);
// }

// HW 
// task9 (prime numbers yes or no через loop WHILE)
const a = +prompt('enter a number, please');
let isPrime = true;
for(let i=2; i<=a/2; i++){
    if(a%1 ===0){
        isPrime = false; 
        break
    }
}
console.log(isPrime? 'yes' : 'no');
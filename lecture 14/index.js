// HW
// task1 (array from 1-100: 1.вывести массив, 2.вывести каждое значение, 3.в обратную сторону через цикл)
// let result = [];
// for(let i = 0; i<100; i++){
//     result.push(i+1);
// } 
// console.log(result);

// for(let i=0; i<result.length; i++){
//     console.log(result[i]);
// }

// let reverseResult = [];
// for(let i = result.length - 1; i>=0; i--){   
//     reverseResult.push(result[i]);
// }
// console.log(reverseResult);

// HW
// task1 решение от учителя
// let result = [];
// for(let i = 1; i<=100; i++){
//     result.push(i);
// } 
// console.log(result);

// for(let i = result.length - 1; i>=0; i--){   
//     console.log(result[i]);  
//   }



// HW
// task2 (array with odd numbers from 1-99, вывести массив)
// let numbers = [];
// for(let i = 0; i<99; i++){
//     numbers.push(i+1);
// }

// function findOddNumbers(numbers) {
//     return numbers.filter(number => {
//       return number % 2 !== 0;
//     });
//   }
//   console.log(findOddNumbers(numbers));

// HW
// task2 решение от учителя
// let result = [];
// for(let i = 1; i<=99; i++){
//   if(i%2 === 1)
//     result.push(i);
// }  
// console.log(result);

// HW
// task3 (array with even numbers from 2-20, вывести массив)
// let numbers = [];
// for(let i = 1; i<20; i++){
//     numbers.push(i+1);
// }

// function findEvenNumbers(numbers) {
//     return numbers.filter(number => {
//       return number % 2 === 0;
//     });
//   }
//   console.log(findEvenNumbers(numbers));



// HW
// task4 (array with even numbers from 2-20, вывести сумму всех элементов)
// let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// function sum(numbers) {  
//     let sum = 0; 
//     for (let i = 0; i < numbers.length; i++)  
//         sum += numbers[i];  

//     return sum;

// }
// console.log(sum(numbers));

// HW
// task4 решение от учителя
// let result = [];
// for(let i = 2; i<=20; i++){
//   if(i%2 === 0){
//     result.push(i);
//   }
// }
// let sum = 0;
// for(let i=0; i<result.length; i++){
//   sum+=result[i];
// }
// console.log(sum);
// task3 решение от учителя в одной формуле
// let result = [];
// let sum = 0;
// for(let i = 2; i<=20; i++){
//   if(i%2 === 0){
//     sum+=i;
//   }
// }
// console.log(sum);

// HW
// task5 (очистить массив от null, empty brackets, undefined, false) решение от учителя
// let arr = [1, 2, 'a', 'b', null, 'bb', undefined, 'apple', false, '', 0, 'pie'];
// let result = [];
// for(let i=0; i<arr.length; i++){
//   if(arr[i]){
//     result.push(arr[i]);
//   }
// }
// console.log(result);


// HW
// task6 (найти максим число из неупорядоченного массива)
// numbersUnordered = [6, 66, 3, 33, 7, 77, 1, 11, 9, 45, 23, 67, 89, 56];
// function largest(numbersUnordered) {
//     let i;
//     let max = numbersUnordered[0];
//     for (i = 1; i < numbersUnordered.length; i++) {
//         if (numbersUnordered[i] > max)
//             max = numbersUnordered[i];
//     }
//   return max;
// }
// console.log(largest(numbersUnordered));

// HW
// task6 решение от учителя
// arr = [6, 66, 3, 33, 7, 77, 1, 11, 9, 45, 23, 67, 89, 56];
// let max = arr[1];
// for(let i=0; i<arr.length; i++){
//   if(arr[i]>max){
//     max=arr[i];
//   }
// }
// console.log(max);

// HW
// task7 (найти миним число из неупорядоченного массива)
// numbersUnordered = [6, 66, 3, 33, 7, 77, 1, 11, 9, 45, 23, 67, 89, 56];
// function smallest(numbersUnordered) {
//     let i;
//     let min = numbersUnordered[0];
//     for (i = 1; i < numbersUnordered.length; i++) {
//         if (numbersUnordered[i] < min)
//             min = numbersUnordered[i];
//     }
//   return min;
// }
// console.log(smallest(numbersUnordered));

// HW
// task8 (сравнить два массива yes or no)
// function isEqual()
//     {
//       let smartphones = ['apple', 'samsung', 'sony', 'nokia', 'xiaomi', 'huawei', 'honor'];
//       let smartphonesNew = ['apple', 'samsung', 'sony', 'nokia', 'xiaomi', 'huawei', 'honor'];
//       // If length is not equal
//       if(smartphones.length!= smartphonesNew.length)
//        return "False";
//       else
//       {
//        for(let i=0;i<smartphones.length;i++)
//        if(smartphones[i]!=smartphonesNew[i])
//         return "False";
//         return "True";
//       }
//     }
//     let v = isEqual();
//     console.log(v);

// HW
// task8 решение от учителя
let arr = ['apple', 'samsung', 'sony', 'nokia', 'xiaomi', 'huawei', 'honor'];
let arr2 = ['apple', 'samsung', 'sony', 'nokia', 'xiaomi', 'huawei', 'honor'];
let isEqual = true;
if(arr.length === arr2.length){
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr2[i]){
      isEqual = false;
      break;
    }
  }
} else{
  isEqual = false;
}
isEqual ? console.log ('yes') : ('no');
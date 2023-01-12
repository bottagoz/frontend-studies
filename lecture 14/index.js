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
// task5 (очистить массив от null, empty brackets, undefined, false) не успела

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
// 

function isEqual()
    {
      let smartphones = ['apple', 'samsung', 'sony', 'nokia', 'xiaomi', 'huawei', 'honor'];
      let smartphonesNew = ['apple', 'samsung', 'sony', 'nokia', 'xiaomi', 'huawei', 'honor'];
      // If length is not equal
      if(smartphones.length!= smartphonesNew.length)
       return "False";
      else
      {
       for(let i=0;i<smartphones.length;i++)
       if(smartphones[i]!=smartphonesNew[i])
        return "False";
        return "True";
      }
    }
    let v = isEqual();
    console.log(v);
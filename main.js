/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */


let myNum = 10;

let myStr = 'some string';

let myBool = true;

let myArr = [1, 2, 3, 4, 5];

let myObj = {
  first: 'First Name',
  last: 'Last Name'
};


/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, 
 * щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

let decimal2 = myNum.toFixed(2);
// Якщо треба саме число (не строку), використовaти parseFloat:
decimal2 = parseFloat(decimal2);


/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запишіть в цю ж саму змінну.
 */

let myBigInt = 123n;
myBigInt = myBigInt + 1n; // або myBigInt += 1n;

console.log(myNum, myStr, myBool, myArr, myObj, decimal2, myBigInt);
//1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function task1() {
  console.log(
    "1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них."
  );
  function getMin(number1, number2) {
    return number1 < number2 ? number1 : number2;
  }

  function printMin(number1, number2, result) {
    console.log(`${result} is MIN between number (${number1}, ${number2})`);
  }

  let number1 = -3;
  let number2 = 45;
  printMin(number1, number2, getMin(number1, number2));

  number1 = 45;
  number2 = 45;
  printMin(number1, number2, getMin(number1, number2));

  number1 = 65;
  number2 = 45;
  printMin(number1, number2, getMin(number1, number2));
}

task1();

//===================================================================
//2. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
function task2() {
  console.log(
    "2. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему."
  );
  function getArray(number1, number2) {
    const result = [];

    let fromNumber = 0;
    let toNumber = 0;

    if (number1 < number2) {
      fromNumber = number1;
      toNumber = number2;
    } else {
      fromNumber = number2;
      toNumber = number1;
    }

    for (let index = fromNumber; index <= toNumber; index++) {
      result.push(index);
    }

    return result;
  }

  console.log(getArray(1, 3));
  console.log(getArray(14, 3));
  console.log(getArray(3, 3));
}

task2();

//=====================================================================
//3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function task3() {
  console.log(
    "3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2."
  );

  function pow(base, degree) {
    return base ** (degree ?? 2);
  }

  console.log(`${pow(3, 0)} is pow(3,0)`);
  console.log(`${pow(3, 2)} is pow(3,2)`);
  console.log(`${pow(3)} is pow(3)`);
  console.log(`${pow(3, -2)} is pow(3, -2)`);
}

task3();

//===========================================================
//4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function task4() {
  console.log(
    "4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n."
  );

  function getSumNumbers(number) {
    let sum = 0;
    for (let index = 1; index <= number; index++) {
      sum += index;
    }
    return sum;
  }

  console.log(`${getSumNumbers(3)} is sum all numbers from 1 to 3`);
  console.log(`${getSumNumbers(0)} is sum all numbers from 1 to 0`);
  console.log(`${getSumNumbers(-12)} is sum all numbers from 1 to -12`);
}

task4();

//=============================================================
//5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function task5() {
  console.log(
    "5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных)."
  );

  function printSumOddAndEvent(n, m) {
    let fromNumber = n < m ? n : m;
    let toNumber = n < m ? m : n;
    let sumOdd = 0;
    let sumEven = 0;

    for (i = fromNumber; i <= toNumber; i++) {
      i % 2 === 0 ? (sumOdd += i) : (sumEven += i);
    }

    console.log(`${sumOdd} is sum odd numbers from ${n} to ${m}`);
    console.log(`${sumEven} is sum even numbers from ${n} to ${m}`);
  }

  printSumOddAndEvent(1, 6);
  printSumOddAndEvent(-3, 0);
  printSumOddAndEvent(2, 2);
}

task5();
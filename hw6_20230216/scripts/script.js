// Задача 1:
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
console.log("Task1. Print every second number from 0 to 10...");
for (let i = 0; i <= 10; i++) {
  if (i & 1) {
    console.log(`${i}`);
  }
}

// Задача 2:
//Напишите цикл for, который выводит в консоль  все числа от 55 до 20
console.log("Task2. Print all numbers from 55 to 20");
for (let i = 55; i >= 20; i--) {
  console.log(`${i}`);
}

// Задача 3:
//Дан массив numbers. Вывести в консоль все числа из массива
//Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат
//Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numberssquared = [];
console.log("Task3. Output all the numbers in the array to the console");
for (let index = 0; index < numbers.length; index++) {
  numberssquared.push(numbers[index] ** 2);
  console.log(numbers[index]);
}
console.log(numberssquared);
const lastelem = numberssquared[numberssquared.length - 1];
console.log(lastelem);

// Задача 4:
//Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’
const user = {
  firstname: "Ivan",
  lastname: "Ivanov",
  age: 20,
  salary: 500,
};
console.log(
  "Task4. generate a string in the format: 'User's name is . He is years old'."
);
console.log(
  `User’s name is ${user.lastname} ${user.firstname}. He is ${user.age} years old.`
);

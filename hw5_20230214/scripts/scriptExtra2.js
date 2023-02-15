// Дополнительные задания
// Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
// Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.

function execExtraTask2(array) {  
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      sum += array[i];
    }    
  }
  console.log(`sum of numbers = ${sum}`);
}

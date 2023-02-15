// Дополнительные задания
// Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).

function execExtraTask1(array) {    
  for (let i = 0; i < array.length; i++) {    
    let type = typeof(array[i]);    
    if ((type === "number") && (isNaN(array[i]))) {      
        type = "NaN";      
    }        
    console.log(`${i}) ${type}`);
  }
}

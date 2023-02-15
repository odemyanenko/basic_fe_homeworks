//Написать программу, которая считывает через prompt число и
//выводит одно из следующих сообщений: ‘Число меньше 100’,
//‘Число больше 100’ или ‘Число равно 100’
function execTask3() {
  const value = getNumber("Enter Number...");
  const compareNumber = 100;

  function compareWithNumber(value, compareNumber) {
    return value > compareNumber ? ">" : value < compareNumber ? "<" : "=";
  }

  const compareResult = compareWithNumber(value, compareNumber);
  console.log(`Number (${value}) ${compareResult} ${compareNumber}`);
}
//Написать программу, которая получает два числа и выводит
//наименьшее
function execTask2() {
  const value1 = getNumber("Enter 1-Number...");
  const value2 = getNumber("Enter 2-Number...");

  function getMin(value1, value2) {
    return value1 < value2 ? value1 : value2;
  }

  const minValue = getMin(value1, value2);
  console.log(`min = ${minValue} (between ${value1} and ${value2})`);
}
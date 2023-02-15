//Написать программу, которая через prompt считывает число и
//выводит в консоль число равное 10% от введенного числа
function execTask1() {
  function getPercentagetValue(value, procent) {
    return (value / 100) * procent;
  }

  const value = getNumber("Enter Number...");
  const percent = 10;

  const valueOfPercent = getPercentagetValue(value, 10);
  console.log(`${percent}% from ${value} = ${valueOfPercent}`);
}
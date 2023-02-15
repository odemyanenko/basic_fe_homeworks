// Написать программу, которая запрашивает у пользователя его имя и
// возраст (в годах) и выводит в консоль сообщение ‘Hello, ’,
// если пользователь совершеннолетний, или ‘Hi, ’,
// если пользователь несовершеннолетний.
function execTask4(params) {
  function isAdult(age) {
    return age >= 18;
  }
  const person = {
    name: "",
    age: 0,
  };

  person.name = prompt("Enter your Name...");
  person.age = getNumber("Enter your age...");

  const title = isAdult(person.age) ? "Hello" : "Hi";
  console.log(`${title}, ${person.name}!`);
}
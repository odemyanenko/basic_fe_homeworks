function createParagraph(text) {
  const p = document.createElement("p");
  p.innerText = text;

  return p;
}

//===================================================================
function task1() {
  console.log(
    "1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers."
  );
  const div = document.querySelector(".numbers");

  for (let i = 100; i >= 50; i -= 10) {
    div.append(createParagraph(i));
  }
}

task1();
//============================================================
function task2() {
  console.log(
    "2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные."
  );

  const div = document.querySelector(".stringscontainer");

  function addStrParagraph(array) {
    for (let i = 0; i < array.length; i++) {
      div.append(createParagraph(array[i]));
    }
  }

  addStrParagraph(["Cat", "Dog", "Mouse"]);
  addStrParagraph(["Human"]);
  addStrParagraph([""]);
}

task2();
//================================================================
console.log(
  "3. Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer."
);

function task3() {
  let persons = [
    { firstname: "Ivan", lastname: "Sidorov", age: 12 },
    { firstname: "Mariya", lastname: "Kovalenko", age: 18 },
    { firstname: "Semen", lastname: "Romashenko", age: 38 },
    { firstname: "Peter", lastname: "Romashenko", age: 8 },
  ];

  const div = document.querySelector(".userscontainer");

  for (let i = 0; i < persons.length; i++) {
    const { firstname, lastname, age } = persons[i];
    if (age >= 18) {
      const divCard = document.createElement("div");
      divCard.classList.add("card");
      divCard.append(
        createParagraph("First name: " + firstname),
        createParagraph("Last name: " + lastname),
        createParagraph("Age: " + age)
      );

      div.append(divCard);
    }
  }
}
task3();

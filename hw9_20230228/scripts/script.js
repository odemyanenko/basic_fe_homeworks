//1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
const buttonTask1 = document.querySelector("#btn_task1");
const squareTask1 = document.querySelector("#square_task1");

buttonTask1.addEventListener("click", function () {
  squareTask1.style.height = "100px";
  squareTask1.style.width = "100px";
  squareTask1.style.backgroundColor = "green";
});

//=====================================================
//2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
const buttonTask2 = document.querySelector("#btn_task2");
const squareTask2 = document.querySelector("#square_task2");

buttonTask2.addEventListener("click", function () {
  squareTask2.style.backgroundColor = "blue";
  console.log(`New color square is "${squareTask2.style.backgroundColor}"`);
});

//=====================================================
//3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const buttonTask3 = document.querySelector("#btn_task3");
const squareTask3 = document.querySelector("#square_task3");

buttonTask3.addEventListener("click", function () {
  squareTask3.style.height = `${squareTask3.offsetHeight + 20}px`;
  squareTask3.style.width = `${squareTask3.offsetWidth + 20}px`;
});

//=====================================================
//4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
const divTask4 = document.querySelector("#block_task4>.root");
const buttonTask4 = document.querySelector("#btn_task4");

buttonTask4.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.style.backgroundColor = "blue";
  newParagraph.innerText = "Aus Fehlern lernt man.";
  divTask4.append(newParagraph);
});

//=====================================================
//5.Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const divTask5 = document.querySelector("#block_task5>.root");
const buttonTask5 = document.querySelector("#btn_task5");

function addParagraph(color, text) {
  const newParagraph = document.createElement("p");
  newParagraph.style.backgroundColor = color;
  newParagraph.innerText = text;
  return newParagraph;
}
buttonTask5.addEventListener("click", function () {
  divTask5.append(
    addParagraph("blue", "Es ist nicht alles Gold, was glänzt."),
    addParagraph("green", "Aller Anfang ist schwer.")
  );
});

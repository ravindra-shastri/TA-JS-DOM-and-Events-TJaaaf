let input = document.querySelector(".input-area");

let ul = document.querySelector(".ul");

let all = document.querySelector(".all");

let active = document.querySelector(".active");

let completed = document.querySelector(".completed");

let clear = document.querySelector(".clear");

let byDefault = all;

all.classList.add("selected")

let allToDo = JSON.parse(localStorage.getItem("todo")) || [];

function handleDelete(event) {
  let id = event.target.dataset.id;
  allToDo.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(allToDo));
  createUI();
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allToDo[id].isDone = !allToDo[id].isDone;
  localStorage.setItem("todo", JSON.stringify(allToDo));
  createUI();
}

function createUI() {
  ul.innerHTML = "";
  allToDo.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input", handleToggle);
    input.setAttribute("data-id", index);
    input.checked = todo.isDone;

    let p = document.createElement("p");
    p.innerText = todo.eventName;

    if (input.checked === true) {
      p.style.textDecoration = "line-through";
    } else {
      p.style.textDecoration = "none";
    }

    active.addEventListener("click", (event) => {
      if (input.checked === false) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });  

    completed.addEventListener("click", (event) => {
      if (input.checked === false) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    });

    let span = document.createElement("span");
    span.innerText = "❌ ";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);

    li.append(input, p, span);
    ul.append(li);
  });
}

input.addEventListener("keyup", (event) => {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    let todo = {
      eventName: value,
      isDone: false,
    };
    allToDo.push(todo);
    event.target.value = "";
    createUI();
    localStorage.setItem("allToDo", JSON.stringify(allToDo));
  }
});

all.addEventListener("click", (event) => {
  allToDo.forEach((elm) => {
    createUI(elm);
  });
});


clear.addEventListener("click", () => {
  allToDo = allToDo.filter((todo) => !todo.isDone)
  createUI()
  localStorage.setItem("todo", JSON.stringify(allToDo));
})
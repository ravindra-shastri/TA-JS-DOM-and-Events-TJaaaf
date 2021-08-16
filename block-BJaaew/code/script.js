
let root = document.querySelector(".ul");

let rootTags = document.querySelector(".btn-section");

let search = document.querySelector("input");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allTags = got.houses.map((house) => house.name)

let activeHouse = "";

function createButtonUI(tags = []) {
  rootTags.innerHTML = "";
  tags.forEach((tag) => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = tag;

    btn.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfTheHouse =
        got.houses.find((house) => house.name === tag).people || [];
      createCards(peopleOfTheHouse);
      createButtonUI(allTags);
    });

    if (activeHouse === tag) {
       btn.classList.add("active");
    }
   
    rootTags.append(btn); 
  })
}

function createCards(data = []) {
  root.innerHTML = "";
  data.forEach((people) => {
    let li = document.createElement("li");
    li.classList.add("li");

    let img = document.createElement("img");
    img.src = people.image;

    let h4 = document.createElement("h4");
    h4.innerText = people.name;

    let description = document.createElement("p");
    description.innerText = people.description;

    let btn = document.createElement("a");
    btn.classList.add("btn2");
    btn.innerText = "Know More!";
    btn.href = people.wikiLink;

    li.append(img, h4, description, btn);
    root.append(li);
  });
}

function handleSearch(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createCards(filteredPeople);
}

search.addEventListener("input", handleSearch)
createCards(allPeople);
createButtonUI(allTags);  
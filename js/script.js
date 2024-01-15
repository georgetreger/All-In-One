
const foodBoxEl = document.querySelector(".foodBox");
const searchBtnEl = document.querySelector(".btn");
const menuContainerEl = document.querySelector(".menu-container");
const foodCEl = document.querySelector(".food");
console.log(foodC);

        console.log(searchBtn);


const radomMeal = async () => {
  const randomFood = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const foodRandom = await randomFood.json();
  console.log(foodRandom);
  foodRandom.meals.map((kwame) => {
    const randomDiv = document.createElement("div");
    randomDiv.classList.add("newFood");
    randomDiv.innerHTML = `
                  <img src="${kwame.strMealThumb}">
                   <h2>${kwame.strArea}</h2>
                   <strong>${kwame.strCategory}</strong>
               `;
    foodC.appendChild(randomDiv);
  });
};

radomMeal();

const myMenu = async (nana) => {
  const foodResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nana}`
  );
  const foodData = await foodResponse.json();
  console.log(foodData);
  foodData.meals.forEach((foodEl) => {
    const myDiv = document.createElement("div");
    myDiv.classList.add("menu2");
    myDiv.innerHTML = `
                     <img src="${foodEl.strMealThumb}">
                      <h2>${foodEl.strArea}</h2>
                      <strong>it belong to ${foodEl.strCategory} categories</strong>
                   `;
    menuContainer.appendChild(myDiv);
  });
};

searchBtn.addEventListener("click", () => {
  const foodEl = foodBox.value.trim();

  myMenu(foodEl);
});
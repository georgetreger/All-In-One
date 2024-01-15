const faStream = document.querySelector(".fa-stream");
const faClose = document.querySelector(".fa-close");
const asideEl = document.querySelector("aside");

const cocktailContainer = document.querySelector(".cocktail-container");
const submit = document.querySelector(".submit");
const searchBox = document.querySelector(".searchBox");
const randonContainer = document.querySelector(".cocktail-random");

const searchEl = document.querySelector(".searchBox-2");
const submitBtnEl = document.querySelector(".submit-btn");
const showTextEl = document.querySelector(".show-Text");
const bigImgEl = document.querySelector(".big-1");
const smallImgEl = document.getElementsByClassName("small-1");
       console.log(smallImgEl);
//  =====================menu========================================
const foodBox = document.querySelector(".foodBox");
const searchBtn = document.querySelector(".btn");
const menuContainer = document.querySelector(".menu-container");
const foodC = document.querySelector('.random-food');
       
//  =====================menu ends here===============================

// //   ====================footer element start here==========================
submitBtnEl.addEventListener("submit", (e) => {
     e.preventDefault();
   const searchIput = searchEl.value.trim();
  showTextEl.innerHTML =
    "thank you for contact us we will get back to you in 30 minutes";
     searchIput.value ='';
});

//   ====================footer element ends here==========================
faStream.addEventListener("click", () => {
  asideEl.style.display = "block";
});
faClose.addEventListener("click", () => {
  asideEl.style.display = "none";
});

// ===========================Bar img changing start here=======================
smallImgEl[0].addEventListener("click", () => {
  bigImgEl.src = smallImgEl[0].src;
});
smallImgEl[1].addEventListener("click", () => {
  bigImgEl.src = smallImgEl[1].src;
});
smallImgEl[2].addEventListener("click", () => {
  bigImgEl.src = smallImgEl[2].src;
});
smallImgEl[3].addEventListener("click", () => {
  bigImgEl.src = smallImgEl[3].src;
});

// ===========================Bar img changing ends here=======================

// ======================================cocktail start here====================
const myCocktail = async (enqure) => {
  cocktailContainer.innerHTML = "<h4>loading the cocktail....</h4>";
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${enqure}`
  );
  const drink = await response.json();
  cocktailContainer.innerHTML = "";
  drink.drinks.forEach((mydrink) => {
    const myDiv = document.createElement("div");
    myDiv.classList.add("cocktail");
    myDiv.innerHTML = `
                  <img src="${mydrink.strDrinkThumb}">
                   <h2>${mydrink.strAlcoholic}</h2>
                   <h3>${mydrink.strCategory}</h3>
                 `;
    cocktailContainer.appendChild(myDiv);
  });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const mySearch = searchBox.value.trim();
  myCocktail(mySearch);
});
// ======================================cocktail ends here====================

// ======================================random start here====================
const myRandom = async () => {
  // ======================================cocktail ends here====================
  const random = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
  );
  const randomData = await random.json();
  randomData.drinks.forEach((randomdrink) => {
    const randomDiv = document.createElement("div");
    randomDiv.classList.add("random");
    randomDiv.innerHTML = `
               <img src="${randomdrink.strDrinkThumb}">
               <h2>${randomdrink.strDrink}</h2>
              `;
    randonContainer.appendChild(randomDiv);
  });
};

  myRandom();
// ======================================random ends here====================

// =========================== food menu==================================

// const radomMeal = async () => {
//   const randomFood = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/random.php"
//   );
//   const foodRandom = await randomFood.json();
//   console.log(foodRandom);
//   foodRandom.meals.forEach((kwame) => {
//     const randomDiv = document.createElement("div");
//     randomDiv.classList.add("newFood");
//     randomDiv.innerHTML = `
//                   <img src="${kwame.strMealThumb}">
//                    <h2>${kwame.strArea}</h2>
//                    <strong>${kwame.strCategory}</strong>
//                `;
//     foodCEl.appendChild(randomDiv);
//   });
// };

// radomMeal();

// const myMenu = async (nana) => {
//   const foodResponse = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${nana}`
//   );
//   const foodData = await foodResponse.json();
//   console.log(foodData);
//   foodData.meals.forEach((foodEl) => {
//     const myDiv = document.createElement("div");
//     myDiv.classList.add("menu2");
//     myDiv.innerHTML = `
//                      <img src="${foodEl.strMealThumb}">
//                       <h2>${foodEl.strArea}</h2>
//                       <strong>it belong to ${foodEl.strCategory} categories</strong>
//                    `;
//     menuContainerEl.appendChild(myDiv);
//   });
// };

// searchBtnEl.addEventListener("click", () => {
//   const foodEl = foodBoxEl.value.trim();

//   myMenu(foodEl);
// });

  const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/food3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/food3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/menu-2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/menu-3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/menu-4.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/menu-5.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/food3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const foodBoxEl = document.querySelector(".foodBox");
const searchBtnEl = document.querySelector(".btn");
const menuContainerEl = document.querySelector(".menu-container");
const foodCEl = document.querySelector(".food");

const food1El = document.querySelector(".pizza-menu");
const foodMenuEl = document.querySelector(".header-menu");
    console.log(foodMenuEl);
const searchFoodEl = document.querySelector(".search-input");


  


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
    foodCEl.appendChild(randomDiv);
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
    menuContainerEl.appendChild(myDiv);
  });
};

searchBtnEl.addEventListener("click", () => {
  const foodEl = foodBoxEl.value.trim();

  myMenu(foodEl);
});



 const downMenu = (filterMenu) =>{
  food1El.innerHTML = filterMenu.map(menuData =>
    `
     <div class="pizza">
                    <img src="${menuData.img}" alt="" class="images">
                    
                     <h3 class="title">${menuData.title}</h3>
                     <h2 class="category">${menuData.category}</h2>
                      <span class="price">$${menuData.price}</span>
                      <p class="desc">${menuData.desc}</p>
                </div>
    `
    ).join('');
 };


  downMenu(menu);



   searchFoodEl.addEventListener('keyup', (e)=>{
     const valueMenu = e.target.value.toLowerCase();
       if (valueMenu) {
     downMenu(menu.filter(item => 
      item.title.toLowerCase().indexOf(valueMenu) !== -1))
       }else{
         downMenu(menu);
       }
   })


    const setCategories =() =>{
  const allCats = menu.map(item =>item.category)
     const categories =['All',...allCats.filter((item,i)=>{
      return allCats.indexOf(item)===i
     })
    ];
     foodMenuEl.innerHTML = categories.map(cat =>
       `
       <span class="cat">${cat}</span>
       `
      ).join('');


     foodMenuEl.addEventListener('click', (e)=>{
       const selectedCat = e.target.textContent;
          selectedCat ==="All"
          ? downMenu(menu)
          : downMenu(menu.filter((item) => item.category === selectedCat))

     });

      
   };


    setCategories();
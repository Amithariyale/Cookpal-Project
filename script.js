let foodArr = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];
const foodContainer = document.getElementById("food-container");
const searchFormInput = document.querySelector(".search-baar-container input");
const recipeForm = document.querySelector(".recipe-form");
const ratingForm = document.querySelector(".rating-form");

function createCard(food) {
  const card = document.createElement("div");
  card.className = "card";
  card.style = "width: 18rem;";
  card.id = foodArr.indexOf(food);

  card.innerHTML = `
    <img src="${food.imageSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <p>${food.type}</p>
      <div class="title">
        <h5 class="card-title">${food.name}</h5>
        <div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
              fill="none">
              <path
                  d="M10.7901 8.54675C10.6174 8.71408 10.5381 8.95608 10.5774 9.19341L11.1701 12.4734C11.2201 12.7514 11.1027 13.0327 10.8701 13.1934C10.6421 13.3601 10.3387 13.3801 10.0901 13.2467L7.13741 11.7067C7.03474 11.6521 6.92074 11.6227 6.80407 11.6194H6.62341C6.56074 11.6287 6.49941 11.6487 6.44341 11.6794L3.49007 13.2267C3.34407 13.3001 3.17874 13.3261 3.01674 13.3001C2.62207 13.2254 2.35874 12.8494 2.42341 12.4527L3.01674 9.17275C3.05607 8.93341 2.97674 8.69008 2.80407 8.52008L0.396741 6.18675C0.195407 5.99141 0.125407 5.69808 0.217407 5.43341C0.306741 5.16941 0.534741 4.97675 0.810074 4.93341L4.12341 4.45275C4.37541 4.42675 4.59674 4.27341 4.71007 4.04675L6.17007 1.05341C6.20474 0.986748 6.24941 0.925415 6.30341 0.873415L6.36341 0.826748C6.39474 0.792081 6.43074 0.763415 6.47074 0.740081L6.54341 0.713415L6.65674 0.666748H6.93741C7.18807 0.692748 7.40874 0.842748 7.52407 1.06675L9.00341 4.04675C9.11007 4.26475 9.31741 4.41608 9.55674 4.45275L12.8701 4.93341C13.1501 4.97341 13.3841 5.16675 13.4767 5.43341C13.5641 5.70075 13.4887 5.99408 13.2834 6.18675L10.7901 8.54675Z"
                  fill="#FDC040" />
          </svg>
          </div>
          <p class="rating">${food.rating}</p>
        </div>
      </div>
      <div class="time-like">
        <h5>${food.time}</h5>
        <div>
        <i onclick="toggleLikeBtn(${foodArr.indexOf(food)})" style="color:${
    food.isLiked ? "#FF0000" : "#252525"
  }" class="fa-regular fa-heart fa-xl"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
            fill="none">
            <g clip-path="url(#clip0_5197_140)">
                <path
                    d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
                    stroke="#252525" stroke-width="2" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_5197_140">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>
        </div>
      </div>
    </div>
  `;
  return card;
}

// Load all food item when load
document.addEventListener("DOMContentLoaded", loadAllFood);
function loadAllFood() {
  if (foodContainer.children[0]) foodContainer.children[0].remove();
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  foodArr.forEach((food) => {
    cardContainer.appendChild(createCard(food));
  });
  foodContainer.appendChild(cardContainer);
}

// Filter item according to search input

searchFormInput.addEventListener("input", (e) => {

  const searchInput = searchFormInput.value.toLowerCase();
  foodContainer.children[0].remove();

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  foodArr.filter((item) => {
    if (item.name.toLowerCase().includes(searchInput))
      cardContainer.appendChild(createCard(item));
  });

  foodContainer.appendChild(cardContainer);
});

// filter according to the recipe

recipeForm.addEventListener("change", () => {
  const type = recipeForm.recipe.value;
  if (type === "all") {
    loadAllFood();
    return;
  }
  ratingForm.reset();
  foodContainer.children[0].remove();

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  foodArr.filter((item) => {
    if (item.type === type) cardContainer.appendChild(createCard(item));
  });

  foodContainer.appendChild(cardContainer);
});

// filter according to the rating

ratingForm.addEventListener("change", () => {
  const rating = ratingForm.rating.value;

  foodContainer.children[0].remove();

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  if (rating === "above-4") {
    foodArr.filter((item) => {
      if (item.rating >= 4) cardContainer.appendChild(createCard(item));
    });
  } else {
    foodArr.filter((item) => {
      if (item.rating < 4) cardContainer.appendChild(createCard(item));
    });
  }

  foodContainer.appendChild(cardContainer);
});

// function to toggle between like and unlike
function toggleLikeBtn(index) {
  if (foodArr[index].isLiked) {
    foodArr[index].isLiked = false;
  } else {
    foodArr[index].isLiked = true;
  }
  const cardToUpdate = document.getElementById(index);
  const heartIcon = cardToUpdate.querySelector(".fa-heart");

  heartIcon.style.color = foodArr[index].isLiked ? "#FF0000" : "#252525";
}

// drawer toggle

const drawer = document.getElementById("drawer");
const drawerMenu = document.getElementById("drawer-menu");

drawer.addEventListener("click", toggleDrawer);

function toggleDrawer() {
  if (drawerMenu.style.display === "none") {
    drawerMenu.style.display = "flex";
  } else drawerMenu.style.display = "none";
}

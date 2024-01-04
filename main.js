const restaurants = [
  {
    id: 1,
    restaurant_name: "Oceans 5 by Rivera",
    thumbnail: "./Images/restaurant2.png",
    reservation_req: true,
    rating: 4.5,
    address: "5 Lateef Jakande Street",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    id: 2,
    restaurant_name: "Arabesque",
    thumbnail: "./Images/restaurant3.png",
    reservation_req: true,
    rating: 4.8,
    address: "5 Lateef Jakande Street",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    id: 3,
    restaurant_name: "Kappadocia",
    thumbnail: "./Images/restaurant4.png",
    reservation_req: true,
    rating: "5.0",
    address: "5 Lateef Jakande Street",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    id: 4,
    restaurant_name: "The Breeze",
    thumbnail: "./Images/restaurant3.png",
    reservation_req: true,
    rating: 4.5,
    address: "5 Lateef Jakande Street",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    id: 5,
    restaurant_name: "Slow Lagos",
    thumbnail: "./Images/restaurant2.png",
    reservation_req: true,
    rating: 4.8,
    address: "5 Lateef Jakande Street",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    id: 6,
    restaurant_name: "Kilimanjaro",
    thumbnail: "./Images/restaurant4.png",
    reservation_req: false,
    rating: 5.0,
    address: "5 Lateef Jakande Street",
    state: "Lagos",
    country: "Nigeria",
  },
];

const trendRestaurants = document.querySelector(".trending_restaurants");

restaurants.forEach((restaurant) => {
  if (restaurant.reservation_req === true) {
    trendRestaurants.innerHTML += `<div class="rest_card flex-col">
                <img src="${restaurant.thumbnail}" alt="${restaurant.restaurant_name}">

                <div class="rest_details flex-col">
                    <div class="name_rating_wrapper flex-col">
                        <div class="rest_name_wrapper flex-row">
                            <p class="rest_name">${restaurant.restaurant_name}</p>
                            <i class="ph ph-bookmark bookmark_icon"></i>
                        </div>
                        <div class="rating_wrapper flex-row">
                            <p class="rating">${restaurant.rating}</p>
                            <i class="ph ph-star star_icon"></i>
                        </div>
                    </div>

                    <p class="address">${restaurant.address}</p>

                </div>

            </div>`;
  } else {
    trendRestaurants.innerHTML += `<div class="rest_card flex-col">
                <img src="${restaurant.thumbnail}" alt="${restaurant.restaurant_name}">

                <div class="rest_details flex-col">
                    <div class="name_rating_wrapper flex-col">
                        <div class="rest_name_wrapper flex-row">
                            <p class="rest_name">${restaurant.restaurant_name}</p>
                          
                        </div>
                        <div class="rating_wrapper flex-row">
                            <p class="rating">${restaurant.rating}</p>
                            <i class="ph ph-star"></i>
                        </div>
                    </div>

                    <p class="address">${restaurant.address}</p>

                </div>

            </div>`;
  }
});

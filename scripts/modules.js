
// Menu object with items
export const menu = [
    {
        title: "flamingo breakfast",
        category: ["breakfast"],
        price: "$26.99",
        img: "/images/menu/flamingo-breakfast.png",
        desc: "Dos huevos, chilaquiles, arroz, frijoles y bistec. | Two eggs, chilaquiles, rice, beans, and steak.",
    },
    {
        title: "Coca-Cola Embotellada",
        category: ["drinks"],
        price: "$5.00",
        img: "/images/menu/bottled-coke.jpg",
        desc: "Bottled Coke",
    },
    {
        title: "Three Tacos",
        category: ["dinner", "popular"],
        price: "$19.99",
        img: "/images/menu/three-tacos.png",
        desc: "3 with choice of meat.",
    },
    {
        title: "Two Item Combo Mix",
        category: ["lunch", "popular"],
        price: "$16.99",
        img: "/images/menu/two-item-combo.png",
        desc: "Served with rice and beans. Choice of taco, quesadilla, tamal, tostada, enchilada.",
    },
    {
        title: "Churro Sundae",
        category: ["dessert"],
        price: "$13.99",
        img: "/images/menu/churro-sundae.jpg",
        desc: "",
    },
    {
        title: "Tamal (1 Piece)",
        category: ["alacarte"],
        price: "$4.99",
        img: "/images/menu/tamal-1-piece.jpg",
        desc: "Rojos, verdes, rajas, dulce.",
    },
]


// Google Maps API
const googleMapsApiKey = 'AIzaSyAzm_qNlnn-to12a_B_5YyQsG0dKtj17Tg';

let map;

export async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.93306836981826, lng: -88.74000441920694 },
    zoom: 17.8,
  });
}
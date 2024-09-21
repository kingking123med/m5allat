import sidib from "./../../assets/images/list/cafe-resto/sidibou.jpg" 
import elgrot from "./../../assets/images/list/cafe-resto/elgrotte.jpg"
import rib from "./../../assets/images/list/hist/ribat.jpg"

import gy from "./../../assets/icons/gym.png"
import histo from "./../../assets/icons/historic-site.png"
import hot from "./../../assets/icons/hotel.png"
import par from "./../../assets/icons/park.png"
import restaur from "./../../assets/icons/restaurant.png"

import djerba from "./../../assets/images/djerbahood.jpg"
import sidibou from "./../../assets/images/sidibousaid.jpg"
import toz from "./../../assets/images/tozeur.jpg"

const sidibou = Image.resolveAssetSource(sidib).uri;
const elgrotte = Image.resolveAssetSource(elgrot).uri;
const ribat = Image.resolveAssetSource(rib).uri;
const gym = Image.resolveAssetSource(gy).uri;
const historic = Image.resolveAssetSource(histo).uri;
const hotel = Image.resolveAssetSource(hot).uri;
const park = Image.resolveAssetSource(par).uri;
const restaurant = Image.resolveAssetSource(restaur).uri;
const djerbahood = Image.resolveAssetSource(djerba).uri;
const sidibousaid = Image.resolveAssetSource(sidibou).uri;
const tozeur = Image.resolveAssetSource(toz).uri;

export const nav = [
    {
        text: "home",
        path: "/",
    },
    {
        text: "about",
        path: "/about",
    },
    {
        text: "services",
        path: "/services",
    },
    {
        text: "contact",
        path: "/contact",
    },
]

export const featured = [
    {
    cover: hotel,
    name: "Hotel",
    total: "122 Property",
    },
    {
    cover: restaurant,
    name: "Restaurant",
    total: "155 Property",
    },
    {
    cover: historic,
    name: "Historical site",
    total: "80 Site",
    },
    {
    cover: park,
    name: "Park",
    total: "15 Site",
    },
    {
    cover: gym,
    name: "Gym",
    total: "50 Property",
    },
]

export const list = [
    {
    id: 1,
    cover: sidibou,
    name: "Sidi Bou Said",
    location: "Marina, Monastir",
    type: "Open",
    price: "$8,000",
    category: "Cafe-Resto",
    },
    {
    id: 2,
    cover: elgrotte,
    name: "El Grotte",
    location: "Route el karraiya, Monastir",
    type: "Open",
    price: "$9,750",
    category: "Cafe-Resto",
    },
    {
    id: 3,
    cover: ribat,
    name: "Forte El Ribat",
    location: "Route de la Falaise, Monastir",
    type: "Closed",
    price: "$2,000",
    category: "Site historique",
    },
]
export const location = [
    {
    id: 1,
    name: "Sidi Bou Said, Tunis",
    cover: sidibousaid,
    },
    {
    id: 2,
    name: "StarWars site, Tozeur",
    cover: tozeur,
    },
    {
    id: 3,
    name: "Djerba Hood, Djerba",
    cover: djerbahood,
    },
    
]

export const pack = [
    {
        id:1,
        plan: "Basic",
        price: "29",
        ptext: "per person",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Bus tours",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Air-conditioned vehicle" },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Lunch" },
        ],
        },
        {
        id:2,
        best: "Best Value",
        plan: "Standard",
        price: "49",
        ptext: "per person",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Air-conditioned vehicle",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Personal Help Support",
            },
            {
            change: "color",
            icon: <i class='fa-solid fa-x'></i>,
            text: "Lunch",
            },
        ],
        },
        {
        id:3,
        plan: "Platinum",
        price: "79",
        ptext: "2 people",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Air-conditioned vehicle",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Personal Help Support",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Lunch",
            },
        ],
        },
]

export const footer = [
    {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Contact Page" }],
    },
    {
    title: "ALL CATEGORIES",
    text: [{ list: "Cafe" }, { list: "Restaurant" }, { list: "Historical Site" },{ list: "Park" }, { list: "Gym" }, { list: "Bar" }],
    },
    {
    title: "COMPANY",
    text: [{ list: "About" }],
    },
]

export const categoryList = [
    {
        id: 1,
        value: 'Site historique',
        label: '🚩 Site historique',
    },
    {
        id: 2,
        value: 'Cafe-Resto',
        label: '🍕 Cafe-Resto',
    },
];

export const dataList = [
    {
        id: 1,
        cover: sidibou,
        name: "Sidi Bou Said",
        location: "Marina, Monastir",
        type: "Open",
        price: "$8,000",
        category: "Cafe-Resto",
    },
    {
        id: 2,
        cover: elgrotte,
        name: "El Grotte",
        location: "Route el karraiya, Monastir",
        type: "Open",
        price: "$9,750",
        category: "Cafe-Resto",
    },
    {
        id: 3,
        cover: ribat,
        name: "Forte El Ribat",
        location: "Route de la Falaise, Monastir",
        type: "Closed",
        price: "$2,000",
        category: "Site historique",
    },
];

import goa from "../assets/destination-1.jpg";
import baga from "../assets/baga.jpg";
import calangute from "../assets/calangute.jpg";
import dudhsagar from "../assets/dudhsagar.jpg";
import aguada from "../assets/fort-aguada.jpg";
import anjuna from "../assets/anjuna.jpg";

import manali from "../assets/destination-2.jpg";
import solang from "../assets/Solang Valley.jpg";
import rohtang from "../assets/Rohtang Pass.jpg";
import hadimba from "../assets/Hadimba Temple.jpg";
import mallroad from "../assets/Mall Road.jpg";
import oldmanali from "../assets/Old Manali.jpg";

import jaipur from "../assets/destination-3.jpg";
import hawamahal from "../assets/Hawa Mahal.jpg";
import amerfort from "../assets/Amer Fort.jpg";
import citypalace from "../assets/City Palace.jpg";
import jalmahal from "../assets/Jal Mahal.jpg";
import nahargarh from "../assets/Nahargarh Fort.jpg";

import kashmir from "../assets/destination-4.jpg";
import dallake from "../assets/Dal Lake Kashmir.jpg";
import gulmarg from "../assets/Gulmarg Kashmir.jpg";
import pahalgam from "../assets/Pahalgam.jpg";
import sonamarg from "../assets/Sonamarg Kashmir.jpg";
import mughalgardens from "../assets/Mughal Gardens Kashmir.jpg";

import kerala from "../assets/destination-5.jpg";
import munnar from "../assets/Munnar Kerala.jpg";
import alleppey from "../assets/Alleppey Kerala.jpg";
import kovalam from "../assets/Kovalam Beach Kerala.jpg";
import wayanad from "../assets/Wayanad Kerala.jpg";
import thekkady from "../assets/Thekkady Kerala.jpg";

import ladakh from "../assets/destination-6.jpg";
import nubra from "../assets/Nubra Valley Ladakh.jpg";
import pangong from "../assets/Pangong Lake Ladakh.jpg";
import khardung from "../assets/Khardung La Ladakh.jpg";
import lehpalace from "../assets/Leh Palace Ladakh.jpg";
import shanti from "../assets/Shanti Stupa Ladakh.jpg";

import { FaWater, FaShip } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { TbParachute } from "react-icons/tb";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import {FaParachuteBox, FaCampground,FaMountain,FaShoppingBag,FaLandmark,} from "react-icons/fa";

import {MdKayaking,MdRestaurant,} from "react-icons/md";

import {GiHiking,GiCamel,} from "react-icons/gi";
import { FaCamera } from "react-icons/fa";

export const destinations = [
  {
    id: "goa",
    name: "Goa",
    image: goa,
    description:"Goa is India's most famous beach destination, known for its golden coastline, vibrant nightlife, Portuguese heritage, water sports, seafood cuisine, and breathtaking sunsets. It offers the perfect mix of relaxation, adventure, and culture.",
    price: "₹14,000 / Person",
    duration: "4 Days / 3 Nights",
    bestTime: "November - February",
    rating: "4.8 / 5",

    attractions: [
      {
        name: "Baga Beach",
        image: baga,
      },
      {
        name: "Calangute Beach",
        image: calangute,
      },
      {
        name: "Dudhsagar Falls",
        image: dudhsagar,
      },
      {
        name: "Aguada Fort",
        image: aguada,
      },
      {
        name: "Anjuna Beach",
        image: anjuna,
      },
    ],

    activities: [
  {
    name: "Scuba Diving",
    icon: FaWater,
  },
  {
    name: "Parasailing",
    icon: TbParachute,
  },
  {
    name: "Jet Ski",
    icon: MdOutlineDirectionsBoat,
  },
  {
    name: "Sunset Cruise",
    icon: FaShip,
  },
  {
    name: "Beach Party",
    icon: GiPartyPopper,
  },
]
  },

  {
    id: "manali",
    name: "Manali",
    image: manali,
    description:"Manali is a breathtaking hill station nestled in the Himalayas of Himachal Pradesh. Known for its snow-capped mountains, adventure sports, scenic valleys, and peaceful atmosphere, it is a perfect destination for nature lovers and thrill seekers alike.",    price: "₹17,999 / Person",
    duration: "5 Days / 4 Nights",
    bestTime: "October - March",
    rating: "4.9 / 5",
    attractions: [
      {
        name:"Solang Valley",
        image: solang,
      },
      {
        name: "Rohtang Pass",
        image: rohtang,
      },
      {
        name: "Hadimba Temple",
        image: hadimba,
      },
      {
        name: "Mall Road",
        image: mallroad,
      },
      {
        name: "Old Manali",
        image: oldmanali,
      },
    ],
    activities: [
  {
    name: "Paragliding",
    icon: FaParachuteBox,
  },
  {
    name: "River Rafting",
    icon: MdKayaking,
  },
  {
    name: "Camping",
    icon: FaCampground,
  },
  {
    name: "Snow Activities",
    icon: FaMountain,
  },
  {
    name: "Trekking",
    icon: GiHiking,
  },
],
  },

  {
    id: "jaipur",
    name: "Jaipur",
    image: jaipur,
    description:"Jaipur, popularly known as the Pink City of India, is famous for its majestic forts, royal palaces, vibrant markets, and rich cultural heritage. It offers a perfect blend of history, architecture, and traditional Rajasthani experiences."  ,
    price: "₹12,999 / Person",
    duration: "3 Days / 2 Nights",
    bestTime: "October - February",
    rating: "4.7 / 5",
    attractions: [
  {
    name: "Hawa Mahal",
    image: hawamahal,
  },
  {
    name: "Amer Fort",
    image: amerfort,
  },
  {
    name: "City Palace",
    image: citypalace,
  },
  {
    name: "Jal Mahal",
    image: jalmahal,
  },
  {
    name: "Nahargarh Fort",
    image: nahargarh,
  },
],
    activities: [
  {
    name: "Camel Ride",
    icon: GiCamel,
  },
  {
    name: "Shopping",
    icon: FaShoppingBag,
  },
  {
    name: "Palace Visit",
    icon: FaLandmark,
  },
  {
    name: "Local Food Tour",
    icon: MdRestaurant,
  },
  {
    name: "Cultural Show",
    icon: FaLandmark,
  },
],
  },
    {
    id: "kashmir",
    name: "Kashmir",
    image: kashmir,
    description: "Kashmir is known for its breathtaking valleys, snow-capped mountains, peaceful lakes, beautiful gardens, and scenic landscapes. Often called Paradise on Earth, it offers a perfect combination of nature, adventure, and relaxation.",
    price: "₹21,999 / Person",
    duration: "5 Days / 4 Nights",
    bestTime: "March - October",
    rating: "4.9 / 5",

    attractions: [
      {
        name: "Dal Lake",
        image: dallake,
      },
      {
        name: "Gulmarg",
        image: gulmarg,
      },
      {
        name: "Pahalgam",
        image: pahalgam,
      },
      {
        name: "Sonamarg",
        image: sonamarg,
      },
      {
        name: "Mughal Gardens",
        image: mughalgardens,
      },
    ],

    activities: [
      {
        name: "Shikara Ride",
        icon: MdOutlineDirectionsBoat,
      },
      {
        name: "Gondola Ride",
        icon: FaMountain,
      },
      {
        name: "Trekking",
        icon: GiHiking,
      },
      {
        name: "Photography",
        icon: FaCamera,
      },
      {
        name: "Shopping",
        icon: FaShoppingBag,
      },
    ],
  },

  {
    id: "kerala",
    name: "Kerala",
    image: kerala,
    description: "Kerala is a beautiful destination known for its peaceful backwaters, lush green landscapes, beaches, hill stations, wildlife, and rich cultural traditions. It offers a relaxing and memorable travel experience.",
    price: "₹18,999 / Person",
    duration: "5 Days / 4 Nights",
    bestTime: "October - March",
    rating: "4.8 / 5",

    attractions: [
      {
        name: "Munnar",
        image: munnar,
      },
      {
        name: "Alleppey",
        image: alleppey,
      },
      {
        name: "Kovalam Beach",
        image: kovalam,
      },
      {
        name: "Wayanad",
        image: wayanad,
      },
      {
        name: "Thekkady",
        image: thekkady,
      },
    ],

    activities: [
      {
        name: "Houseboat Ride",
        icon: MdOutlineDirectionsBoat,
      },
      {
        name: "Trekking",
        icon: GiHiking,
      },
      {
        name: "Wildlife Safari",
        icon: FaMountain,
      },
      {
        name: "Local Food Tour",
        icon: MdRestaurant,
      },
      {
        name: "Shopping",
        icon: FaShoppingBag,
      },
    ],
  },

  {
    id: "ladakh",
    name: "Ladakh",
    image: ladakh,
    description: "Ladakh is a high-altitude destination famous for its dramatic mountains, clear blue lakes, Buddhist monasteries, scenic valleys, and adventurous landscapes. It is an ideal destination for nature lovers and adventure seekers.",
    price: "₹22,999 / Person",
    duration: "6 Days / 5 Nights",
    bestTime: "May - September",
    rating: "4.9 / 5",

    attractions: [
      {
        name: "Pangong Lake",
        image: pangong,
      },
      {
        name: "Nubra Valley",
        image: nubra,
      },
      {
        name: "Leh Palace",
        image: lehpalace,
      },
      {
        name: "Khardung La",
        image: khardung,
      },
      {
        name: "Shanti Stupa",
        image: shanti,
      },
    ],

    activities: [
      {
        name: "Bike Ride",
        icon: FaMountain,
      },
      {
        name: "Trekking",
        icon: GiHiking,
      },
      {
        name: "Camping",
        icon: FaCampground,
      },
      {
        name: "Lake Visit",
        icon: MdOutlineDirectionsBoat,
      },
      {
        name: "Monastery Visit",
        icon: FaLandmark,
      },
    ],
  },
];
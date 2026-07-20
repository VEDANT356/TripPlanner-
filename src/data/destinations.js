import goa from "../assets/destination-1.jpg";
import manali from "../assets/destination-2.jpg";
import jaipur from "../assets/destination-3.jpg";

export const destinations = [
  {
    id: "goa",
    name: "Goa",
    image: goa,
    description: "Goa is one of India's most loved tourist destinations...",
    price: "₹14,000 / Person",
    duration: "4 Days / 3 Nights",
    bestTime: "November - February",
    rating: "4.8 / 5",
    attractions: [
      "Baga Beach",
      "Calangute Beach",
      "Dudhsagar Falls",
      "Aguada Fort",
      "Anjuna Beach"
    ],
    activities: [
      "Scuba Diving",
      "Parasailing",
      "Jet Ski",
      "Sunset Cruise",
      "Beach Party"
    ]
  },

  {
    id: "manali",
    name: "Manali",
    image: manali,
    description: "Manali is a beautiful hill station in Himachal Pradesh...",
    price: "₹17,999 / Person",
    duration: "5 Days / 4 Nights",
    bestTime: "October - March",
    rating: "4.9 / 5",
    attractions: [
      "Solang Valley",
      "Rohtang Pass",
      "Hadimba Temple",
      "Mall Road",
      "Old Manali"
    ],
    activities: [
      "Paragliding",
      "River Rafting",
      "Camping",
      "Snow Activities",
      "Trekking"
    ]
  },

  {
    id: "jaipur",
    name: "Jaipur",
    image: jaipur,
    description: "Jaipur, the Pink City of India...",
    price: "₹12,999 / Person",
    duration: "3 Days / 2 Nights",
    bestTime: "October - February",
    rating: "4.7 / 5",
    attractions: [
      "Hawa Mahal",
      "Amer Fort",
      "City Palace",
      "Jal Mahal",
      "Nahargarh Fort"
    ],
    activities: [
      "Camel Ride",
      "Shopping",
      "Palace Visit",
      "Local Food Tour",
      "Cultural Show"
    ]
  }
];
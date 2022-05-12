import React from "react";
import laptop from "./Images/laptop.jpg";
import jewlery from "./Images/jewlery.jpg";
import fashion from "./Images/fashion.webp";

export const jumboItems = [
  {
    id: 1,
    title: "GET THE LATEST COMPUTERS",
    description: "Supplying the world with the newest gaming technologies",
    img: <img src={laptop} />,
  },
  {
    id: 2,
    title: "SHOP JEWELRY FOR LOW PRICES",
    description: "Up to 40% off select pieces!",
    img: <img src={jewlery} />,
  },
  {
    id: 3,
    title: "NEW SPRING ARRIVALS",
    description: "shop men or women for the latest fashion",
    img: <img src={fashion} />,
  },
];

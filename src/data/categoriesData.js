import { Wheat, Flame, Droplets, Cookie } from "lucide-react";

export const categorySections = [
  {
    title: "Grocery Essentials",
    subtitle: "Daily needs for every household",
    items: [
      {
        name: "Atta & Flour",
        icon: Wheat,
        image: "/homeImage/Atta&Flour.jpg",
        color: "from-amber-100 to-orange-100",
      },
      {
        name: "Rice & Grains",
        icon: Wheat,
        image: "/homeImage/Rice&Grains.jpeg",
        color: "from-yellow-100 to-amber-100",
      },
      {
        name: "Spices & Masala",
        icon: Flame,
        image: "/homeImage/Spices&Masala.jpg",
        color: "from-red-100 to-orange-100",
      },
    ],
  },
  {
    title: "Oil & Ghee",
    subtitle: "Pure and trusted cooking essentials",
    items: [
      {
        name: "Mustard Oil",
        icon: Droplets,
        image: "/homeImage/MustardOil.png",
        color: "from-yellow-100 to-orange-100",
      },
      {
        name: "Desi Ghee",
        icon: Droplets,
        image: "/homeImage/DesiGhee.jpg",
        color: "from-orange-100 to-yellow-100",
      },
    ],
  },
  {
    title: "Snacks & Beverages",
    subtitle: "For tea-time refreshment",
    items: [
      {
        name: "Biscuits",
        icon: Cookie,
        image:
          "https://images.unsplash.com/photo-1585518419759-6e9d068f8e6f",
        color: "from-amber-100 to-orange-100",
      },
    ],
  },
];

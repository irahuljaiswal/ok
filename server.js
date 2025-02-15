const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71VbHaAqbML._SX679_.jpg",
    title: "Apple iPad Air 10th Gen 256GB",
    price: {
      usd: 1012,
      inr: 83999,
    },
    discountPercent: 10,
    description:
      "The latest Apple iPad Air with 256GB storage, a stunning Liquid Retina display, and powerful performance.",
    category: "Electronics",
    rating: {
      rate: 4.5,
      count: 143,
    },
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61WFNqf8hVL._SX679_.jpg",
    title: "Sony WH-XB910N Headphones",
    price: {
      usd: 265,
      inr: 21999,
    },
    discountPercent: 6,
    description:
      "Noise-canceling Sony headphones with extra bass and long battery life for immersive sound.",
    category: "Electronics",
    rating: {
      rate: 4.3,
      count: 89,
    },
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61nBzBREzGL._SX679_.jpg",
    title: "Samsung Watch 4",
    price: {
      usd: 132,
      inr: 10999,
    },
    discountPercent: 12,
    description:
      "A sleek smartwatch with health tracking, fitness features, and a vibrant AMOLED display.",
    category: "Electronics",
    rating: {
      rate: 4.2,
      count: 76,
    },
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71zFRCcMS2L._SX679_.jpg",
    title: "Apple iPhone 15 Plus",
    price: {
      usd: 904,
      inr: 74999,
    },
    discountPercent: 12,
    description:
      "Apple's latest iPhone 15 Plus with advanced camera technology and powerful A16 Bionic chip.",
    category: "Electronics",
    rating: {
      rate: 4.6,
      count: 155,
    },
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/51Z8saviw1L._UX679_.jpg",
    title: "Puma T-Shirt for Men",
    price: {
      usd: 11,
      inr: 899,
    },
    discountPercent: 5,
    description:
      "A comfortable and stylish Puma t-shirt made with breathable cotton for everyday wear.",
    category: "Men's Clothing",
    rating: {
      rate: 4.1,
      count: 47,
    },
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/61S12C04P5L._UX679_.jpg",
    title: "Red Tape Shirt for Men",
    price: {
      usd: 14,
      inr: 1100,
    },
    discountPercent: 8,
    description:
      "A stylish Red Tape shirt for men, designed with a modern fit and comfortable fabric.",
    category: "Men's Clothing",
    rating: {
      rate: 3.9,
      count: 62,
    },
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/81N4UNEstQL._UY879_.jpg",
    title: "BIBA Women's Regular Kurta",
    price: {
      usd: 30,
      inr: 2499,
    },
    discountPercent: 11,
    description:
      "A beautiful and elegant regular fit kurta from BIBA, perfect for casual and festive wear.",
    category: "Women's Clothing",
    rating: {
      rate: 4.7,
      count: 94,
    },
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/71GD8wzJqNL._UX679_.jpg",
    title: "Women's Sweatshirt",
    price: {
      usd: 11,
      inr: 954,
    },
    discountPercent: 18,
    description:
      "A cozy and stylish sweatshirt for women, designed for warmth and comfort in all seasons.",
    category: "Women's Clothing",
    rating: {
      rate: 4.2,
      count: 53,
    },
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/51xsyVSt8XL._UX679_.jpg",
    title: "Tommy Hilfiger Horizon Plus Laptop Backpack",
    price: {
      usd: 21,
      inr: 1780,
    },
    discountPercent: 9,
    description:
      "A stylish and durable laptop backpack from Tommy Hilfiger with multiple compartments for storage.",
    category: "Accessories",
    rating: {
      rate: 4.3,
      count: 75,
    },
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/51DzT463EWL._SX679_.jpg",
    title: "Borosil Coffeemate Insulated Mug",
    price: {
      usd: 8,
      inr: 681,
    },
    discountPercent: 10,
    description:
      "A premium insulated mug from Borosil designed to keep your coffee hot for hours while maintaining a stylish look.",
    category: "Accessories",
    rating: {
      rate: 4.2,
      count: 87,
    },
  },
  {
    id: 11,
    image: "https://m.media-amazon.com/images/I/91N6zeywh+L._SX679_.jpg",
    title: "Solimo - Cotton Bath Towel",
    price: {
      usd: 8,
      inr: 681,
    },
    discountPercent: 10,
    description:
      "A soft and highly absorbent cotton bath towel from Solimo, designed for everyday comfort and durability.",
    category: "Accessories",
    rating: {
      rate: 4.2,
      count: 87,
    },
  },
  {
    id: 12,
    image: "https://m.media-amazon.com/images/I/51X93thLwhL._SX679_.jpg",
    title:
      "COI Blue Classic Notebook, Hardcover, UnRuled Pages 5.5 x 8.25-Inch, 240 Pages",
    price: {
      usd: 4,
      inr: 340,
    },
    discountPercent: 7,
    description:
      "A premium hardcover notebook with unruled pages, perfect for journaling, sketching, or note-taking.",
    category: "Accessories",
    rating: {
      rate: 4.4,
      count: 56,
    },
  },
  {
    id: 13,
    image: "https://m.media-amazon.com/images/I/61sDAkpGhFL._UY695_.jpg",
    title: "Lacoste L001 Branded Trainers",
    price: {
      usd: 172,
      inr: 14381,
    },
    discountPercent: 5,
    description:
      "High-quality branded trainers from Lacoste, featuring a stylish design and comfortable fit.",
    category: "Shoes",
    rating: {
      rate: 4.5,
      count: 81,
    },
  },
  {
    id: 14,
    image: "https://m.media-amazon.com/images/I/51vs0bFk-FL._UY695_.jpg",
    title: "Lacoste Mid Leather Trainers",
    price: {
      usd: 165,
      inr: 13679,
    },
    discountPercent: 6,
    description:
      "Premium mid-top leather trainers from Lacoste, featuring a sleek and comfortable design.",
    category: "Shoes",
    rating: {
      rate: 4.5,
      count: 92,
    },
  },
  {
    id: 15,
    image: "https://m.media-amazon.com/images/I/51vTZitEeoL._UX679_.jpg",
    title: "Puma Regular Track Pants",
    price: {
      usd: 22,
      inr: 1834,
    },
    discountPercent: 12,
    description:
      "Comfortable Puma track pants made for sports and casual wear.",
    category: "Men's Clothing",
    rating: {
      rate: 4.2,
      count: 63,
    },
  },
  {
    id: 16,
    image: "https://m.media-amazon.com/images/I/518aBd3cQoL._SY879_.jpg",
    title: "Pink Women and Girls Drawstringed Cotton Baggy Fit Joggers",
    price: {
      usd: 12,
      inr: 999,
    },
    discountPercent: 15,
    description:
      "Comfortable and stylish cotton baggy fit joggers for women and girls, featuring an adjustable drawstring waist and relaxed fit for everyday wear.",
    category: "Women's Clothing",
    rating: {
      rate: 4.3,
      count: 78,
    },
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

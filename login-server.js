const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// ------------------- Fake Users -------------------
const users = [
  {
    id: 451,
    name: "Mohamed Wael Mahomud",
    email: "mo@gmail.com",
    phone: "01095619839",
    password: "mowael2003",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    points: 0,
    credit: 0,
  },
  {
    id: 452,
    name: "Wael Mahomud Ismail",
    email: "wael@gmail.com",
    phone: "01226988582",
    password: "wael2003",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LYTfqPV4mzuLAkcQ_Q3AV4oFZ9jREAbmRA&s",
    points: 0,
    credit: 0,
  },
];

// ------------------- Fake Products -------------------
const products = {
  status: true,
  message: null,
  data: {
    banners: [
      {
        image: [
          "https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
          "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
        ],
      },
    ],
    products: [
      {
        id: 1,
        name: "iPhone 14 Pro Max",
        price: 52000,
        old_price: 60000,
        discount: 13,
        category: "Mobiles",
        count: 0,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
        info: "The latest flagship from Apple featuring the A16 Bionic chip, Super Retina XDR display, and a 48MP main camera for professional-grade photography.",
      },
      {
        id: 3,
        name: "Google Pixel 8 Pro",
        price: 35000,
        old_price: 40000,
        discount: 12,
        category: "Mobiles",
        count: 0,
        image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg",
        info: "Experience pure Android with Google’s flagship, featuring the Tensor G3 chip, AI-powered camera, and advanced photo editing tools.",
      },
      {
        id: 4,
        name: "OnePlus 12",
        price: 30000,
        old_price: 35000,
        discount: 14,
        category: "Mobiles",
        count: 0,
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg",
        info: "OnePlus 12 brings blazing-fast performance with Snapdragon 8 Gen 3, a 120Hz AMOLED display, and superior charging speed.",
      },
      {
        id: 5,
        name: "Xiaomi 13 Pro",
        price: 28000,
        old_price: 33000,
        discount: 15,
        category: "Mobiles",
        count: 0,
        image: "https://m.media-amazon.com/images/I/513fG2LYvIL._AC_SX522_.jpg",
        info: "Co-engineered with Leica, featuring a 50MP triple camera system, Snapdragon 8 Gen 2 processor, and 120W fast charging.",
      },
      {
        id: 6,
        name: "MacBook Air M2",
        price: 40000,
        old_price: 45000,
        discount: 11,
        category: "Laptops",
        count: 0,
        image: "https://m.media-amazon.com/images/I/71-D1xCuVwL._AC_SX679_.jpg",
        info: "Apple’s thinnest and lightest laptop powered by the M2 chip, offering up to 18 hours of battery life and a stunning Liquid Retina display.",
      },
      {
        id: 8,
        name: "Asus Tuf F15 Gaming Laptop",
        price: 31000,
        old_price: 37000,
        discount: 16,
        category: "Laptops",
        count: 0,
        image: "https://m.media-amazon.com/images/I/51IjRtHguSL._AC_SX679_.jpg",
        info: "Built for gamers with Intel Core i7, RTX 3060 GPU, 144Hz display, and military-grade durability.",
      },
      {
        id: 9,
        name: "Lenovo Legion 5",
        price: 35000,
        old_price: 40000,
        discount: 13,
        category: "Laptops",
        count: 0,
        image: "https://m.media-amazon.com/images/I/51fefkRnnAL._AC_SX679_.jpg",
        info: "Powerful gaming laptop featuring AMD Ryzen 7, NVIDIA RTX 3060 graphics, and a high-refresh-rate display for smooth gameplay.",
      },
      {
        id: 11,
        name: "PlayStation 5",
        price: 29500,
        old_price: 35000,
        discount: 15,
        category: "Gaming",
        count: 0,
        image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg",
        info: "Next-gen console delivering lightning-fast load times, stunning 4K graphics, and immersive 3D audio.",
      },
      {
        id: 16,
        name: "Chanel No.5 (Perfume)",
        price: 15000,
        old_price: 18000,
        discount: 17,
        category: "Perfumes",
        count: 0,
        image: "https://m.media-amazon.com/images/I/61OO1-L9VSL._AC_SX679_.jpg",
        info: "An iconic fragrance from Chanel, blending floral and aldehydic notes for a timeless, elegant scent.",
      },
      {
        id: 19,
        name: "YSL Libre",
        price: 13500,
        old_price: 15500,
        discount: 13,
        category: "Perfumes",
        count: 0,
        image: "https://m.media-amazon.com/images/I/61wCjgpX-PL.__AC_SX300_SY300_QL70_ML2_.jpg",
        info: "A bold, floral fragrance combining lavender essence with Moroccan orange blossom and vanilla.",
      },
      {
        id: 20,
        name: "Versace Eros Flamme",
        price: 12500,
        old_price: 14500,
        discount: 14,
        category: "Perfumes",
        count: 0,
        image: "https://www.faces.eg/dw/image/v2/BJSM_PRD/on/demandware.static/-/Sites-faces-master-catalog/default/dw199669dc/product/8011003846627_/8011003846627_.jpg?sw=800&sh=800",
        info: "An intense fragrance with notes of Italian lemon, black pepper, and cedarwood, exuding passion and energy.",
      },
    ],
  },
};

// ------------------- Routes -------------------
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({
      status: true,
      message: "تم تسجيل الدخول بنجاح",
      data: user,
    });
  } else {
    res.json({
      status: false,
      message: "تعذر تسجيل الدخول",
      data: null,
    });
  }
});

app.get("/products", (req, res) => {
  res.json({
    status: true,
    welcome: "قائمة المنتاجات",
    product: products,
  });
});

// ------------------- Start Server -------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

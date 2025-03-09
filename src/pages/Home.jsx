import React from "react";
import ProductSlider from "../components/ProductSlider";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";

const products = [
    {
      name: "Logitech G502 Gaming Mouse",
      image: "mouse.png",
      oldPrice: 38.0,
      newPrice: 19.0,
      discount: "-50%",
    },
    {
      name: "NPET K10 Wired Keyboard",
      image: "keyboard.png",
      oldPrice: 49.0,
      newPrice: 34.3,
      discount: "-30%",
    },
    {
      name: "Apple Watch Series 7",
      image: "watch.png",
      oldPrice: 289.0,
      newPrice: 231.2,
      discount: "-20%",
    },
    {
      name: "MacBook Air M2",
      image: "macbook.png",
      oldPrice: 950.22,
      newPrice: 712.66,
      discount: "-25%",
    },
    {
        name: "MacBook Air M2",
        image: "macbook.png",
        oldPrice: 950.22,
        newPrice: 712.66,
        discount: "-25%",
      },
  ];
  
const Home = () => {
    return (
        <div>
            <ProductSlider products={products} />
            
        </div>
    );
};

export default Home;

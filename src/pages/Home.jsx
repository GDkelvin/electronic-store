import React from "react";
import ProductSlider from "../components/ProductSlider";
import laptop from "../assets/Laptop-Home.png";
import styles from "../css/Home.module.css";
import ProductCard from "../components/Product/ProductCard";
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
    <div className={styles["home"]}>
      {/* Landing */}
      <div className={styles["home-introduction"]}>
        <div className={styles["home-text"]}>
          <h1 style={{ fontSize: "64px" }}>GDkelvin</h1>
          <p style={{ fontSize: "32px" }}>"Join the <span style={{ color: "#FF6951" }}>digital revolution</span>"</p>
          <button>Explore more</button>
        </div>
        <div className={styles["home-image"]}>
          <img src={laptop}></img>
        </div>
      </div>
      <ProductSlider products={products} />
      {/* <CategoryMenu></CategoryMenu> */}

      {/* New Products */}
      <div className={styles["new-products"]}>
        <div className={styles["new-products-header"]}>
          <h1>New Products</h1>
          <p>View all &gt; </p>
        </div>
        <div className={styles["new-products-productCard"]}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>



  );
};

export default Home;

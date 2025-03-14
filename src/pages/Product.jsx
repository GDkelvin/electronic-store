import React from "react";
import ProductCategory from '../components/Product/ProductCategory'
import ProductCard from '../components/Product/ProductCard'
import ProductFilter from '../components/Product/ProductFilter'
import Breadcrumb from "../components/Breadcrumb";
import "../css/Product.css"

const Product = () => {
  
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <div className="product-page">
        <div className="category-section">
          <ProductCategory></ProductCategory>
        </div>

        <div className="content-container">
          <div className="filter-section">
            <ProductFilter />
          </div>

          <div className="product-section">
            <div className="sort-product">
              <select>
                <option value="newArrivals">Sort by: New arrivals</option>
                <option value="priceAscending">Price: Ascending</option>
                <option value="priceDescending">Price: Descending</option>
              </select>
            </div>
            <div className="product-grid">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
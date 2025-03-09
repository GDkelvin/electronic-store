import React from "react";
import ProductCategory from '../components/Product/ProductCategory'
import ProductCard from '../components/Product/ProductCard'
import ProductFilter from '../components/Product/ProductFilter'
import "../css/Product.css"

const Product = () => {
  return (
    <>

      <div className="product-page">
        <div className="category-section">
          <ProductCategory></ProductCategory>
        </div>

        <div className="content-container">
          <div className="filter-section">
            <ProductFilter />
          </div>

          <div className="product-section">
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
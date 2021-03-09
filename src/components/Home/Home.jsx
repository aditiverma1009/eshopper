import React from "react";
import Product from "../Product/Product";

import "./Home.scss";

const Home = (props) => {
  const allProducts = props.products.map((eachProduct) => {
    return (
      <Product
        key={eachProduct.id}
        product={eachProduct}
        onIncrement={() => props.onIncrement(eachProduct.id)}
        onDecrement={() => props.onDecrement(eachProduct.id)}
      />
    );
  });

  return (
    <div>
      <div className="product-grid">{allProducts}</div>
    </div>
  );
};

export default Home;

import React from "react";
import "./productsContainer.css";

function ProductsContainer(props) {
  return (
    <div className="pr-container" {...props}>
      {props.children}

    </div>
)}

export default ProductsContainer;

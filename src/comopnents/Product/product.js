import React from "react";
import "./product.css";
import Card from "../Card/Card";

const Product= ({products}) => {
    console.log(products)

    return (
        <div className="productsContainer">
           {products.map((d,i)=>(<Card key={i} title={d.title} image={d.image}/>))}
        </div>
    );
};

export default Product;

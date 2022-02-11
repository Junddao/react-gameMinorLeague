import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stockContext } from "./ProductList.js";

function ProductCard(props) {
  let stock = useContext(stockContext);
  let navigator = useNavigate();

  return (
    <div
      className="col-md-2"
      onClick={() => {
        console.log(props.data.id);
        navigator("/detail/" + props.data.id);
      }}
    >
      <img
        src={"http://gamechart100.com/data/file/B11/thumb/" + props.index}
        // src={"https://codingapple1.github.io/shop/shoes" + props.index + ".jpg"}
        width="100%"
        alt=""
        height={"200px"}
        style={{ objectFit: "contain" }}
      ></img>
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
      {stock[props.i]}
    </div>
  );
}

export default ProductCard;

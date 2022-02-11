import { Axios } from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Data from "./data.js";
import ProductCard from "./ProductCard.js";

export const stockContext = React.createContext();

function ProductList() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  function addShoesItem(props) {
    var _shoes = [...shoes, ...props.data];
    console.log(props.data);
    setShoes(_shoes);
  }

  return (
    <stockContext.Provider value={stock}>
      <div className="container">
        <div className="row">
          {shoes.map((value, index) => {
            return <ProductCard data={value} index={index + 1} key={index} />;
          })}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                console.log(result);
                console.log("성공");
                addShoesItem(result);
              })
              .catch(() => {
                console.log("실패");
              });
          }}
        >
          더보기
        </button>
      </div>
    </stockContext.Provider>
  );
}

export default ProductList;

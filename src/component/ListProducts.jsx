import React from "react";
import { Link } from "react-router-dom";

const Listproducts = (props) => {
  return props.data.map((item) => (
    <div className={props.name + " text-center item-info-pro"} key={item.id}>
      <Link to={`/detail/${item.id}`}>
        <div className="overflow-hidden w-100">
          <img className="img-item-product w-100" src={item.image} alt="" />
        </div>
        <p className="mb-0 name-item-product">{item.title}</p>
        <p className="price-item-product">
          {item.price} <u>đ</u>
        </p>
      </Link>
    </div>
  ));
};

export default Listproducts;

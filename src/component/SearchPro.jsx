import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Listproducts from "./ListProducts";

const Searchpro = () => {
  const { str } = useParams();
  const [pros, setPros] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const respon = await fetch(
          `http://localhost:3005/products?title_like=${str}`
        );
        setPros(await respon.json());
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, [str]);
  return (
    <div className="container">
      <div className="text-center main-title ">
        <h4>Tìm kiếm</h4>
        <p>Tìm kiếm sản phẩm cho "{str}"</p>
      </div>
      <div className="row">
        <Listproducts name="col-lg-3 col-md-4" data={pros} />
      </div>
    </div>
  );
};

export default Searchpro;

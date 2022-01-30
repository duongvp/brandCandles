import React from "react";
import { useEffect, useState } from "react";
import Listproducts from "./ListProducts";
import Skeleton from "react-loading-skeleton";

const Newarrivals = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const fetchApiProduct = async () => {
      try {
        setStatus(true);
        const url = "http://localhost:3005/products";
        const response = await fetch(url);
        setProducts(await response.json());
        setStatus(false);
      } catch (error) {
        console.log("failed:", error);
      }
    };
    fetchApiProduct();
  }, []);
  const loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  return (
    <div className="text-center">
      <h4 className="mb-4">NEW ARRIVALS</h4>
      <div className="container">
        <div className="row">
          {status ? (
            loading()
          ) : (
            <Listproducts name="col-lg-3 col-md-4 col-sm-6" data={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Newarrivals;

import React from "react";
import { Link, useParams } from "react-router-dom";
import Listproducts from "./ListProducts";
import { useState, useEffect, useRef } from "react";
import Filtersize from "./filterSize";
const Products = () => {
  const [data, setData] = useState([]);
  const items = useRef([]);
  const { nameCate } = useParams();
  const [menuChild, setMenuChild] = useState([]);
  const [cates, setCates] = useState([]);
  const [arr, setArr] = useState([]);
  const handleChangeSize = (e) => {
    const checked = e.target.checked;
    checked === true
      ? setArr((prev) => [...prev, e.target.value])
      : setArr((prev) => prev.filter((x) => x !== e.target.value));
  };
  useEffect(() => {
    setData(
      items &&
        items.current.filter((item) =>
          arr.every((elem) => item.size.includes(elem))
        )
    );
  }, [arr, items]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3005/products?category=${nameCate}`
        );
        const db = await response.json();
        setData(db);
        items.current = db;
        const responseCate = await fetch(
          `http://localhost:3005/categories?display=${nameCate}`
        );
        setMenuChild(await responseCate.json());
        const listCates = await fetch("http://localhost:3005/categories");
        setCates(await listCates.json());
      } catch (error) {
        console.log("failed:", error);
      }
    }
    fetchData();
  }, [nameCate]);
  const handleSlide = (e) => {
    let id = document.getElementById("slideShow-" + e.target.id);
    console.log(id.scrollHeight);
    if (id.scrollHeight === 0) {
      e.target.className = "bx bx-minus";
      id.classList.add("haha");
    } else {
      id.classList.remove("haha");
      e.target.className = "bx bx-plus";
    }
  };
  return (
    <div className="tp-product-category product-page margin-page">
      <div className="container overview-pro">
        <div className="nameCate-Detail">
          <Link to={`/products/category/${nameCate}`} className="menu-parent">
            {nameCate}
          </Link>
        </div>
        <ul className="list-unstyled d-flex cateChilds">
          {menuChild[0] &&
            menuChild[0].childMenu.map((item) => (
              <li key={item.id}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
        </ul>
        <div className="row">
          <div className="col-md-3 fillter">
            <div className="item-content-fillter">
              <p>Bộ lọc</p>
            </div>
            <div className="item-content-fillter">
              <div className="d-flex justify-content-between ">
                <p>Sản phẩm</p>
                <button onClick={handleSlide}>
                  <i class="bx bx-plus" id="fill-product"></i>
                </button>
              </div>
              {/* danh muc phan bo loc */}
              <ul className={"list-unstyled"} id="slideShow-fill-product">
                {cates &&
                  cates
                    .filter(
                      (x) => x.display !== "Home" && x.display !== "About us"
                    )
                    .map((item) => (
                      <li key={item.id}>
                        <div className="d-flex justify-content-between">
                          <Link to={item.path}>{item.display}</Link>
                          <button onClick={handleSlide}>
                            <i class="bx bx-plus" id={item.id}></i>
                          </button>
                        </div>
                        <ul
                          className="list-unstyled ps-3"
                          id={`slideShow-${item.id}`}
                        >
                          {item.childMenu &&
                            item.childMenu.map((elem) => (
                              <li key={elem.id}>
                                <Link to={elem.path}>{elem.display}</Link>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
              </ul>
            </div>
            <div className="fillter-price item-content-fillter">
              <div className="title-price d-flex justify-content-between">
                <p>Lọc theo giá</p>
                <button>
                  <i class="bx bx-plus"></i>
                </button>
              </div>
            </div>
            <div className="fillter-size item-content-fillter">
              <div className="title-size d-flex justify-content-between">
                <p>Kích cỡ</p>
                <button onClick={handleSlide}>
                  <i class="bx bx-plus" id="fill-size"></i>
                </button>
              </div>
              <ul
                id="slideShow-fill-size"
                className="list-unstyled"
                onChange={(e) => handleChangeSize(e)}
              >
                <Filtersize size="S" />
                <Filtersize size="L" />
                <Filtersize size="M" />
                <Filtersize size="XL" />
                <Filtersize size="XXL" />
              </ul>
            </div>
          </div>
          <div className="col-md-9 list-products">
            <div className="row">
              <Listproducts name="col-lg-4 col-md-6" data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

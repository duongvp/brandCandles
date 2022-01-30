import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimlarPro from "./SimlarPro";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/cart";
import { Link } from "react-router-dom";
const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [productItem, setProductItem] = useState({});
  const [imageChild, setImageChild] = useState([]);
  const [listSize, setListSize] = useState([]);
  const [size, setSize] = useState("");
  const [similar, setSimilar] = useState([]);
  const [status, setStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const detailProduct = async () => {
      setStatus(true);
      const response = await fetch(`http://localhost:3005/products/${id}`);
      const data = await response.json();
      setProductItem(data);
      setImageChild(data.imageChild);
      setListSize(data.size);
      const response1 = await fetch("http://localhost:3005/products");
      setSimilar(await response1.json());
      setStatus(false);
    };
    detailProduct();
  }, [id]);
  const onChangeSize = (event) => {
    setSize(event.target.value);
  };
  //loading skeleton
  const Loading = () => {
    return (
      <>
        <div className="col-lg-1">
          <Skeleton count={5} height={97} />
        </div>
        <div className="col-lg-5">
          <Skeleton height={500} />
        </div>
        <div className="col-lg-6">
          <Skeleton height={20} />
          <Skeleton count={2} width={100} />
          <Skeleton width={30} />
          <Skeleton width={150} />
          <Skeleton width={250} />
          <Skeleton height={30} />
          <Skeleton width={50} />
          <Skeleton height={300} />
        </div>
        <div className="text-center mt-lg-4">
          <Skeleton height={25} width={260} />
          <div className="row gx-3 mt-3">
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
          </div>
        </div>
      </>
    );
  };
  //hien thi san pham
  const showProduct = () => {
    return (
      <>
        <div className="col-lg-1">
          {imageChild.map((item, index) => (
            <img className="child-image-pro" src={item} alt="" key={index} />
          ))}
        </div>
        <div className="col-lg-5">
          <img className="main-image-pro" src={productItem.image} alt="" />
        </div>
        <div className="col-lg-6">
          <h5 className="product-name">{productItem.title}</h5>
          <p>
            <span>Mã hàng : </span>
            <span>{productItem.id}</span>
          </p>
          <strong className="price-item-pro">
            <span>{productItem.price}</span> VND
          </strong>
          <div className="div-size">
            <p className="title-size">Size</p>
            <div
              className="d-flex choice-size align-items-center"
              onChange={onChangeSize}
            >
              {listSize.map((item, index) => (
                <label
                  className={size === item ? "active me-2" : "me-2"}
                  key={index}
                >
                  <input
                    type="radio"
                    name="size"
                    value={item}
                    check={size === item}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="d-flex mt-3">
            <span>Số lượng</span>
            <div className="d-flex ms-lg-2">
              <button
                className="btn-decrease btn-change-quantity"
                onClick={() =>
                  setQuantity(quantity - 1 >= 1 ? quantity - 1 : 1)
                }
              >
                <i class="bx bx-minus"></i>
              </button>
              <input
                type="number"
                value={quantity}
                className="inp-quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className="btn-change-quantity"
                onClick={() => setQuantity(quantity + 1)}
              >
                <i class="bx bx-plus"></i>
              </button>
            </div>
          </div>
          <Link to="/cart">
            <button
              className="btn-add-cart w-100 mt-3 mb-3"
              onClick={() => handleAddPro(productItem)}
            >
              THÊM VÀO GIỎ
            </button>
          </Link>
          <div className="description">
            <p className="title-description">Mô tả</p>
            <p>{productItem.description}</p>
          </div>
        </div>
        <div className="text-center mt-lg-4">
          <h5 className="mb-4">SẢN PHẨM LIÊN QUAN</h5>
          <SimlarPro similar={similar} productItem={productItem} />
        </div>
      </>
    );
  };
  //them san pham vao gio hang
  const handleAddPro = (product) => {
    const obj = { ...product, quantity: Number(quantity), size };
    dispatch(addCart(obj));
  };
  return (
    <div className="detail">
      <div className="container-fluid list-similar">
        <div className="row">{status ? Loading() : showProduct()}</div>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
const Bestseller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const [bestSeler, setBestSeler] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const fetchApiProduct = async () => {
      try {
        setStatus(true);
        const url = "http://localhost:3005/products";
        const response = await fetch(url);
        setBestSeler(await response.json());
        setStatus(false);
      } catch (error) {
        console.log("failed:", error);
      }
    };
    fetchApiProduct();
  }, []);
  const loading = () => {
    return (
      <div className="row mb-5 gx-2">
        <div class="col">
          <Skeleton height={350} />
        </div>
        <div class="col">
          <Skeleton height={350} />
        </div>
        <div class="col">
          <Skeleton height={350} />
        </div>
        <div class="col">
          <Skeleton height={350} />
        </div>
        <div class="col">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };
  const listPro = () => {
    return (
      <div className="row mb-lg-5 mb-md-3">
        <Slider {...settings}>
          {bestSeler.map((item) => (
            <div className="text-center item-info-pro" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <div className="overflow-hidden w-100">
                  <img
                    className="img-item-product w-100"
                    src={item.image}
                    alt=""
                  />
                </div>
                <p className="mb-0 name-item-product">{item.title}</p>
                <p className="price-item-product">
                  {item.price} <u>đ</u>
                </p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  return (
    <div className="text-center">
      <h4 className="mb-4">BEST SELLER</h4>
      <div className="container list-seller">
        {status ? loading() : listPro()}
        <img
          className="w-100"
          src="https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/Untitled_4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Bestseller;

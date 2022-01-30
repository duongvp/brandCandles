import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
var banArr = [
  {
    id: 1,
    imageUrl:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/f4ddb99a1cd7d7898ec6.jpg",
    path: "/",
  },
  {
    id: 2,
    imageUrl:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/0711805b2516ee48b707.jpg",
    path: "/",
  },
  {
    id: 3,
    imageUrl:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/aeac99e83ca5f7fbaeb4.jpg",
    path: "/",
  },
];
var cateArr = [
  {
    name: "Bottom",
    imageUrl:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/be0d87a7a28f69d1309e.jpg",
    id: 1,
    path: "products/category/bottom",
  },
  {
    name: "Top",
    imageUrl:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/674bf3e5d6cd1d9344dc.jpg",
    id: 2,
    path: "products/category/top",
  },
  {
    name: "ACCESSORIES",
    imageUrl:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/16762/bn/3174f316d73e1c60452f.jpg",
    id: 3,
    path: "/products/category/accessories",
  },
];
export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 280,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    fade: true,
  };
  return (
    <div className="outfit-img-banner">
      <Slider {...settings}>
        {banArr.map((item) => (
          <Link to={item.path} key={item.id}>
            <img className="img-banner" src={item.imageUrl} alt="" />
          </Link>
        ))}
      </Slider>
      <div className="container">
        <div className="row gx-2">
          {cateArr.map((item) => (
            <div className="col-lg-4 col-md-4 list-banner-cate" key={item.id}>
              <Link to={item.path}>
                <img className="img-banner-cate" src={item.imageUrl} alt="" />
                <span className="txt-banner-cate">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

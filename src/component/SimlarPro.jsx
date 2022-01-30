import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function SimlarPro(props) {
  function LeftNavButton(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{
          ...style,
          display: "block",
          transform: "translate(-50% , -50%)",
          left: "-21px",
          color: "#757575",
        }}
        onClick={onClick}
      >
        <i class="bx bx-chevron-left"></i>
      </div>
    );
  }
  function RightNavButton(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{
          ...style,
          display: "block",
          transform: "translate(50% , -50%)",
          right: "-21px",
          color: "#757575",
        }}
        onClick={onClick}
      >
        <i class="bx bx-chevron-right"></i>
      </div>
    );
  }
  const { similar, productItem } = props;
  const numberItem = similar.filter(
    (x) => x.category === productItem.category && x.id !== productItem.id
  ).length;
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: Math.min(numberItem, 4),
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <LeftNavButton />,
    prevArrow: <RightNavButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {similar
        .filter(
          (x) => x.category === productItem.category && x.id !== productItem.id
        )
        .map((item) => (
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
  );
}

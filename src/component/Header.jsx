import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const navMain = [
  {
    id: 1,
    display: "Home",
    path: "/",
    childMenu: [],
  },
  {
    id: 2,
    display: "Top",
    path: "/products/category/top",
    childMenu: [
      {
        id: 7,
        display: "T-Shirts",
        path: "/T-Shirts",
      },
      {
        id: 8,
        display: "Shirts",
        path: "/Shirts",
      },
      {
        id: 9,
        display: "Sweaters",
        path: "/Sweaters",
      },
      {
        id: 10,
        display: "Hoodies",
        path: "/Hoodies",
      },
    ],
  },
  {
    id: 3,
    display: "Bottom",
    path: "/products/category/bottom",
    childMenu: [
      {
        id: 11,
        display: "Shorts",
        path: "/T-Shirts",
      },
      {
        id: 12,
        display: "Cargo",
        path: "/Shirts",
      },
      {
        id: 13,
        display: "Denim",
        path: "/Sweaters",
      },
    ],
  },
  {
    id: 14,
    display: "Outwear",
    path: "/products/category/outwear",
    childMenu: [
      {
        id: 15,
        display: "JACKETS",
        path: "/JACKETS",
      },
    ],
  },
  {
    id: 4,
    display: "Sale",
    path: "/products/category/sale",
    childMenu: [],
  },
  {
    id: 5,
    display: "Accessories",
    path: "/products/category/accessories",
    childMenu: [
      {
        id: 16,
        display: "BAGS",
        path: "/bags",
      },
      {
        id: 17,
        display: "CAPS",
        path: "/caps",
      },
    ],
  },
  {
    id: 6,
    display: "About us",
    path: "/",
    childMenu: [],
  },
];
const Header = () => {
  const number = useSelector((state) => state.cart.cartNumber);
  const [show, setShow] = useState({ background: "transparent" });
  const [check, setCheck] = useState(false);
  const [str, setStr] = useState("");
  const { pathname } = useLocation();
  const [dataCate, setDataCate] = useState([]);
  const [activeMenu, setActiveMenu] = useState(false);
  useEffect(() => {
    pathname === "/"
      ? setShow({ background: "transparent" })
      : setShow({ background: "#000" });
  }, [pathname]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        pathname === "/"
          ? setShow({ background: "transparent" })
          : setShow({ background: "#000" });
      } else setShow({ background: "#000" });
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [pathname]);
  useEffect(async () => {
    const listCates = await fetch("http://localhost:3005/categories");
    setDataCate(await listCates.json());
  }, []);
  const inputEl = useRef(null);
  const handleSearchInput = () => {
    setCheck(true);
    setStr("");
    inputEl.current.focus();
  };
  return (
    <header
      className="d-flex justify-content-between align-items-center"
      style={show}
    >
      <div className="navbar-response">
        <button onClick={() => setActiveMenu(true)}>
          <i class="bx bx-menu"></i>
        </button>
        <div
          className={
            activeMenu ? "block-menu content-nav-cate" : "content-nav-cate"
          }
        >
          <div
            className={
              activeMenu
                ? "block-cate-res list-category-res"
                : "list-category-res"
            }
          >
            <ul className={"list-unstyled"}>
              {dataCate &&
                dataCate.map((item) => (
                  <li key={item.id}>
                    <div className="d-flex justify-content-between">
                      <Link to={item.path} onClick={() => setActiveMenu(false)}>
                        {item.display}
                      </Link>
                      <button>
                        <i class="bx bx-chevron-down"></i>
                      </button>
                    </div>
                    <ul className="list-unstyled ps-3">
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
          <div
            className="black-menuOn"
            onClick={() => setActiveMenu(false)}
          ></div>
        </div>
      </div>
      <div>
        <img
          className="img-logo"
          src="https://storage.googleapis.com/cdn.nhanh.vn/store/16762/logo_1637162795_logo%20png-03.png"
          alt=""
        />
      </div>
      <div className="subnav-trail">
        <ul className="d-flex list-unstyled menu-nav mb-0">
          {navMain.map((item) => {
            return (
              <li key={item.id} className="list-parent-menu">
                <Link className="parent-menu" to={item.path}>
                  {item.display}
                </Link>
                <ul className="list-unstyled cover-children" style={show}>
                  {item.childMenu.map((element) => (
                    <li key={element.id}>
                      <Link className="children-menu" to={element.path}>
                        {element.display}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button className="btn-search" onClick={handleSearchInput}>
          <i className="bx bx-search"></i>
        </button>
        <Link to="/account" className="account">
          <i className="bx bx-user-circle"></i>
        </Link>
        <Link to="/cart" className="link-bag">
          <i className="bx bx-shopping-bag"></i>
          <span className="number-added-pro">
            <p>{number}</p>
          </span>
        </Link>
      </div>
      <div className="search-product" id={check ? "active-search" : ""}>
        <div className="overlay-search" onClick={() => setCheck(false)}></div>
        <div className="content-search">
          <div className="text-end">
            <button
              className="btn-close-search"
              onClick={() => setCheck(false)}
            >
              <i class="bx bx-x"></i>
            </button>
          </div>
          <div className="wrap-search-header">
            <Link to={`/search/${str}`}>
              <button
                className="btn-wrap-search"
                onClick={() => setCheck(false)}
              >
                <i className="bx bx-search"></i>
              </button>
            </Link>
            <input
              ref={inputEl}
              type="text"
              placeholder="Search..."
              value={str}
              onChange={(e) => setStr(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="overview-footer w-100">
        <div className="container">
          <div className="row w-100 ms-0 gx-2">
            <div className="col-sm col-12 pb-4 p-md-0">
              <p className="title">
                <span>
                  <strong>CANDLES</strong>
                </span>
              </p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">258 Thái Hà</Link>
                </li>
                <li>
                  <Link to="http://candles.vn">info@candles.vn</Link>
                </li>
                <li>
                  <Link to="">0966.688.258</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm col-12 pb-4 p-md-0">
              <p className="title">
                <span>
                  <strong>HỖ TRỢ</strong>
                </span>
              </p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Kiểm tra đơn hàng</Link>
                </li>
                <li>
                  <Link to="http://candles.vn">Đăng nhập</Link>
                </li>
                <li>
                  <Link to="">Đăng ký</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm col-12 pb-4 p-md-0">
              <p className="title">
                <span>
                  <strong>CHÍNH SÁCH</strong>
                </span>
              </p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link to="http://candles.vn">Chính sách đổi trả</Link>
                </li>
                <li>
                  <Link to="">Chính sách vận chuyển</Link>
                </li>
                <li>
                  <Link to="">Quy định sử dụng</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm col-12 pb-4 p-md-0">
              <p className="title">
                <span>
                  <strong>GỬI EMAIL</strong>
                </span>
              </p>
              <ul className="list-unstyled">
                <li>
                  <span style={{ fontSize: "0.82rem" }}>
                    Gửi email nhận khuyến mãi
                  </span>
                </li>
                <li style={{ fontSize: "0.82rem", paddingTop: "7px" }}>
                  <input className="w-75" type="text" placeholder="Email" />
                </li>
              </ul>
            </div>
            <div className="col-1 pb-4 p-md-0">
              <p className="title">
                <span>
                  <strong>KẾT NỐI</strong>
                </span>
              </p>
              <ul className="list-unstyled d-flex connect justify-content-between">
                <li>
                  <Link to="">
                    <i class="bx bxl-meta"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="bx bxl-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="bx bxl-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="license">
        <span style={{ color: "#af1e30" }}> CANDLES STUDIO 2021</span> © ALL
        RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;

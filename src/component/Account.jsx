import React from "react";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <div>
      <div className="account-sign">
        <div className="btn-sign">
          <p className="title-assign">Tài Khoản</p>
          <p>Bạn chưa đăng nhập</p>
          <Link to="/login">
            <button>Đăng nhập</button>
          </Link>
          <p>Chưa có tài khoản tại Candles</p>
          <Link to="/register">
            <button className="btn-sign-up">Đăng ký</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;

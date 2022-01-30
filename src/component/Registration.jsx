import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="account-sign">
        <div className="btn-sign">
          <p className="title-assign">Đăng ký</p>
          <p>Số điện thoại</p>
          <input
            type="number"
            placeholder="Nhập số điện thoại"
            className="w-100"
          />
          <p>Email</p>
          <input type="email" placeholder="Nhập email" className="w-100" />
          <p>Họ và Tên</p>
          <input type="text" placeholder="Nhập họ tên" className="w-100" />
          <p>Mật khẩu</p>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-100"
          />
          <button className="mt-4 btn-register">Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;

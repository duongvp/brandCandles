import React from "react";

const Itemfooter = (props) => {
  return (
    <div className="col pb-4 p-md-0">
      <p className="title">
        <span>
          <strong>CANDLES</strong>
        </span>
      </p>
      <ul>
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
  );
};

export default Itemfooter;

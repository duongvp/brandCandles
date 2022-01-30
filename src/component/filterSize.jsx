import React from "react";

const Filtersize = (props) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          name="size"
          id=""
          className="me-2"
          value={props.size}
        />
        {props.size}
      </label>
    </li>
  );
};

export default Filtersize;

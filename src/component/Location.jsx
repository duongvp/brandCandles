import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
const Location = (props) => {
  const [options, setOptions] = useState([]);
  const [optionDistrict, setOptionDistrict] = useState([
    {
      value: "",
      label: "Quận/huyện",
    },
  ]);
  const [optionWard, setOptionWard] = useState([
    {
      value: "",
      label: "Phường/xã",
    },
  ]);
  const [idProvice, setIdProvince] = useState(null);
  const [idDistrict, setIdDistrict] = useState(null);
  const [idWard, setIdWard] = useState(null);
  //call api tinh
  useEffect(async () => {
    const response = await fetch("https://provinces.open-api.vn/api/p");
    const newArr = await response.json();
    setOptions(
      newArr.map((item) => {
        return {
          value: item.code,
          label: item.name,
        };
      })
    );
  }, []);
  //call api huyen
  useEffect(async () => {
    if (idProvice !== null) {
      const responseD = await fetch(
        `https://provinces.open-api.vn/api/p/${idProvice}?depth=2`
      );
      const listDistrict = await responseD.json();
      setOptionDistrict([
        {
          value: "",
          label: "Quận/huyện",
        },
        ...listDistrict.districts.map((item) => {
          return {
            value: item.code,
            label: item.name,
          };
        }),
      ]);
    }
  }, [idProvice]);
  //call api phuong
  useEffect(async () => {
    if (idDistrict !== null) {
      const responseW = await fetch(
        `https://provinces.open-api.vn/api/d/${idDistrict}?depth=2`
      );
      const listWard = await responseW.json();
      setOptionWard([
        {
          value: "",
          label: "Phường/xã",
        },
        ...listWard.wards.map((item) => {
          return {
            value: item.code,
            label: item.name,
          };
        }),
      ]);
    }
  }, [idDistrict]);
  const handleChange = (e) => {
    setIdProvince(e.value);
    e.value == 1 ? props.setShip(5) : props.setShip(10);
    setOptionWard([
      {
        value: "",
        label: "Phường/xã",
      },
    ]);
    setIdDistrict("");
    setIdWard("");
    changeDataLocal(e.label, "province");
    changeDataLocal("", "district");
    changeDataLocal("", "ward");
  };

  const handleDistrict = (e) => {
    setIdDistrict(e.value);
    setIdWard("");
    changeDataLocal(e.label, "district");
    changeDataLocal("", "ward");
  };

  const handleWard = (e) => {
    setIdWard(e.value);
    changeDataLocal(e.label, "ward");
  };
  const changeDataLocal = (label, id) => {
    const newArr = { ...props.data };
    newArr.address[id] = label;
    props.setData(newArr);
  };
  return (
    <div className="row gx-2 location-customer">
      <div className="col-md-4">
        <Select
          name="form-field-name"
          options={options}
          placeholder="Tỉnh/thành"
          onChange={(e) => handleChange(e)}
          id="province"
        />
      </div>
      <div className="col-md-4">
        <Select
          name="form-field-name"
          options={optionDistrict}
          value={optionDistrict.find((e) => e.value === idDistrict)}
          placeholder="Quận/huyện"
          onChange={(e) => handleDistrict(e)}
          id="district"
        />
      </div>
      <div className="col-md-4">
        <Select
          name="form-field-name"
          options={optionWard}
          value={optionWard.find((e) => e.value === idWard)}
          placeholder="Phường/xã"
          onChange={(e) => handleWard(e)}
          id="ward"
        />
      </div>
    </div>
  );
};

export default Location;

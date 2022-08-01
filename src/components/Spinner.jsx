import React, { useState } from "react";
import { spinner } from "../data/spinnerData";
import logo from "../assets/logo.jpg";
const Spinner = () => {
  const [toggle, setToggle] = useState("");
  const addClass = (event) => {
    event.currentTarget.classList.add("pre-spin");
    event.currentTarget.classList.remove("spin");
  };

  const removeClass = (event) => {
    event.currentTarget.classList.remove("pre=spin");
    event.currentTarget.classList.add("spin");
  };

  return (
    <>
      {spinner.map(({ name, id, img, key }) => {
        return (
          <>
            <div key={id} className="spinner_container">
              <div className="spinner_col_box" onClick={() => setToggle(key)}>
                <img className="spinner_col_img" src={img} alt={name} />
                <h1 className="spinner_col_text">{name}</h1>
              </div>
              <div className="spinner">
                <div
                  className="spinner_body"
                  onMouseEnter={(e) => addClass(e)}
                  onMouseLeave={(e) => removeClass(e)}
                >
                  {toggle === key ? (
                    <img className="spinner_body_img" src={img} alt={key} />
                  ) : null}
                </div>
                {toggle === key ? (
                  <div className="spinner_center">
                    <img className="spinner_logo_img" src={logo} alt="logo" />
                  </div>
                ) : null}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Spinner;

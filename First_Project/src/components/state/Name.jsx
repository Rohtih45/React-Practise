import { useState } from "react";

function Name() {
  var [name, setName] = useState("");
  var [img, setImag] = useState("");

  var [discription, setDiscription] = useState("");

  function changeToRohit() {
    setName((name = "Fitness Equipment"));
    setImag(
      (img =
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg")
    );

    setDiscription((discription = "All in one GYM kit"));
  }

  function changeToSathvik() {
    setName((name = "IKIGAI"));
    setImag(
      (img =
        "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg")
    );

    setDiscription((discription = "Best seller book in Amazon"));
  }

  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <div
        style={{
          border: "2px solid black",
          margin: 20,
          height: "450px",
          width: "303px",
        }}
      >
        <img
          src={img}
          width={300}
          height={300}
          onMouseEnter={changeToSathvik}
          onMouseLeave={changeToRohit}
        />
        <h4>Name :{name}</h4>
        <p>Description : {discription}</p>
        <br />
        <button
          class="btn btn-success"
          onClick={changeToRohit}
          style={{ width: "45%" }}
        >
          GYM
        </button>
        &nbsp;&nbsp;
        <button
          class="btn btn-primary"
          onClick={changeToSathvik}
          style={{ width: "45%" }}
        >
          BOOK
        </button>
      </div>
    </div>
  );
}

export default Name;

import React from "react";
import { useState } from "react";

let intervalId;
function Intervalimg() {
  const slides = [
    {
      image: "https://picsum.photos/id/1018/1000/600/",
      title: "Beatiful Nature",
      description: "Sairam sairam sairam",
    },
    {
      image: "https://picsum.photos/id/1015/1000/600/",
      title: "Mountain Adventure",
      description: "No food No annam",
    },
    {
      image: "https://picsum.photos/id/1019/1000/600/",
      title: "Peaceful Lakes",
      description: "What a seenic kada venky",
    },
  ];

  var [count, setCount] = useState(0);

  if (!intervalId) {
    intervalId = setInterval(() => {
      setCount((tickTick) => {
        if (tickTick === slides.length - 1) {
          return 0;
        } else {
          return tickTick + 1;
        }
      });
    }, 3000);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${slides[count].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
        transition:"opacity 1s"
      }}
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "3rem" }}>{slides[count].title}</h1>
        <p style={{ fontSize: "1.5em" }}>{slides[count].description}</p>
      </div>
    </div>
  );
}
export default Intervalimg;

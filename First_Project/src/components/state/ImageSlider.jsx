import React, { useState } from "react";

let intervalId; // global interval holder

function ImageSlider() {
  const slides = [
    {
      image: "https://picsum.photos/id/1018/1000/600/",
      title: "Beautiful Nature",
      description: "No food No Annam just beauty",
    },
    {
      image: "https://picsum.photos/id/1015/1000/600/",
      title: "Mountain Adventure",
      description: "Sairam Sairam sairam....",
    },
    {
      image: "https://picsum.photos/id/1019/1000/600/",
      title: "Peaceful Lake",
      description: "what a seenic kada venky",
    },
  ];

  var [current, setCurrent] = useState(0);

  if(!intervalId){
    intervalId = setInterval(()=>{
      setCurrent((data)=>{
        if(data === slides.length - 1){
          return 0;
        }else{
          return data + 1;
        }
      })
    },3000)
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        transition:"opacity 1s"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ font: "3rem" }}>{slides[current].title}</h2>
        <p style={{ font: "1.5rem" }}>{slides[current].description}</p>
      </div>
    </div>
  );
}

export default ImageSlider;

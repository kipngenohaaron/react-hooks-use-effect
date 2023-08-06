import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });
  }, []); // Pass an empty array as the second argument

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt="Dog" />
      ))}
    </div>
  );
}

export default DogPics;

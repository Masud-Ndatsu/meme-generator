import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import memes from "./data";

function App() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState(memes.data.memes);
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes([...allMemes, data.memes]));
  }, [count]);

  function getMemeData() {
    const memesArray = [...allMemes];
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Hero
          formData={formData}
          handleChange={handleChange}
          getMemeData={getMemeData}
        />
        <Meme formData={formData} meme={meme} />
      </div>
    </div>
  );
}

export default App;

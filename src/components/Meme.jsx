import React, { useEffect, useState } from "react";

const Meme = ({ formData, meme }) => {
  const { title, desc } = formData;
  return (
    <>
      <section
        className="main--section"
        style={{ backgroundImage: `url(${meme.randomImage})` }}
      >
        <h1 className="top--text meme--text">{title.toUpperCase()}</h1>
        <h1 className="bottom--text meme--text">{desc.toUpperCase()}</h1>
      </section>
    </>
  );
};

export default Meme;

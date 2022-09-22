import React from "react";
const Form = ({ formData, handleChange, getMemeData }) => {
  const { title, desc } = formData;
  return (
    <div className="form">
      <input
        type="text"
        className="form--inputs"
        placeholder="My text here"
        name="title"
        value={title}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="text"
        className="form--inputs"
        placeholder="Please where"
        name="desc"
        value={desc}
        onChange={handleChange}
        autoComplete="off"
      />
      <button className="form--btn" type="button" onClick={getMemeData}>
        Get a new meme image
      </button>
    </div>
  );
};

export default Form;

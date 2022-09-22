import React, { useState } from "react";
import Form from "./Form";

const Hero = ({ formData, handleChange, getMemeData }) => {
  return (
    <section className="hero--section">
      <Form
        formData={formData}
        handleChange={handleChange}
        getMemeData={getMemeData}
      />
    </section>
  );
};

export default Hero;

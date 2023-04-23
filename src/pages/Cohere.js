import React, { useState, useEffect } from "react";
import axios from "axios";

const Cohere = () => {
  const [data, setData] = useState();
  const [translated, setTranslated] = useState([]);
  // const [lang, setLang] = useState('')

  const callCohere = async () => {
    const resp = await axios
      .post("http://localhost:8000/generator", {})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const compVision = async () => {
    const resp = await axios
      .post("http://localhost:8000/vision", {})
      .then((res) => setTranslated(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(translated);
  }, [translated]);

  return (
    <>
      <h1>hellothere</h1>
      <button type="button" onClick={() => callCohere()}>
        hi
      </button>
      <h1>vision</h1>
      <button type="button" onClick={() => compVision()}>
        vision
      </button>
    </>
  );
};

export default Cohere;

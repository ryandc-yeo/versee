import React, { useState } from "react";
import axios from "axios";

const Cohere = () => {
  const [data, setData] = useState();

  const callCohere = async () => {
    const resp = await axios
      .post("http://localhost:8000/generator", {})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>hellothere</h1>
      <button type="button" onClick={() => callCohere()}>
        hi
      </button>
    </>
  );
};

export default Cohere;

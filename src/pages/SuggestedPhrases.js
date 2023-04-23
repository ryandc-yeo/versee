import React, { useState, useEffect } from "react";
import styles from '../styles/SuggestedPhrases.module.css';
import axios from "axios";
import Image from 'next/image';
import QuestionLogo from '../imgs/question.svg';

const SuggestedPhrases = () => {
  const [data, setData] = useState();
  const [translated, setTranslated] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [foreignText, setForeignText] = useState([]);
  const [romanizedText, setRomanizedText] = useState([]);
  const [translatedText, setTranslatedText] = useState([]);
  // const [lang, setLang] = useState('')

  const callCohere = async () => {
    const resp = await axios
      .post("http://localhost:8000/generator", {})
      .then(async (res) => {
        console.log(res.data);
        const foreign = await res.data[0];
        const roman = await res.data[1];
        const trans = await res.data[2];
        setForeignText(foreign);
        setRomanizedText(roman);
        setTranslatedText(trans);
      }) // this is [your prompt data]
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

  useEffect(() => {
    callCohere()
  }, []);

  if (clicked === false) {
    return (
      <div onClick={() => {
        callCohere();
        setClicked(true);
      }} style={{
        height: 'fill',
        width: 'auto',
      }}>
        <div style={{
          marginTop: '50%',
          marginLeft: '20%',
        }}>
          Click to Generate Suggestions!
        </div>
        {/* <h1>vision</h1>
        <button type="button" onClick={() => compVision()}>
          vision
        </button> */}
      </div>
    );
  }
  else {
    const array = [0, 1, 2];
    return (
      <div className={styles.background}>
        <div className={styles.title}>
          Suggestions
        </div>
        <div className={styles.body}>
          {
            array.map((i) => ( 
              <div key={i} className={styles.card}>
                <div className={styles.cardTitle}>
                  <Image src={QuestionLogo} alt="question logo" />
                  <div className={styles.cardTitleText}>
                    {translatedText[i]}
                  </div>
                </div>
                  <div className={styles.cardBody}>
                    {foreignText[i]}
                  </div>
                  <div className={styles.cardEnd}>
                    {romanizedText[i]}
                  </div>
              </div>
            ))
          }
        </div>
              {/* <div key={i}>
              {console.log(foreignText)}
                {foreignText[{i}]}
                {romanizedText[{i}]}
                {translatedText[{i}]}
              </div> */}
          
        {/* {phrases[0].map((local, i) => (
          <div key={i}>
            {local}
          </div>
        ))} */}
      </div>
    )
  }
};

export default SuggestedPhrases;

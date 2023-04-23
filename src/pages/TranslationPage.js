import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Translation.module.css";

export default function TranslationPage() {
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [originalSentence, setOriginalSentence] = useState("");
  const [translatedSentence, setTranslatedSentence] = useState("");
  const router = useRouter();

  useEffect(() => {
    setDetectedLanguage(router.query.detectedLanguage || "Korean");
    setOriginalSentence(router.query.originalSentence || "삼겹살");
    setTranslatedSentence(router.query.translatedSentence || "pork belly");
  }, [router.query]);

  return (
    <div className={styles.container}>
      <div className={styles.pinkRect}></div>
      <div className={styles.header}>Translation</div>
      <div className={styles.languages}>
        <div className={styles.label}>Detected Language:</div>
        <input
          className={styles.input}
          type="text"
          value={detectedLanguage}
          disabled
        />
        <div className={styles.label}>My Language:</div>
        <input className={styles.input} type="text" value="English" disabled />
      </div>
      <div className={styles.sentences}>
        <div className={styles.label}>Original Sentence:</div>
        <input
          className={styles.input}
          type="text"
          value={originalSentence}
          disabled
        />
        <div className={styles.label}>Translated Sentence:</div>
        <input
          className={styles.input}
          type="text"
          value={translatedSentence}
          disabled
        />
      </div>
    </div>
  );
}

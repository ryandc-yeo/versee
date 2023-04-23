import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Preview() {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState(null);
  const [translated, setTranslated] = useState([]);

  useEffect(() => {
    const { imageSrc } = router.query;
    if (imageSrc) {
      setImageSrc(decodeURIComponent(imageSrc));
    }
  }, [router]);

  const handleBack = () => {
    router.back();
  };

  const compVision = async () => {
    const resp = await axios
      .post("http://localhost:8000/vision", { value: 23, ans: "tom" })
      .then((res) => setTranslated(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Preview Page</h1>
      {imageSrc && (
        <Image src={imageSrc} alt="preview" width={350} height={700} />
      )}
      <button onClick={handleBack}>Back</button>
      <Link
        href={`/TranslationPage?detectedLanguage=Korean&originalSentence=삼겹살&translatedSentence=pork belly`}
      >
        <button onClick={compVision}>View Translation</button>
      </Link>
    </div>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Preview() {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const { imageSrc } = router.query;
    if (imageSrc) {
      setImageSrc(decodeURIComponent(imageSrc));
    }
  }, [router]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>Preview Page</h1>
      {imageSrc && <img src={imageSrc} />}
      <button onClick={handleBack}>Back</button>
      <Link href={`/TranslationPage?detectedLanguage=Korean&originalSentence=삼겹살&translatedSentence=pork belly`}>
          <button>View Translation</button>
        </Link>
    </div>
  );
}

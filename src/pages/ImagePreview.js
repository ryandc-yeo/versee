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
      <h1 style={{
        marginLeft: '5%',
        marginTop: '5%',
      }}>Preview Page</h1>
      <div style={{
        marginLeft: '7%',
        marginTop: '4%',
        marginBottom: '4%',
      }}>
        {imageSrc && <img src={imageSrc} />}
      </div>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        marginRight:'5%',
        marginLeft:'5%',
        marginBottom:'5%',
      }}>
        <div onClick={handleBack} style={{
          background:'#DFFF9B',
          borderRadius: '10px',
        }}>Back</div>
        <Link href={`/TranslationPage?detectedLanguage=Korean&originalSentence=삼겹살&translatedSentence=pork belly`}>
            <div style={{
              background:'#DFFF9B',
              borderRadius: '10px',
            }}>View Translation</div>
        </Link>
      </div>
    </div>
  );
}

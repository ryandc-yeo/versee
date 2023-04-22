import React from "react";
import styles from "../styles/Home.module.css";
import Logo from "../imgs/logo.svg";
import CameraButton from "../imgs/camera.svg";
import MainGraphic from "../imgs/main-graphic.svg";
import ScanText from "../imgs/scan-text.svg";
import Image from "next/image";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Image src={Logo} alt="versee title" />
      </div>
      <Image src={MainGraphic} alt="main graphic" />
      <div className={styles.text}>
        <Image
          src={ScanText}
          alt="Scan any foreign text and say hello to stress-free travels!"
        />
      </div>
      <div className={styles.camera}>
        <Image src={CameraButton} alt="camera button" />
      </div>
    </div>
  );
};

export default Main;

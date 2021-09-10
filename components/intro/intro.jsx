import styles from "./intro.module.css";
import HeroImage from "/public/hero-image.svg";
import Logo from "/public/logo.svg";
import Home from "/public/home.svg";
import Me from "/public/me.svg";
import Article from "/public/article.svg";
import Envelope from "/public/envelope.svg";
import Image from "next/image";

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <nav className={`${styles.nav} ${styles.chillBorder}`}>
            <span className={styles.logo}>
              <Image height={25} className={styles.svg} src={Logo} />
            </span>
            <div className={`${styles.hr} ${styles.logoHr}`} />
            <span>
              <Image height={25} className={styles.svg} src={Home} />
            </span>
            <div className={styles.hr} />
            <span>
              <Image height={25} className={styles.svg} src={Me} />
            </span>
            <div className={styles.hr} />
            <span>
              <Image height={25} className={styles.svg} src={Article} />
            </span>
            <div className={styles.hr} />
            <span>
              <Image height={25} className={styles.svg} src={Envelope} />
            </span>
          </nav>
          <div>
            <h2 className={styles.h2}>Hello, my name is</h2>
            <h1 className={styles.h1}>Daniel Montet</h1>
            <h3 className={styles.h3}>A fullstack developer.</h3>
          </div>
        </div>
        <div className={styles.svgBox}>
          <img className={styles.img} src={HeroImage.src} alt="" />
        </div>
      </div>
    </div>
  );
}

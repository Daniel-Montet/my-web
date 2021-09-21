import styles from "./intro.module.css";
import HeroImage from "/public/hero-image.svg";

export default function Intro() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <nav className={styles.nav}></nav>
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
    <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.textBox}>
        <nav className={styles.nav}></nav>
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
  </>
  );
}

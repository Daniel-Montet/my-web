import styles from "./intro.module.css";
import HeroImage from "/public/hero-image.svg";

export default function Intro() {
  console.log(HeroImage)
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <h3>Hello, my name is</h3>
          <h2>Daniel Montet</h2>
          <h3>A fullstack developer.</h3>
        </div>
        <div className={styles.svgBox}>
          <img className={styles.img} src={HeroImage.src} alt="" />
        </div>
      </div>
    </div>
  );
}
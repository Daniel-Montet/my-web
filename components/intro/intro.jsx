import styles from "./intro.module.css";
import HeroImage from "/public/hero-image.svg";

export default function Intro() {
  return (
    <section className="intro inner-section">
      <section className="col-1">
        <h4 className={styles.h2}>Hello, my name is</h4>
        <h1 className={styles.h1}>Daniel Montet</h1>
        <h3 className={styles.h3}>A fullstack developer.</h3>
      </section>
      <section className="col-2">
        <img src={HeroImage.src} alt="hero image" />
      </section>
    </section>
  );
}

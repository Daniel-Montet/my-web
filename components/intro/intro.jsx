import styles from "./intro.module.css";
import Image from 'next/image';
import PersonOnDeskBlob from "/public/hero-image.svg";

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <h3>Hello, my name is</h3>
          <h2>Daniel Montet</h2>
          <h3>A fullstack developer.</h3>
        </div>
        <div className={styles.svgBox}>
          <Image src={PersonOnDeskBlob} alt="A drawing of a person sitted on a desk with a computer."/>
        </div>
      </div>
    </div>
  );
}
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <div>
      <div className={styles.textBox}>
        <h3>Hello, my name is</h3>
        <h2>Daniel Montet</h2>
        <h3>A fullstack developer.</h3>
      </div>
      <div className={styles.svg}>svg</div>
    </div>
  );
}

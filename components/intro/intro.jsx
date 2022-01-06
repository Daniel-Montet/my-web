import HeroImage from "../svg/heroImage";
import styles from "./intro.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Intro({ handleFocus }) {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      handleFocus("intro");
    }
    return;
  }, [inView]);

  return (
    <section className="intro inner-section" id="intro">
      <section className="col-1">
        <h4 className={styles.h2}>Hello, my name is</h4>
        <h1 className={styles.h1} ref={ref}>
          Daniel Montet
        </h1>
        <h3 className={styles.h3}>A fullstack developer.</h3>
      </section>
      <section className="col-2">
        <HeroImage />
      </section>
    </section>
  );
}

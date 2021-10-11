import Image from "next/image";
import styles from "./nav.module.css";
import Article from "../svg/article";
import Arrow from "/public/left-arrow.svg";
import Link from "next/link";
import Person from "../svg/person";
import House from "../svg/house";
import Logo from "../svg/logo";

export function Nav() {
  let hex = "#C2CED7";
  let active = "red";

  const setHex = () => hex;
  const handleColorSwap = (e) => {
    return hex;
  };

  return (
    <nav className={`${styles.nav} ${styles.chillBorder}`}>
      <span className={styles.logo}>
        <Link href="#intro">
          <a>
            <Logo className={styles.svg} />
          </a>
        </Link>
      </span>
      <div className={`${styles.hr} ${styles.logoHr}`} />
      <span>
        <Link href="#intro">
          <a>
            <House className={styles.svg} hex={hex} />
          </a>
        </Link>
      </span>
      <div className={styles.hr} />
      <span>
        <Link href="#profile">
          <a>
            <Person className={styles.svg} hex={hex} />
          </a>
        </Link>
      </span>
      <div className={styles.hr} />
      <span>
        <Link href="#articles">
          <a>
            <Article className={styles.svg} hex={hex} />
          </a>
        </Link>
      </span>
      <div className={styles.hr} />
      {/* <span>
        <Image height={25} className={styles.svg} src={Envelope} />
      </span> */}
    </nav>
  );
}

export function OtherNav() {
  return (
    <div className="arrow-nav">
      <div>
        <img src={Arrow.src} />
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </div>
      <div>
        <img src={Arrow.src} />
        <Link href="/posts">
          <a className="nav-link">Posts</a>
        </Link>
      </div>
    </div>
  );
}

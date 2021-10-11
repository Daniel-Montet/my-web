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


export function HambugerNav() {
  return (
    <svg id="hambuger-nav" width="110" height="79" viewBox="0 0 110 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
      <rect id="Rectangle 136" width="110" height="79" rx="39.5" fill="#FE9D9D"/>
      <rect id="Rectangle 133" x="27" y="19" width="55" height="6" rx="3" fill="white"/>
      <rect id="Rectangle 134" x="27" y="38" width="55" height="6" rx="3" fill="white"/>
      <rect id="Rectangle 135" x="27" y="57" width="55" height="6" rx="3" fill="white"/>
      </g>
  </svg>
  )
}
import { useRouter } from 'next/router';
import styles from "./link.module.css";

function Link({ children, href, theme }) {
  const router = useRouter()
  const style = {
    color: router.asPath === href ? theme : "#C2CED7",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style} className={styles.a}>
      {children}
    </a>
  )
}

export default Link;
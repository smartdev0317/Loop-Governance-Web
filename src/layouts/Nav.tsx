// import { ReactComponent as Logo } from "../styles/images/Logo.svg"
import classNames from "classnames"
import AppHeader from "../components/AppHeader"
import styles from "./Nav.module.scss"

const Nav = () => {
  // return <AppHeader logo={<Logo height={24} />} />
  return <AppHeader logo={<div className={classNames(styles.container)}>
    <img alt="LOOP" src="https://loop.markets/token/logo2.png" height="24" />
    <span className={classNames(styles.name)}>LOOP</span>
  </div>} />
}

export default Nav

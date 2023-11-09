import styles from './header.module.css'
import logo from '../../img/LOGO.png'
export const Header = () => {


    return (
        <header>
            <div className={styles.cont}>
            <img src={logo} alt="logo" className={styles.logotip}/>
                <ul className={styles.ul_nav}>
                    <li className={styles.li_nav}><a href="#">Home</a></li>
                    <li className={styles.li_nav}><a href="#">Programm</a></li>
                    <li className={styles.li_nav}><a href="# ">Profile</a></li>
                </ul>
                </div>
        </header>
    )
}
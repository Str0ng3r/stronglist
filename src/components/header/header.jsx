import styles from './header.module.css'
import logo from '../../img/LOGO.png'
export const Header = () => {
    return (
        <header>
            <div className={styles.cont}>
            <img src={logo} alt="logo" className={styles.logotip}/>
                <ul className={styles.ul_nav}>
                    <li className={styles.li_nav}><a href="#1">Home</a></li>
                    <li className={styles.li_nav}><a href="#2">App</a></li>
                    <li className={styles.li_nav}><a href="#3 ">Profile</a></li>
                </ul>
                </div>
        </header>
    )
}
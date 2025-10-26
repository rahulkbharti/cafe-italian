import ActionButton from "../common/ActionButton";
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.mainMenu}>
                <ul className={styles.list}>
                    <li className={styles.litItem}>
                        <a href="#">Home</a>
                    </li>
                    <li className={styles.litItem}>
                        <a href="#">Menu</a>
                    </li>
                    <li className={styles.litItem}>
                        <a href="#">About</a>
                    </li>
                    <li className={styles.litItem}>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className={styles.logoSection}>
                {/* <a href="#"><img src="logo.png" alt="logo" /></a> */}
            </div>
            <ActionButton ActionText="Book Table" />
        </div>
    )
}
export default Header;
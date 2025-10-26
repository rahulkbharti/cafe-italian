import { useState } from 'react';
import ActionButton from "../common/ActionButton";
import styles from "./Header.module.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
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
                    <a href="#"><img src="./logo.png" alt="logo" className={styles.logoImg} /></a>
                </div>
                <div className={styles.bookButtonWrapper}>
                    <ActionButton ActionText="Book Table" />
                </div>
                <button
                    className={styles.hamburger}
                    onClick={toggleMobileMenu}
                    aria-label="Open navigation menu"
                >
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                </button>
            </div>
            <div
                className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
            >
                <button
                    className={styles.closeButton}
                    onClick={toggleMobileMenu}
                    aria-label="Close navigation menu"
                >
                    &times;
                </button>
                <ul className={styles.mobileList}>
                    <li><a href="#" onClick={toggleMobileMenu}>Home</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>Menu</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>About</a></li>
                    <li><a href="#" onClick={toggleMobileMenu}>Contact</a></li>
                </ul>
                <div className={styles.mobileBookButton}>
                    <ActionButton ActionText="Book Table" />
                </div>
            </div>
        </>
    );
}
export default Header;

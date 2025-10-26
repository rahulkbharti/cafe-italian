import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.logo}>
                    <img src="./logo.png" alt="logo" />
                </div>
                <nav className={styles.navLinks}>
                    <a href="/">Home</a>
                    <a href="/menu">Menu</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className={styles.socialIcons}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/insta.svg" alt="indta" /></a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/google.svg" alt="indta" /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/facebook.svg" alt="indta" /></a>
                </div>
                <hr className={styles.separator} />
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © 2024 Istanbul Restaurant Manchester. All Rights Reserved |
                        <a href="#" className={styles.poweredBy}> Powered By Foodo</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

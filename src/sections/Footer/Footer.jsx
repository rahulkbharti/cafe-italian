import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>

                {/* Logo */}
                <div className={styles.logo}>
                    {/* In a real app, this would be an <Image> or <img> tag */}
                    <img src="./logo.png" alt="logo" />
                </div>

                {/* Navigation Links */}
                <nav className={styles.navLinks}>
                    <a href="/">Home</a>
                    <a href="/menu">Menu</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>

                {/* Social Media Icons */}
                <div className={styles.socialIcons}>
                    {/* Using text placeholders for icons */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/insta.svg" alt="indta" /></a>
                    {/* <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/un.svg" alt="indta" /></a> */}
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/google.svg" alt="indta" /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="./SocialIcons/facebook.svg" alt="indta" /></a>
                </div>

                {/* Separator Line */}
                <hr className={styles.separator} />

                {/* Bottom Copyright Bar */}
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

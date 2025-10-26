import styles from "./TopNav.module.css";

const TopNav = () => {
    return (
        <div className={styles.TopNav}>
            <div className={styles.leftLinks}>
                <a href="#">
                    <div className={styles.link}>
                        <img src="./TopNav/location.svg" alt="location" />
                        <span className={styles.linkText}>2 Bury Old Road, Manchester, M8 9JN</span>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.link}>
                        <img src="./TopNav/clock.svg" alt="time" />
                        <span className={styles.linkText}>Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm</span>
                    </div>
                </a>
            </div>
            {/* FIX: This class was changed from leftLinks to rightLinks */}
            <div className={styles.rightLinks}>
                <a href="#">
                    <div className={styles.link}>
                        <img src="./TopNav/phone.svg" alt="phone" />
                        <span className={styles.linkText}>0161 795 5502</span>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.link}>
                        <img src="./TopNav/email.svg" alt="email" />
                        <span className={styles.linkText}>reservations@istanbulrestaurantmanchester.co.uk</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TopNav;

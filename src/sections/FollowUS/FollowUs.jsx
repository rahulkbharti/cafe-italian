import styles from "./Follow.module.css";
const FollowUs = () => {
    return (
        <div className="container">
            <div className={styles.followUs}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span>Gallery</span>
                        <h4>follow us </h4>
                    </div>
                    <div className={styles.insta}>
                        <img src="./insta.svg" /> <span>Check out our instagram</span>
                    </div>
                </div>
                <div className={styles.Gellery}>
                    <img src="./Gallery/image.png" />
                    <img src="./Gallery/image-1.png" />
                    <img src="./Gallery/image-2.png" />
                    <img src="./Gallery/image-3.png" />
                    <img src="./Gallery/image-4.png" />
                    <img src="./Gallery/image-5.png" />
                    <img src="./Gallery/image-6.png" />
                    <img src="./Gallery/image-7.png" />
                </div>
            </div>
        </div>
    )
}

export default FollowUs;
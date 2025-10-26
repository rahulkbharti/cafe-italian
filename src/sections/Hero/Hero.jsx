import ActionButton from "../common/ActionButton";
import Header from "../Header/Header";
import styles from "./Hero.module.css"
const Hero = () => {
    return (
        <div className={styles.hero}>
            {/* <video autoplay muted loop playsinline src="./background.mp4"></video> */}
            <img src="./background.png" alt="Background" />
            <div className={styles.videoOverlay}>
                <Header />
                <div className={styles.heroTextSectionOverlay}>
                    <div className={styles.heroSection}>
                        <h1>
                            Welcome To Cafe Italia
                        </h1>
                        <ActionButton ActionText="Book Table" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
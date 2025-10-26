import PageTitle from '../common/PageTitle';
import styles from './OurSpecial.module.css';
const OurSpecial = () => {
    return (
        <div className='container'>
            <div className={styles.ourSpecial}>
                <PageTitle subtitle={'our menu'} firstText={"Our"} secondText={"Specials"}></PageTitle>
                <div className={styles.wrapper}>
                    <div className={styles.normal}>
                        <img src="./food1.png" />
                        <div className={styles.normalOverlay}></div>
                    </div>
                    <div className={styles.featured}>
                        <img className={styles.featuredImage} src="./food1.png" />
                        <div className={styles.textBox}>
                            <h4>
                                Classic Ribeye Steak
                            </h4>
                        </div>
                        <div className={styles.actions}>
                            <img src="./previous.svg" alt="arrow" />
                            <img src="./next.svg" alt="arrow" />
                        </div>
                    </div>
                    <div className={styles.normal}>
                        <img src="./food1.png" />
                        <div className={styles.normalOverlay}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurSpecial;
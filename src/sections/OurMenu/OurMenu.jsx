import ActionButton from "../common/ActionButton";
import PageTitle from "../common/PageTitle";
import styles from "./OurMenu.module.css"

const OurMenu = () => {
    return (
        <div className="container">
            <div className={styles.ourMenu} id="oursection">
                <PageTitle subtitle={"Explore menu"} firstText={"Our Menu"} />
                <div className={styles.crousal}>
                    <div className={styles.crousalItem}>
                        <img src="./OurMenu/cousal1.png" alt="Dish 1" />
                        <div className={styles.textBox}>
                            <h4>
                                Italian dishes
                            </h4>
                            <span>
                                View Menu
                            </span>
                        </div>
                    </div>
                    <div className={styles.crousalItem}>
                        <img src="./OurMenu/cousal2.png" alt="Dish 2" />
                        {/* You can add a textBox here if needed */}
                    </div>
                    <div className={styles.crousalItem}>
                        <img src="./OurMenu/cousal3.png" alt="Dish 3" />
                        {/* You can add a textBox here if needed */}
                    </div>
                </div>
                {/* FIX: Changed 'class' to 'className' */}
                <div className={styles.viewMore}>
                    <ActionButton ActionText={"View Full Menu"} />
                </div>
            </div>

        </div>
    )
}
export default OurMenu;
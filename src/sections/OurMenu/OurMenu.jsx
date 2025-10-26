import ActionButton from "../common/ActionButton";
import PageTitle from "../common/PageTitle";
import styles from "./OurMenu.module.css";

const menuItems = [
    {
        imgSrc: "./OurMenu/cousal1.png",
        alt: "Dish 1",
        title: "Italian Dishes",
    },
    {
        imgSrc: "./OurMenu/cousal2.png",
        alt: "Dish 2",
        title: "Asian Cuisine",
    },
    {
        imgSrc: "./OurMenu/cousal3.png",
        alt: "Dish 3",
        title: "Modern Desserts",
    },
];

const OurMenu = () => {
    return (
        <div className="container">
            <div className={styles.ourMenu} id="oursection">
                <PageTitle subtitle={"Explore menu"} firstText={"Our"} secondText={"Menu"} />
                <div className={styles.crousal}>
                    {menuItems.map((item, index) => (
                        <div className={styles.crousalItem} key={index}>
                            <img src={item.imgSrc} alt={item.alt} />
                            <div className={styles.textBox}>
                                <h4>{item.title}</h4>
                                <span>View Menu</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.viewMore}>
                    <ActionButton ActionText={"View Full Menu"} />
                </div>
            </div>
        </div>
    );
};

export default OurMenu;

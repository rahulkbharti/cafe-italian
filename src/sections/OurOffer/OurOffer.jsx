import PageTitle from "../common/PageTitle";
import styles from "./OurOffer.module.css";

const OurOffer = () => {
    const offerItems = [
        {
            imgSrc: "./OurOffer/offer1.png",
            title: "Food",
            description: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our chefs."
        },
        {
            imgSrc: "./OurOffer/offer2.png",
            title: "Drink",
            description: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our chefs."
        },
        {
            imgSrc: "./OurOffer/offer3.png",
            title: "Atmosphere",
            description: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our chefs."
        }
    ];
    return (
        <div className="container">
            <div className={styles.ourOffer} id="ouroffer">
                <PageTitle subtitle={'we offer'} firstText={"Unforgettable Dining"} secondText={"Experience"}></PageTitle>
                <div className={styles.offerItems}>
                    {offerItems.map((item, index) => (
                        <div className={styles.offerItem} key={index}>
                            <img src={item.imgSrc} alt={`Offer ${index + 1}`} width={"100%"} />
                            <div className={styles.offerText}>
                                <h4 className={styles.offerTitle}>{item.title}</h4>
                                <span className={styles.offerDescription}>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default OurOffer;
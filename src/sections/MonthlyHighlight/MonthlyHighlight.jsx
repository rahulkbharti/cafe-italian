import PageTitle from "../common/PageTitle";
import styles from "./MonthlyHighlight.module.css";

const highlightItems = [
    {
        imgSrc: "./MonthlyHighlights/highlight1.png",
        title: "Adana Kebab",
        cost: "120"
    },
    {
        imgSrc: "./MonthlyHighlights/highlight2.png",
        title: "Meze Platter",
        cost: "150"
    },
    {
        imgSrc: "./MonthlyHighlights/highlight3.png",
        title: "Baklava",
        cost: "100"
    },
    {
        imgSrc: "./MonthlyHighlights/highlight4.png",
        title: " Kebab Platter",
        cost: "80"
    }
];

const MonthlyHighlight = () => {
    return (
        <div className="container">
            <div className={styles.monthlyHighlight} id="monthlyhighlight">
                <PageTitle subtitle={'Our top picks this month'} firstText={"Monthly"} secondText={"Highlights"}></PageTitle>
                <div className={styles.highlightItems}>
                    {highlightItems.map((item, index) => (
                        <div className={styles.highlightItem} key={index}>
                            <img src={item.imgSrc} alt={`Highlight ${index + 1}`} />
                            <h4>{item.title}</h4>
                            <span>€ {item.cost}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MonthlyHighlight;
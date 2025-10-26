import styles from "./PageTitle.module.css";

const PageTitle = ({ subtitle, firstText, secondText }) => {
    return (
        <div className={styles.pageTitle}>
            <span>
                {subtitle}
            </span>
            <h1>
                <span> {firstText}</span>
                <span>{secondText}</span>
            </h1>
        </div>
    )
}
export default PageTitle;
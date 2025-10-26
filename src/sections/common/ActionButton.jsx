import styles from "./ActionButton.module.css"
const ActionButton = ({ ActionText = "not Provided" }) => {
    return (
        <div className={styles.ActionButton}>
            <span>{ActionText}</span>
            <img src="./right-arrow.svg" alt="right-arrow" />
        </div>
    )
}

export default ActionButton;
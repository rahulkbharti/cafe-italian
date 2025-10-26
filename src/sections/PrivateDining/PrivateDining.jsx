import ActionButton from "../common/ActionButton";
import styles from "./PrivateDining.module.css";

const PrivateDining = () => {
    return (
        <div className={styles.privateDining}>
            <div className="container">
                <div className={styles.textBox}>
                    <div className={styles.header}>
                        <span>Booking</span>
                        <h4>Private & Group Dining </h4>
                    </div>
                    <div className={styles.body}>
                        <p>At Bavette, we specialize in creating memorable dining experiences, whether you're seeking an intimate gathering or a grand celebration. Our private and group dining options are designed to meet your unique needs with personalized service, exceptional food, and a welcoming atmosphere.</p>
                    </div>
                    {/* Added ActionText prop for the button */}
                    <ActionButton ActionText={"Book Your Event"} />
                </div>
            </div>
        </div>
    )
}
export default PrivateDining;

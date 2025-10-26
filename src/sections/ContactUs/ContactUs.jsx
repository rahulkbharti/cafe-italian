import PageTitle from "../common/PageTitle";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
    return (

        <div className={styles.ContactUs}>
            <div className="container">
                <PageTitle subtitle={"connect with us"} firstText={"Contact"} secondText={"Us"} />
                <div className={styles.boxs}>
                    <div className={styles.box}>
                        <span className={styles.boxTitle}>Booking request</span>
                        {/* We combine the base content style with the special number style */}
                        <span className={`${styles.boxContent} ${styles.number}`}>
                            0161 795 5502
                        </span>
                    </div>
                    <div className={styles.box}>
                        <span className={styles.boxTitle}>Location</span>
                        {/* This now uses the correct content style */}
                        <span className={styles.boxContent}>
                            2 Bury Old Road, Manchester, M8 9JN
                        </span>
                    </div>
                    <div className={styles.box}>
                        <span className={styles.boxTitle}>Opening Hours</span>
                        {/* This also uses the correct content style */}
                        <span className={styles.boxContent}>
                            Monday to Saturday 11:00am - 11:30pm
                            <br /> {/* Added a line break for better formatting */}
                            Sunday 12:00pm - 11:00pm
                        </span>
                    </div>

                </div>
            </div>
        </div >

    )
}
export default ContactUs;
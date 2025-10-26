import { useRef } from 'react';
import PageTitle from "../common/PageTitle";
import styles from "./OurGuest.module.css";

const reviews = [
    {
        name: "Anna Mathew",
        time: "one day ago",
        rating: 5,
        reviewText: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our anniversary and it was simply amazing!",
        avatar: "./review1.svg"
    },
    {
        name: "Gerrin Tom",
        time: "one day ago",
        rating: 5,
        reviewText: "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
        avatar: "./review2.svg"
    },
    {
        name: "Mery Elza",
        time: "one day ago",
        rating: 5,
        reviewText: "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
        avatar: "./review3.svg"
    },
];

const OurGuest = () => {
    const reviewsRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (reviewsRef.current) {
            const reviewWidth = reviewsRef.current.children[0].offsetWidth;
            reviewsRef.current.scrollBy({
                left: (reviewWidth + 24) * scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    const goToPrevious = () => scroll(-1);
    const goToNext = () => scroll(1);

    return (
        <div className="container">
            <div className={styles.ourGeust}>
                <PageTitle subtitle={'guest reviews'} firstText={"Hear Our"} secondText={"Guests"}></PageTitle>
                <div className={styles.reviews} ref={reviewsRef}>
                    {reviews.map((item, index) => (
                        <div className={styles.review} key={index}>
                            <div className={styles.header}>
                                <img src={item.avatar} alt={item.name} />
                                <div className={styles.info}>
                                    <h3>{item.name}</h3>
                                    <span>{item.time}</span>
                                </div>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.rating}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <img src="./star.svg" alt="star" key={i} />
                                    ))}
                                </div>
                                <div className={styles.reviewText}>
                                    {item.reviewText}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.actions}>
                    <div className={styles.box}>
                        <button className={styles.button} onClick={goToPrevious}>
                            <img src="./previous.svg" alt="Previous" />
                        </button>
                        <button className={styles.button} onClick={goToNext}>
                            <img src="./next.svg" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurGuest;

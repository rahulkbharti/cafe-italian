import { useState } from 'react';
import PageTitle from '../common/PageTitle';
import styles from './OurSpecial.module.css';

const specialItems = [
    {
        imgSrc: "./food1.png",
        title: "Classic Ribeye Steak",
    },
    {
        imgSrc: "./food2.png",
        title: "Spicy Salmon Roll",
    },
    {
        imgSrc: "./food3.png",
        title: "Vegan Truffle Pasta",
    },
    {
        imgSrc: "./food2.png",
        title: "Chocolate Lava Cake",
    },
];

const OurSpecial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? specialItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === specialItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getClassName = (index) => {
        const totalItems = specialItems.length;
        if (index === currentIndex) {
            return `${styles.carouselItem} ${styles.featured}`;
        }
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        if (index === prevIndex) {
            return `${styles.carouselItem} ${styles.normal} ${styles.prev}`;
        }
        const nextIndex = (currentIndex + 1) % totalItems;
        if (index === nextIndex) {
            return `${styles.carouselItem} ${styles.normal} ${styles.next}`;
        }
        return `${styles.carouselItem} ${styles.hidden}`;
    };

    return (
        <div className='container'>
            <div className={styles.ourSpecial}>
                <PageTitle subtitle={'our menu'} firstText={"Our"} secondText={"Specials"} />
                <div className={styles.wrapper}>
                    {specialItems.map((item, index) => (
                        <div
                            className={getClassName(index)}
                            key={index}
                            onClick={() => {
                                if (index !== currentIndex) {
                                    setCurrentIndex(index);
                                }
                            }}
                        >
                            <img src={item.imgSrc} alt={item.title} />
                            {index !== currentIndex && (
                                <div className={styles.normalOverlay}></div>
                            )}
                            {index === currentIndex && (
                                <>
                                    <div className={styles.textBox}>
                                        <h4>{item.title}</h4>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    <div className={styles.actions}>
                        <img
                            src="./previous.svg"
                            alt="Previous"
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                        />
                        <img
                            src="./next.svg"
                            alt="Next"
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurSpecial;

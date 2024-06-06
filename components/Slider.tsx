import React, { useState } from 'react';
import styles from '../styles/Slider.module.css';

const images = [
'/images/barco1.jpg',
'/images/barco2.jpg',
'/images/barco3.jpg'
];

const ImageSlider: React.FC = () => {
const [current, setCurrent] = useState(0);

const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};

const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

return (
    <div className={styles.slider}>
    <button onClick={prevSlide} className={styles.button}>Prev</button>
    <div className={styles.imageContainer}>
        <img src={images[current]} alt="Barco" className={styles.image} />
    </div>
    <button onClick={nextSlide} className={styles.button}>Next</button>
    </div>
);
};

export default ImageSlider;

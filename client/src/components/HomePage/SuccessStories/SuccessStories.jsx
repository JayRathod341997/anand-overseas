import { useState, useEffect } from "react";
import styles from "./SuccessStories.module.css";
import ShubhamGajre from "./data/Shubham Gajre.png";
import MaharshParmar from "./data/Maharsh Parmar.png";
import VedantParekh from "./data/Vedant_Parekh.png";
import MihirPatel from "./data/Mihir_Patel.png";
import DeepMadhvani from "./data/Deep_Madhvani.png";
import SuccessStoriesHeader from "./SuccessStoryHeader/SuccessStoriesHeader";

const SuccessStories = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images array (assuming you have 10 images)
  const images = [
    { src: ShubhamGajre, alt: "Shubham Gajre", name: "Shubham Gajre" },
    { src: MaharshParmar, alt: "Maharsh Parmar", name: "Maharsh Parmar" },
    { src: VedantParekh, alt: "Vedant Parekh", name: "Vedant Parekh" },
    { src: MihirPatel, alt: "Mihir Patel", name: "Mihir Patel" },
    { src: DeepMadhvani, alt: "Deep Madhvani", name: "Deep Madhvani" },
    // Add more images here (7 more)
  ];

  const totalImages = images.length;

  // Function to handle moving to the next image
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Get the 3 images that should be displayed in the current window
  const getVisibleImages = () => {
    const firstIndex = currentImageIndex;
    const secondIndex = (currentImageIndex + 1) % totalImages;
    const thirdIndex = (currentImageIndex + 2) % totalImages;

    return [images[firstIndex], images[secondIndex], images[thirdIndex]];
  };

  const visibleImages = getVisibleImages();

  return (
    <>
      <div className={styles.successStoryPage}>
        <SuccessStoriesHeader />
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {visibleImages.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.carouselImage}
                />
                <div className={styles.overlay}>
                  <h2>{image.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;

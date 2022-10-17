import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

const CardCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftExitAnimation, setLeftExitAnimation] = useState(true);
  const [length] = useState(props.images.length);

  /**
   * Update caraousel image
   * To next image
   */
  const next = useCallback(() => {
    !leftExitAnimation && setLeftExitAnimation(() => true);

    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(() => 0);
    }
  }, [currentIndex, length, leftExitAnimation]);

  /**
   * Update caraousel image
   * To previous image
   */
  const prev = () => {
    leftExitAnimation && setLeftExitAnimation(() => false);
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(() => length - 1);
    }

    const resetLeftExitAnimation = setTimeout(() => {
      setLeftExitAnimation(() => true);
    }, 1000);
    return () => clearTimeout(resetLeftExitAnimation);
  };

  useEffect(() => {
    // Update displayed image in 5000ms
    const cycleImage = setTimeout(() => next(), 5000);
    return () => clearTimeout(cycleImage);
  }, [props.images, next]);

  return (
    <div
      id='imageCarousel'
      className='carousel slide relative p-2'
      data-bs-ride='carousel'
    >
      {/* Carousel image */}
      <div className='carousel-inner relative w-full flex overflow-hidden'>
        <AnimatePresence>
          <motion.div
            key={props.images[currentIndex]}
            initial={{ x: leftExitAnimation ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, display: 'block' }}
            exit={{
              x: leftExitAnimation ? -300 : 300,
              opacity: 0,
              display: 'none',
            }}
            className='carousel-item active min-w-full'
          >
            {props.images.map((image, index) => {
              return (
                <img
                  key={index}
                  alt={'project ' + currentIndex}
                  src={image}
                  style={{
                    display: index === currentIndex ? 'block' : 'none',
                  }}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* previous button */}
      <button
        onClick={prev}
        type='button'
        className='flex absolute top-0 left-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
        data-carousel-prev
      >
        <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <ion-icon size='large' name='arrow-back-outline'></ion-icon>
          <span className='hidden'>Previous</span>
        </span>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        type='button'
        className='flex absolute top-0 right-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
        data-carousel-next
      >
        <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <ion-icon size='large' name='arrow-forward-outline'></ion-icon>
          <span className='hidden'>Next</span>
        </span>
      </button>
    </div>
  );
};

export default CardCarousel;

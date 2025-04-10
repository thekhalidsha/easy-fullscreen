import React, { useEffect, useState } from 'react';
import styles from './Slides.module.css';

const EasyFullScreen = ({
  children,
  SliderWidth = '100vw',
  SliderHeight = '100vh',
  SlideHeight = '100vh',
  SlideWidth = '100%',
  direction = 'vertical',
  showDots = true,
  dotColor = 'gray',
  activeDotColor = 'black',
  navPlacement = 'bottom',
  className = '',
  ...rest
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const isHorizontal = direction === 'horizontal';
  const wrapperClass = isHorizontal ? styles.x_wrapper : styles.y_wrapper;
  const scrollOptionKey = isHorizontal ? 'inline' : 'block';
  const scrollOptionValue = 'start';

  const scrollToSlide = (index) => {
    const slide = document.querySelectorAll(`.${wrapperClass} > *`)[index];
    if (slide) {
      slide.scrollIntoView({
        behavior: 'smooth',
        [scrollOptionKey]: scrollOptionValue,
      });
      setActiveSlide(index);
    }
  };

  const findActiveSlide = () => {
    const slides = Array.from(document.querySelectorAll(`.${wrapperClass} > *`));
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((item, index) => {
      const position = isHorizontal
        ? item.getBoundingClientRect().left
        : item.getBoundingClientRect().top;
      const distance = Math.abs(position);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlide((prev) => (prev !== closestIndex ? closestIndex : prev));
  };

  useEffect(() => {
    const wrapper = document.querySelector(`.${wrapperClass}`);
    if (!wrapper) return;

    const onScroll = () => {
      window.requestAnimationFrame(findActiveSlide);
    };

    wrapper.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      wrapper.removeEventListener('scroll', onScroll);
    };
  }, [wrapperClass]);

  const navDotsCount = children.length;

  // Dynamic style for nav dots container based on navPlacement (top, bottom, left, right)
  const navDotStyle = {};

  if (navPlacement === 'left' || navPlacement === 'right') {
    navDotStyle.top = `calc(${SliderHeight} / 2)`;
    navDotStyle.transform = 'translateY(-50%)';
    if (navPlacement === 'left') navDotStyle.left = '20px';
    else navDotStyle.right = '20px';
  } else {
    navDotStyle.left = `calc(${SliderWidth} / 2)`;
    navDotStyle.transform = 'translateX(-50%)';
    if (navPlacement === 'top') navDotStyle.top = '20px';
    else navDotStyle.bottom = '20px';
  }

  return (
    <section
      className={`${styles.container}`}
      {...rest}
    >
      <div
        className={`${wrapperClass} ${className}`}
        style={{ height: SliderHeight, width: SliderWidth }}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            style: {
              height: SlideHeight,
              width: SlideWidth,
              ...(child.props.style || {}),
            },
          })
        )}
      </div>

      {showDots && (
        <div className={`${styles['nav-dots']} ${styles[`dots-${navPlacement}`]}`} style={navDotStyle}>
          {[...Array(navDotsCount)].map((_, index) => (
            <div
              key={index}
              className={`${styles['nav-dot']} ${activeSlide === index ? styles.active : ''}`}
              onClick={() => scrollToSlide(index)}
              style={{
                backgroundColor:
                  activeSlide === index ? activeDotColor : dotColor,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EasyFullScreen;

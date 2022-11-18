import React, { useState, useEffect, useRef } from 'react'

const ScreenContent = ({ content, index, setCurrentImage }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const setItemVisible = (e) => {
      if (e[0]?.isIntersecting) {
        setIsVisible(!isVisible);
        setCurrentImage(index);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(setItemVisible, options);
    const currentReference = ref.current;
    if (currentReference) {
      observer.observe(currentReference);
    }

    return () => {
      if (currentReference) {
        observer.unobserve(currentReference);
      }
    };
  }, []);

  return (
    <div className={`screen-text ${isVisible ? "scale-in-bottom" : ""}`} ref={ref}>
      <div className="screen-title">{content.title}</div>
      <div className="right-scroll-content-wrapper only-mobile">
        <div className="mobile-contents">
          <div className="mobile-horizontal-scroll-content">
            <img
              src={content.imageLink}
              className="mobile-screen-image slide-in-right"
              key={content.imageLink}
              alt="cred-images"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{content.description}</div>
    </div>
  )
}

export default ScreenContent
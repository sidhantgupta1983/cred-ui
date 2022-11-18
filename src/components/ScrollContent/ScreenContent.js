import React, {useState, useEffect, useRef} from 'react'

const ScreenContent = ({content, index, setCurrentImage}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{content.description}</div>
    </div>
  )
}

export default ScreenContent
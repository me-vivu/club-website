import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="button"
      className={showButton ? 'show' : ''}
      onClick={scrollToTop}
      style={{ display: showButton ? 'block' : 'none' }}
    >
    
    </button>
  );
}

export default ScrollToTopButton;

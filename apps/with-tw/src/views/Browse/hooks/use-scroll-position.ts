import React from "react";

export const useScrollPosition = () => {
  const [scrollState, setScrollState] = React.useState({
    scrollY: 0,
    scrollX: 0,
  });

  const fetchScrollState = () => {
    setScrollState(prev => ({
      ...prev,
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    }));
  };

  React.useEffect(() => {
    window.addEventListener('scroll', fetchScrollState);
    return () => {
      window.removeEventListener('scroll', fetchScrollState);
    };
  }, []);

  return {
    ...scrollState,
    isAtTop: scrollState.scrollY === 0
  };
};
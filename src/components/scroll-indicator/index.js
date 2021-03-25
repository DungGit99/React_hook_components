import React from 'react';
import { useWindowScroll } from "react-use";

const ScrollIndicator = () => {
  const { x, y } = useWindowScroll()

  return (
    <div className="scroll-container">
      <div className="indicator"></div>
    </div>
  )
};

export default ScrollIndicator;
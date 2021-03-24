import React from 'react'
import { useWindowScroll } from "react-use"

const ScrollToTop = () => {

  const { y: pageYOffset } = useWindowScroll();

  const scrollToTop = () => {

  }
  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <i className="icon fas fa-chevron-up"></i>
    </div>
  )
}

export default ScrollToTop
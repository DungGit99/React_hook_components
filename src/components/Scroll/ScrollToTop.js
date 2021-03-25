import React, { useState, useEffect } from 'react'
import { useWindowScroll } from "react-use"

const ScrollToTop = () => {

  const { y: pageYOffset } = useWindowScroll(); // pageYOffset : trả pixel mà document đã được cuộc theo phương thẳng đứng
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true)
    } else {
      setVisiblity(false)
    }
  }, [pageYOffset])

  const scrollToTop = () => (
    // scrollTo() : scroll document đến tọa độ được chỉ định
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  )
  if (!visible) {
    return false;
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
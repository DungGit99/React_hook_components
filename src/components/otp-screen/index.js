import React, { useState } from "react";

const OTPBox = () => {
  const [otp, setOTP] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOTP([...otp.map((d, idx) => (idx === index ? element.value : d))])
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }
  const clearOtp = () => {
    setOTP([...otp.map(v => "")])
  }

  return (
    <div className="row">
      <div className="col text-center">
        <p>Enter the OTP</p>
        {otp.map((data, index) => (
          <input
            className="otp-field"
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onFocus={e => e.target.select()}
          />
        ))}
        <p>OTP Entered -{otp.join("")}</p>
        <p>
          <button className="btn btn-secondary mr-2" onClick={clearOtp}>Clear </button>
          <button className="btn btn-primary" onClick={e => alert(otp.join(""))}>Verify OTP</button>
        </p>
      </div>
    </div>
  )
};

export default OTPBox;
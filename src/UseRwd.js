import { useState, useEffect } from "react";

const UseRwd = () => {
  const [mobile, setMobile] = useState("mobile");

  const handleRwd = () => {
    if (window.innerWidth > 768) {
      setMobile("PC");
    } else if (window.innerWidth > 430) {
      setMobile("tablet");
    } else {
      setMobile("mobile");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleRwd);
    handleRwd();

    return () => {
      window.removeEventListener("resize", handleRwd);
    };
  }, []);
  return mobile;
};
export default UseRwd;

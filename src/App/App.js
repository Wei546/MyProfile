import React from "react";
import "../styles/style.css";
import welcomePic from "../self/welcome.png";
import Navbar from "../Navbar";

export const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* className調整圖片大小 */}
      <img
        src={welcomePic}
        alt="pic"
        className="app-img"
        style={{ marginBottom: "3rem" }}
      />
    </div>
  );
};

export default App;

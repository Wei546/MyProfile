import React from "react";
import AboutList from "./AboutList";

const About = () => {
  return (
    <div>
      {/* 自我介紹的component */}
      <AboutList
        image_appList="pic1.jpg"
        title_appList="Lorem, ipsum."
        content_appList1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis quibusdam quod aspernatur perspiciatis nemo quia dicta quas, libero sed voluptates, ea animi autem cupiditate ad natus enim sit quam?"
        content_appList2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis quibusdam quod aspernatur perspiciatis nemo quia dicta quas, libero sed voluptates, ea animi autem cupiditate ad natus enim sit quam?"
      />
    </div>
  );
};

export default About;

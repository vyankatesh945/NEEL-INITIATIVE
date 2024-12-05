import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="work">
      <div className="workin">
        <div className="workhead">
          <h1>Our Work</h1>
          <p>We have worked on several projects, here are our best works.</p>
          <button>See More</button>
        </div>
        <div className="workcon">
          <div className="w">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            possimus ea ut officiis mollitia. Saepe, hic minus. Consequuntur
            quibusdam earum nulla magni hic quidem neque odio, voluptatem,
            dolorem sit commodi.</p>
          </div>
          <div className="w">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            deleniti officiis vel quo, velit aperiam eos sunt sit deserunt
            suscipit fugit modi voluptas doloremque quasi a placeat eius
            necessitatibus hic.</p>
          </div>
          <div className="w">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            exercitationem soluta enim tenetur molestiae sapiente impedit amet
            quam. Error nam officiis modi eos vel doloribus, officia doloremque
            atque repellat eius.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

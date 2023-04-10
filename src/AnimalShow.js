import './AnimalShow.css';
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
// we need state to track # of times heart is clicked
function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  // starting with of 10 + 10*0  10 + 10*1 ...
  return (
    <div className="animal-show" onClick={handleClick}>
      <div>
        <img className="animal" alt="animal" src={svgMap[type]} />
        <img
          alt="heart"
          src={heart}
          style={{ width: 10 + 10 * clicks + "px" }}
        />
      </div>
    </div>
  );
}

export default AnimalShow;

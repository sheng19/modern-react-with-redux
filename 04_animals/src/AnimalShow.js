import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg";
import bird from "./svg/bird.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";
import "./AnimalShow.css";

const svgMap = {
  dog,
  cat,
  bird,
};

function AnimalShow({ type }) {
  const [clicks, setClick] = useState(0);
  const clickHandle = () => {
    setClick(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={clickHandle}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
  );
}

export default AnimalShow;

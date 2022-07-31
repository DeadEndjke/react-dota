import a from "./HeroItem.module.css";
import { NavLink } from "react-router-dom";

const HeroItem = (props) => {
  return (
    <NavLink to={`/heroes/${props.id}`}>
      <div className={a.heroprev}>
        <img src={props.img} alt="" className={a.scale} />
        <div className={a.block}>
          <img src={props.attr} alt="" />
          <span className={a.name}>{props.name}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default HeroItem;

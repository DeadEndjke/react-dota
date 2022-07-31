import Attack from "./Attack/Attack";
import Defense from "./Defense/Defense";
import a from "./HeroStats.module.css";
import Mobility from "./Mobility/Mobility";

const HeroStats = (props) => {
  return (
    <div className={a.stats}>
      <div className={a.atack}>
        <Attack
          min_start_attack={props.min_start_attack}
          max_start_attack={props.max_start_attack}
          start_attack_speed={props.start_attack_speed}
          attack_range={props.attack_range}
          projectile_speed={props.projectile_speed}
        />
      </div>
      <div className={a.defense}>
        {" "}
        <Defense
          start_armor={props.start_armor}
          start_magick_resist={props.start_magick_resist}
        />
      </div>
      <div className={a.mobility}>
        {" "}
        <Mobility
          start_speed={props.start_speed}
          turn_speed={props.turn_speed}
          day_vision={props.day_vision}
          night_vision={props.night_vision}
        />{" "}
      </div>
    </div>
  );
};

export default HeroStats;

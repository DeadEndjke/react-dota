import a from "./Mobility.module.css";

const Mobility = (props) => {
  return (
    <div className={a.mainmobility}>
      {" "}
      MOBILITY
      <div className={a.speed}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
          alt=""
        />
        <span className={a.letter}>{props.start_speed}</span>
      </div>
      <div className={a.turnrate}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png"
          alt=""
        />
        <span className={a.letter}>{props.turn_speed}</span>
      </div>
      <div className={a.vision}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
          alt=""
        />
        <span className={a.letter}>
          {props.day_vision}/{props.night_vision}
        </span>
      </div>
    </div>
  );
};

export default Mobility;

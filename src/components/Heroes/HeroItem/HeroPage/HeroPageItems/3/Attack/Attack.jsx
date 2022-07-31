import a from "./Attack.module.css";

const Attack = (props) => {
  return (
    <div className={a.mainattack}>
      ATTACK
      <div className={a.attack}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
          alt=""
        />
        <span className={a.letter}>
          {props.min_start_attack}-{props.max_start_attack}
        </span>
      </div>
      <div className={a.attackspeed}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
          alt=""
        />
        <span className={a.letter}>{props.start_attack_speed}</span>
      </div>
      <div className={a.attackrange}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
          alt=""
        />
        <span className={a.letter}>{props.attack_range}</span>
      </div>
      <div className={a.projectivespeed}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png"
          alt=""
        />
        <span className={a.letter}>{props.projectile_speed}</span>
      </div>
    </div>
  );
};

export default Attack;

import a from "./PhotoAndAtr.module.css";

const PhotoAndAtr = (props) => {
  return (
    <div className={a.photoandatr}>
      <div>
        <img src={props.photo} alt="" />
      </div>
      <div className={a.tablestats}>
        <div className={a.imgandstat}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            alt=""
          />
          <span className={a.stat}>
            {props.str}
            <span className={a.increase}>+{props.istr}</span>
          </span>
        </div>
        <div className={a.imgandstat}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            alt=""
          />
          <span className={a.stat}>
            {props.agl}
            <span className={a.increase}>+{props.iagl}</span>
          </span>
        </div>
        <div className={a.imgandstat}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
            alt=""
          />
          <span className={a.stat}>
            {props.int}
            <span className={a.increase}>+{props.iint}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoAndAtr;

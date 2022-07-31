import a from "./Defense.module.css";

const Defence = (props) => {
  return (
    <div className={a.maindefense}>
      DEFENSE
      <div className={a.armor}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
          alt=""
        />
        <span className={a.letter}>{props.start_armor}</span>
      </div>
      <div className={a.magickresist}>
        <img
          className={a.staticon}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
          alt=""
        />
        <span className={a.letter}>{props.start_magick_resist}%</span>
      </div>
    </div>
  );
};

export default Defence;

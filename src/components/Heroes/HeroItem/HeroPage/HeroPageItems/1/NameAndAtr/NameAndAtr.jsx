import a from "./NameAndAtr.module.css";

const NameAndAtr = (props) => {
  return (
    <div className={a.nameandatr}>
      <div className={a.heroname}>{props.name}</div>

      <div className={a.heroattr}>
        <img className={a.atrimage} src={props.attr_image} alt="" />
        <span className={a.atribute}>{props.attr}</span>
      </div>
    </div>
  );
};

export default NameAndAtr;

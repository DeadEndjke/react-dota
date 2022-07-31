import a from "./AttackType.module.css";

const AttackType = (props) => {
  return (
    <div className={a.attacktype}>
      <span>attack type</span>
      <div className={a.attacktypeimgandname}>
        <img src={props.attack_type_image} alt="" />
        <span className={a.attacktypename}>{props.attack_type}</span>
      </div>
    </div>
  );
};

export default AttackType;

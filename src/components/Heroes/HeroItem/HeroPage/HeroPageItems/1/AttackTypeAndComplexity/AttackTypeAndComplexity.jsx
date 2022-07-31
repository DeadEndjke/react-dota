import AttackType from "./AttackType/AttackType";
import a from "./AttackTypeAndComplexity.module.css";
import Complexity from "./Complexity/Complexity";

const AttackTypeAndComplexity = (props) => {
  return (
    <div className={a.attacktypeandcomplexity}>
      <AttackType
        attack_type={props.attack_type}
        attack_type_image={props.attack_type_image}
      />
      <Complexity complexity={props.complexity} />
    </div>
  );
};

export default AttackTypeAndComplexity;

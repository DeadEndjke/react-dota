import a from "./Complexity.module.css";
import complexityimg1 from "../../../../../../../../assets/complexity/complexity1.png";
import complexityimg2 from "../../../../../../../../assets/complexity/complexity2.png";
import complexityimg3 from "../../../../../../../../assets/complexity/complexity3.png";

const Complexity = (props) => {
  return (
    <div className={a.complexity}>
      <span className={a.comp}>complexity</span>
      <div className={a.compimg}>
        {(() => {
          switch (props.complexity) {
            case 1:
              return <img src={complexityimg1} />;
            case 2:
              return <img src={complexityimg2} />;
            case 3:
              return <img src={complexityimg3} />;
          }
        })()}
      </div>

      {/* <img src={complexityimg} alt="" /> */}
    </div>
  );
};

export default Complexity;

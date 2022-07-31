import a from "./Abilities.module.css";
import { useState } from "react";

const Abilities = (props) => {
  const [ability, setAbility] = useState(1);
  function handleClick(value) {
    setAbility(value);
    console.log(value);
  }
  return (
    <div className="maincontent">
      <div className={a.abilityvideo}>
        {(() => {
          switch (ability) {
            case 1:
              return (
                <div>
                  <div className={a.abilityprev}>
                    <video src={props.firstability} autoPlay loop mutted />
                    <img
                      className={a.abilitiimage}
                      src={props.firstability_description}
                      alt=""
                    />
                  </div>
                  <div className={a.abilities}>
                    <div
                      onClick={(e) => handleClick(1)}
                      className={a.firstbutton}
                    >
                      <img
                        className={a.scaled}
                        src={props.firstability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(2)}
                      className={a.secondbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.secondability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(3)}
                      className={a.thirdbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.thirdability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(4)}
                      className={a.fourthbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.fourthability_icon}
                        alt=""
                      />
                    </div>
                  </div>{" "}
                </div>
              );
            case 2:
              return (
                <div>
                  <div className={a.abilityprev}>
                    <video src={props.secondability} autoPlay loop mutted />
                    <img
                      className={a.abilitiimage}
                      src={props.secondability_description}
                      alt=""
                    />
                  </div>
                  <div className={a.abilities}>
                    <div
                      onClick={(e) => handleClick(1)}
                      className={a.firstbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.firstability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(2)}
                      className={a.secondbutton}
                    >
                      <img
                        className={a.scaled}
                        src={props.secondability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(3)}
                      className={a.thirdbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.thirdability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(4)}
                      className={a.fourthbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.fourthability_icon}
                        alt=""
                      />
                    </div>
                  </div>{" "}
                </div>
              );
            case 3:
              return (
                <div>
                  <div className={a.abilityprev}>
                    <video src={props.thirdability} autoPlay loop mutted />
                    <img
                      className={a.abilitiimage}
                      src={props.thirdability_description}
                      alt=""
                    />
                  </div>
                  <div className={a.abilities}>
                    <div
                      onClick={(e) => handleClick(1)}
                      className={a.firstbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.firstability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(2)}
                      className={a.secondbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.secondability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(3)}
                      className={a.thirdbutton}
                    >
                      <img
                        className={a.scaled}
                        src={props.thirdability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(4)}
                      className={a.fourthbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.fourthability_icon}
                        alt=""
                      />
                    </div>
                  </div>{" "}
                </div>
              );
            case 4:
              return (
                <div>
                  <div className={a.abilityprev}>
                    <video src={props.fourthability} autoPlay loop mutted />
                    <img
                      className={a.abilitiimage}
                      src={props.fourthability_description}
                      alt=""
                    />
                  </div>
                  <div className={a.abilities}>
                    <div
                      onClick={(e) => handleClick(1)}
                      className={a.firstbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.firstability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(2)}
                      className={a.secondbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.secondability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(3)}
                      className={a.thirdbutton}
                    >
                      <img
                        className={a.scale}
                        src={props.thirdability_icon}
                        alt=""
                      />
                    </div>
                    <div
                      onClick={(e) => handleClick(4)}
                      className={a.fourthbutton}
                    >
                      <img
                        className={a.scaled}
                        src={props.fourthability_icon}
                        alt=""
                      />
                    </div>
                  </div>{" "}
                </div>
              );
          }
        })()}

        {/* <div className={a.abilities}>
          <div onClick={(e) => handleClick(1)} className={a.firstbutton}>
            <img className={a.scale} src={props.firstability_icon} alt="" />
          </div>
          <div onClick={(e) => handleClick(2)} className={a.secondbutton}>
            <img className={a.scale} src={props.secondability_icon} alt="" />
          </div>
          <div onClick={(e) => handleClick(3)} className={a.thirdbutton}>
            <img className={a.scale} src={props.thirdability_icon} alt="" />
          </div>
          <div onClick={(e) => handleClick(4)} className={a.fourthbutton}>
            <img className={a.scale} src={props.fourthability_icon} alt="" />
          </div>
        </div>{" "} */}
      </div>
    </div>
  );
};

export default Abilities;

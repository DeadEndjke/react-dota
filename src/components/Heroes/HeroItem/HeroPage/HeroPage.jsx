import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../../Nav/Nav";
import a from "./HeroPage.module.css";
import AttackTypeAndComplexity from "./HeroPageItems/1/AttackTypeAndComplexity/AttackTypeAndComplexity";
import NameAndAtr from "./HeroPageItems/1/NameAndAtr/NameAndAtr";
import PhotoAndAtr from "./HeroPageItems/1/PhotoAndAtr/PhotoAndAtr";
import Roles from "./HeroPageItems/2/Roles";
import HeroStats from "./HeroPageItems/3/HeroStats";
import Abilities from "./HeroPageItems/Abilities/Abilities";

const HeroPage = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let {
    name,
    img,
    attr,
    start_str,
    start_agl,
    start_int,
    increase_str,
    increase_agl,
    increase_int,
    attr_image,
    attack_type,
    attack_type_image,
    complexity,
    roles,
    bg_image,
    min_start_attack,
    max_start_attack,
    start_attack_speed,
    attack_range,
    projectile_speed,
    start_armor,
    start_magick_resist,
    start_speed,
    turn_speed,
    day_vision,
    night_vision,
    firstability,
    firstability_icon,
    secondability,
    secondability_icon,
    thirdability,
    thirdability_icon,
    fourthability,
    fourthability_icon,
    firstability_description,
    secondability_description,
    thirdability_description,
    fourthability_description,
  } = fetchedData;

  let api = `https://62a45baf259aba8e10e6edb5.mockapi.io/dota/heroes/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className={a.heropage}>
      <div className={a.bgimage}>
        <img src={bg_image} />
      </div>
      <Nav />
      <div className={a.maincontent}>
        <div className={a.heropageitem}>
          <NameAndAtr name={name} attr={attr} attr_image={attr_image} />
        </div>

        <div className={a.photoatrattacktipecomplexityandstats}>
          <div className={a.photoandart}>
            <PhotoAndAtr
              photo={img}
              str={start_str}
              agl={start_agl}
              int={start_int}
              istr={increase_str}
              iagl={increase_agl}
              iint={increase_int}
            />
          </div>

          <div className={a.attacktypeandcomplexity}>
            <AttackTypeAndComplexity
              attack_type={attack_type}
              attack_type_image={attack_type_image}
              complexity={complexity}
            />
          </div>

          <div className={a.roles}>
            <Roles roles={roles} />
          </div>

          <div className={a.stats}>
            {/* <h2>HERO BASE STATS</h2> */}
            <HeroStats
              min_start_attack={min_start_attack}
              max_start_attack={max_start_attack}
              start_attack_speed={start_attack_speed}
              attack_range={attack_range}
              projectile_speed={projectile_speed}
              start_armor={start_armor}
              start_magick_resist={start_magick_resist}
              start_speed={start_speed}
              turn_speed={turn_speed}
              day_vision={day_vision}
              night_vision={night_vision}
            />
          </div>
        </div>

        <div className={a.abilities}>
          <Abilities
            firstability={firstability}
            firstability_icon={firstability_icon}
            firstability_description={firstability_description}
            secondability={secondability}
            secondability_icon={secondability_icon}
            secondability_description={secondability_description}
            thirdability={thirdability}
            thirdability_icon={thirdability_icon}
            thirdability_description={thirdability_description}
            fourthability={fourthability}
            fourthability_icon={fourthability_icon}
            fourthability_description={fourthability_description}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

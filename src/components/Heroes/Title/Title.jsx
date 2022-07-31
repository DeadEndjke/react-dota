import a from "./Title.module.css";

const Title = () => {
  return (
    <div className={a.title}>
      <h1>CHOOSE YOUR HERO</h1>
      <h2>
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </h2>
      <h2>
        The player controls a hero with unique abilities until the end of the
        match, get gold and experience for killing creeps and heroes,
        participating in battles. Gold is needed to buy items, consumables,
        buyback. Experience - to increase the level of heroes and learn new
        abilities and talents that enhance abilities or the hero himself. Each
        of the heroes has a different balance of attributes (strength, agility,
        intelligence) and unique skills designed to fulfill a role in the game:
        carry, midlaner, offlaner, support, full support. Ideally, each of the
        five players takes on one role and responsibilities - which determines
        the choice of a hero with relevant skills. In a good situation, game
        understanding and skill playing Dota compensates for the wrong or
        one-sided choice of heroes. Well-coordinated team play in Dota 2
        compensates for a strong and greedy pick, aimed at long-term farming.
      </h2>
    </div>
  );
};

export default Title;

import a from "./Roles.module.css";

const Roles = (props) => {
  return (
    <div className={a.roles}>
      Roles
      <div className={a.role}>{props.roles}</div>
    </div>
  );
};

export default Roles;

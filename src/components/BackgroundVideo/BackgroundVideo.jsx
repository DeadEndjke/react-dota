import videoBg from "../../assets/intro.mp4";
import a from "./BackgroundVideo.module.css";
import { NavLink } from "react-router-dom";

const BackgroundVideo = () => {
  return (
    <div className="backgroundVideo">
      <video src={videoBg} autoPlay loop mutted />

      <div className="startContent">
        <p>
          in this project you can see all dota 2{" "}
          <NavLink to="/heroes">heroes</NavLink>, their stats, abilities and
          recommended items
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo;

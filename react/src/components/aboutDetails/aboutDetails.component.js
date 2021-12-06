import classesAboutDetails from "./aboutDetails.module.css";
import classes from "../../commonStyle/toolDetailsCommon.module.css"
const TOOL_TITLE = "About this software";

export const AboutDetails = () => {
  return (
    <div className={classes.toolDetailsWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div>
        This software is being developped by Galib Hassan. 
      </div>
    </div>
  );
};

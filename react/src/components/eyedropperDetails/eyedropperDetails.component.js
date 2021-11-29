import classesEyedropper from "./eyedropperDetails.module.css";
import classes from "../../commonStyle/toolDetailsCommon.module.css"
const TOOL_TITLE = "Eyedropper";

export const EyedropperDetails = () => {
  return (
    <div className={classes.toolDetailsWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
    </div>
  );
};

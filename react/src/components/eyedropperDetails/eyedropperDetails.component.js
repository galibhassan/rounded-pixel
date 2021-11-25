import classes from "./eyedropperDetails.module.css";

const TOOL_TITLE = "Eyedropper";

export const EyedropperDetails = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
    </div>
  );
};

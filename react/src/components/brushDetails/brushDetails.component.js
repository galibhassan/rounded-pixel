import classes from "./brushDetails.module.css";

const TOOL_TITLE = "Brush";

export const BrushDetail = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div className={classes.colorWrapper}>
        <div>Color</div>
        <input type="color" />
      </div>
    </div>
  );
};

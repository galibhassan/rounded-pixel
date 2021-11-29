import classes from "../../commonStyle/toolDetailsCommon.module.css";
import classesBrush from "./brushDetails.module.css";

const TOOL_TITLE = "Brush";

export const BrushDetail = () => {
  return (
    <>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div className={classes.toolDetailsWrapper}>
        <div className={classes.toolChunkContainer}>
          <div>Color</div>
          <input type="color" />
        </div>
      </div>
    </>
  );
};

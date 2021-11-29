import classes from "../../commonStyle/toolDetailsCommon.module.css";
import classesBrush from "./brushDetails.module.css";

import {ColorPicker} from "../colorPicker/colorPicker.component"

const TOOL_TITLE = "Brush";
const INITIAL_BRUSH_COLORPICKER_COLOR = "#4EB4E2"
export const BrushDetail = () => {
  return (
    <>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div className={classes.toolDetailsWrapper}>
        <div className={classes.toolChunkContainer}>
          <ColorPicker defaultColor={INITIAL_BRUSH_COLORPICKER_COLOR}/>
        </div>
      </div>
    </>
  );
};

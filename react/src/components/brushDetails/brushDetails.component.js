import classes from "../../commonStyle/toolDetailsCommon.module.css";
import classesBrush from "./brushDetails.module.css";

import { ColorPicker } from "../colorPicker/colorPicker.component";

import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

const TOOL_TITLE = "Brush";
const INITIAL_BRUSH_COLORPICKER_COLOR = "#4EB4E2";
export const BrushDetail = () => {
  const { brushColor } = useSelector((state) => state.drawingReducer);
  console.log(brushColor);

  return (
    <>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div className={classes.toolDetailsWrapper}>
        <div className={classes.toolChunkContainer}>
          <ColorPicker
            defaultColor={brushColor}
            actsOn="brushColor"
            action={drawingActions.setBrushColor}
          />
        </div>
      </div>
    </>
  );
};

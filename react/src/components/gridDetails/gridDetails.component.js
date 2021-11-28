import classes from "./gridDetails.module.css";

import { RoundednessSlider } from "../roundednessSlider/roundednessSlider.component";
// import { useSelector, useDispatch } from "react-redux";
// import { drawingActions } from "../../store/drawingSlice";
import { PixelSize } from "../pixelSize/pixelSize.component";

const TOOL_TITLE = "Grid";

export const GridDetails = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <PixelSize/>

      <button className={classes.buttonStandard}>Regenerate Grid</button>

      <div className={classes.toolChunkContainer}>
        <RoundednessSlider />
      </div>
    </div>
  );
};

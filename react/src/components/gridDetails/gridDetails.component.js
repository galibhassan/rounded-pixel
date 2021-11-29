import classesGridDetails from "./gridDetails.module.css";
import classes from "../../commonStyle/toolDetailsCommon.module.css"

import { RoundednessSlider } from "../roundednessSlider/roundednessSlider.component";
import { PixelSize } from "../pixelSize/pixelSize.component";
import { PixelMarginController} from "../pixelMarginController/pixelMarginController.component"

const TOOL_TITLE = "Grid";

export const GridDetails = () => {
  return (
    <div className={classes.toolDetailsWrapper }>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <div className={classes.toolChunkContainer}>

      <PixelSize />
      </div>

      <div className={classes.toolChunkContainer}>
        <RoundednessSlider />
      </div>

      <div className={classes.toolChunkContainer}>
        <PixelMarginController/>
      </div>
    </div>
  );
};

import classes from "./gridDetails.module.css";

import { RoundednessSlider } from "../roundednessSlider/roundednessSlider.component";


const TOOL_TITLE = "Grid";

export const GridDetails = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <div className={classes.toolChunkContainer}>
        <div>Pixel Width</div>
        <input
          className={classes.textInput + " " + classes.textInput_short}
          type="number"
        />
      </div>
      <div className={classes.toolChunkContainer}>
        <div>Pixel Height</div>
        <input
          className={classes.textInput + " " + classes.textInput_short}
          type="number"
        />
      </div>

      <button className={classes.buttonStandard}>Regenerate Grid</button>

      <div className={classes.toolChunkContainer}>
        <RoundednessSlider/>
      </div>
    </div>
  );
};

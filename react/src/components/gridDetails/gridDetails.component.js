import classes from "./gridDetails.module.css";

import { RoundednessSlider } from "../roundednessSlider/roundednessSlider.component";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

const TOOL_TITLE = "Grid";

export const GridDetails = () => {
  const { pixelSize } = useSelector((state) => state.drawingReducer);
  const dispatch = useDispatch();

  console.log(pixelSize);

  const handlePixelWidthChange = (e) => {
    const newWidth = parseInt(e.currentTarget.value);
    dispatch(drawingActions.setPixelWidth({ width: newWidth }));
  };
  const handlePixelHeightChange = (e) => {
    const newHeight = parseInt(e.currentTarget.value);
    dispatch(drawingActions.setPixelHeight({ height: newHeight }));
  };

  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <div className={classes.toolChunkContainer}>
        <div>Pixel Width</div>
        <input
          className={classes.textInput + " " + classes.textInput_short}
          type="number"
          value={pixelSize.width}
          onChange={handlePixelWidthChange}
        />
      </div>
      <div className={classes.toolChunkContainer}>
        <div>Pixel Height</div>
        <input
          className={classes.textInput + " " + classes.textInput_short}
          type="number"
          value={pixelSize.height}
          onChange={handlePixelHeightChange}
        />
      </div>

      <button className={classes.buttonStandard}>Regenerate Grid</button>

      <div className={classes.toolChunkContainer}>
        <RoundednessSlider />
      </div>
    </div>
  );
};

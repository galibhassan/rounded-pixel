import classes from "./pixelSize.module.css";

import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

export const PixelSize = () => {
  const { pixelSize } = useSelector((state) => state.drawingReducer);
  const dispatch = useDispatch();

  const handlePixelWidthChange = (e) => {
    const newWidth = parseInt(e.currentTarget.value);
    dispatch(drawingActions.setPixelWidth({ width: newWidth }));
  };
  const handlePixelHeightChange = (e) => {
    const newHeight = parseInt(e.currentTarget.value);
    dispatch(drawingActions.setPixelHeight({ height: newHeight }));
  };
  return (
    <>
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
    </>
  );
};

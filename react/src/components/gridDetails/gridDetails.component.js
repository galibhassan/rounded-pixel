import classes from "./gridDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

const TOOL_TITLE = "Grid";

export const GridDetails = () => {
  const { roundedness } = useSelector((state) => state.drawingReducer);
  const dispatch = useDispatch();

  const handleRoundednessChange = (e) => {
    dispatch(
      drawingActions.setPixelRoundedness({
        roundedness: parseInt(e.currentTarget.value),
      })
    );
  };
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
        <div>Pixel Roundedness</div>
        <input
          type="range"
          className={classes.slider}
          onChange={handleRoundednessChange}
          min={0}
          max={20}
        />
        <div>{roundedness}</div>
      </div>
    </div>
  );
};

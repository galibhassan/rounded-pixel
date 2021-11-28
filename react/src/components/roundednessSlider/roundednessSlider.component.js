import classes from "./roundednessSlider.module.css";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";


export const RoundednessSlider = () => {

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
    <>
      <div>Pixel Roundedness</div>
      <input
        type="range"
        className={classes.slider}
        onChange={handleRoundednessChange}
        value={roundedness}
        min={0}
        max={20}
      />
      <div>{roundedness}</div>
    </>
  );
};

import classes from "./pixelMarginController.module.css";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

export const PixelMarginController = () => {
  const { pixelMargin } = useSelector((state) => state.drawingReducer);
  const dispatch = useDispatch();

  const handlePixelMarginChange = (e) => {
    const newPixelMargin = parseInt(e.currentTarget.value);
    dispatch(drawingActions.setPixelMargin({ pixelMargin: newPixelMargin }));
  };

  return (
    <div className={classes.toolChunkContainer}>
      <div>Pixel Margin</div>
      <input
        type="number"
        className={classes.textInput_short}
        onChange={handlePixelMarginChange}
        min={0}
        value={pixelMargin}
      />
    </div>
  );
};

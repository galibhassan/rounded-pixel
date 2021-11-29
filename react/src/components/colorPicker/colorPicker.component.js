import { createRef, useState } from "react";
import classes from "./colorPicker.module.css";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

export const ColorPicker = ({defaultColor, actsOn, action}) => {
  const dispatch = useDispatch()
  const { roundedness } = useSelector((state) => state.drawingReducer);
  const colorPickerRealRef = createRef();
  const [colorPickerColor, setColorPickerColor] = useState(defaultColor || "red");

  const handleClickOnFake = (e) => {
    e.preventDefault();
    colorPickerRealRef.current.click();
  };

  const handleColorChange = (e) => {
    setColorPickerColor(colorPickerRealRef.current.value);
    const payload = {
      [`${actsOn}`]: colorPickerRealRef.current.value
    }

    dispatch(action(payload))
  };

  return (
    <div className={classes.colorpickerGrandWrapper}>
      <div>Color</div>
      <div className={classes.colorPickerContainer}>
        <input
          className={classes.colorPickerReal}
          ref={colorPickerRealRef}
          type="color"
          onChange={handleColorChange}
        />
        <div
          className={classes.colorPickerFake}
          onClick={handleClickOnFake}
          style={{
            backgroundColor: colorPickerColor,
            borderRadius: roundedness
          }}
        ></div>
      </div>
    </div>
  );
};

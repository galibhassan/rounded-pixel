import { createRef, useState } from "react";
import classes from "./colorPicker.module.css";
import { useSelector } from "react-redux";

export const ColorPicker = ({defaultColor}) => {
  const { roundedness } = useSelector((state) => state.drawingReducer);
  const colorPickerRealRef = createRef();
  const [colorPickerColor, setColorPickerColor] = useState(defaultColor || "red");

  const handleClickOnFake = (e) => {
    e.preventDefault();
    colorPickerRealRef.current.click();
  };

  const handleColorChange = (e) => {
    setColorPickerColor(colorPickerRealRef.current.value);
  };

  return (
    <div>
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

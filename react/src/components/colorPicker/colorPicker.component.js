import { createRef, useState } from "react";
import classes from "./colorPicker.module.css";

export const ColorPicker = () => {
  const colorPickerRealRef = createRef();
  const [colorPickerColor, setColorPickerColor] = useState("red");

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
          }}
        ></div>
      </div>
    </div>
  );
};

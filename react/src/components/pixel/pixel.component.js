import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawingActions } from "../../store/drawingSlice";

export const Pixel = (props) => {
  console.log("Pixel called");
  const {
    // globalStore,
    board,
    pxid,
    width,
    height,
    backgroundColor,
    borderRadius,
  } = props;

  const { brushColor, isDrawable } = useSelector(
    (state) => state.drawingReducer
  );
  const { activeTool } = useSelector((state) => state.toolReducer);
  const [pixelColor, setPixelColor] = useState("blue");
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isPointerEnter, setIsPointerEnter] = useState(false);
  const [eyedropperColor, setEyedropperColor] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDrawable) {
      if (isPointerDown) {
        if (activeTool === "brush") {
          setPixelColor(brushColor);
        } else if (activeTool === "eraser") {
          setPixelColor("transparent");
        } else if (activeTool === "eyedropper") {
          dispatch(
            drawingActions.setBrushColor({ brushColor: eyedropperColor })
          );
        }
      }
    }
  }, [isDrawable]);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsPointerDown(true);
    setEyedropperColor(e.currentTarget.style.backgroundColor);
    dispatch(drawingActions.setIsDrawable({ isDrawable: true }));
  };

  const handlePointerEnter = (e) => {
    e.preventDefault();
    if (isDrawable) {
      if (activeTool === "brush") {
        setPixelColor(brushColor);
      } else if (activeTool === "eraser") {
        setPixelColor("transparent");
      } else if (activeTool === "eyedropper") {
        dispatch(drawingActions.setBrushColor({ brushColor: eyedropperColor }));
      }
    }
  };

  const handlePointerUp = (e) => {
    e.preventDefault();
    dispatch(drawingActions.setIsDrawable({ isDrawable: false }));
  };

  const handlePointerLeave = (e) => {
    e.preventDefault();
    setIsPointerDown(false);
  };

  return (
    <div
      onPointerEnter={handlePointerEnter}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      style={{
        width,
        height,
        backgroundColor: pixelColor,
      }}
    ></div>
  );
};

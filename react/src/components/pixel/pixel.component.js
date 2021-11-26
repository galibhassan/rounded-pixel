import { useSelector } from "react-redux";

export const Pixel = (props) => {
  const {
    // globalStore,
    board,
    pxid,
    width,
    height,
    backgroundColor,
    borderRadius,
  } = props;

  const { brushColor } = useSelector((state) => state.drawingReducer);
  const { activeTool } = useSelector((state) => state.toolReducer);
  console.log(activeTool);
  console.log(brushColor);

  const handlePointerDown = (e) => {
    e.preventDefault();
    if (activeTool === "brush") {
      console.log("drawable");
    } else {
      console.log("not drawable");
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      style={{
        width,
        height,
        backgroundColor,
      }}
    ></div>
  );
};

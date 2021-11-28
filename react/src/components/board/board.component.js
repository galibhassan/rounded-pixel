import classes from "./board.module.css";
import { useSelector } from "react-redux";
import { Pixel } from "../pixel/pixel.component";


export const Board = ({ parentWidth, parentHeight, cellMargin }) => {
  const { pixelSize } = useSelector((state) => state.drawingReducer);

  const getBoardDimension = () => {
    const w = parentWidth;
    const h = parentHeight;
    const nRows = parseInt(w / (pixelSize.width + 2 * cellMargin));
    const nCols = parseInt(h / (pixelSize.height + 2 * cellMargin));
    return { nRows, nCols };
  };

  const getPixelRow = () => {
    const emptyPixelRow = [...Array(getBoardDimension().nRows).keys()];
    console.log(emptyPixelRow);
    return (
      <div
        className={classes.pixelRow}
        style={{ display: "flex", flexDirection: "row" }}
      >
        {emptyPixelRow.map((item, index) => {
          return (
            <Pixel
              key={index}
              width={pixelSize.width + "px"}
              height={pixelSize.height + "px"}
              backgroundColor="lightgray"
              cellMargin={cellMargin}
            />
          );
        })}
      </div>
    );
  };

  const generateGrid = () => {
    const emptyPixelCol = [...Array(getBoardDimension().nCols).keys()];
    console.log(emptyPixelCol);
    return (
      <div>
        {emptyPixelCol.map((item, index) => {
          return <div key={index}>{getPixelRow()}</div>;
        })}
      </div>
    );
  };

  return (
    <div>
      {/* {getBoardDimension().nRows} {getBoardDimension().nCols} */}

      {generateGrid()}
    </div>
  );
};

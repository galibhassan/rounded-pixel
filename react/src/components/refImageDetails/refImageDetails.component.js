import classes from "./refImageDetails.module.css";
import { BsArrowUpCircleFill as UpArrowsIcon } from "react-icons/bs";
import { BsArrowDownCircleFill as DownArrowsIcon } from "react-icons/bs";
import { BsArrowLeftCircleFill as LeftArrowsIcon } from "react-icons/bs";
import { BsArrowRightCircleFill as RightArrowsIcon } from "react-icons/bs";

const TOOL_TITLE = "Reference Image";
const ARROW_COLOR = "#ceced6"
const ARROW_SIZE = 20

export const RefImageDetails = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div className={classes.urlLoadContainer + " " + classes.toolChunkContainer}>
        <input type="text" placeholder="Image URL..." />
        <button className={classes.buttonStandard}> Load</button>
      </div>
      <div className={classes.opacityContainer + " " + classes.toolChunkContainer}>
        <div>Opacity</div>
        <input type="range" className={classes.slider}/>
        <div className={classes.toolQuantifier}>60%</div>
      </div>
      <div className={classes.zoomContainer + " " + classes.toolChunkContainer}>
        <div>Zoom</div>
        <input type="range" className={classes.slider}/>
        <div  className={classes.toolQuantifier}>1.23x</div>
      </div>
      <div className={classes.moveContainer + " " + classes.toolChunkContainer}>
        <div>Move</div>
        <div className={classes.moveArrowsContainer}>
          <div className={classes.move_row1}>
          <UpArrowsIcon size={ARROW_SIZE} color={ARROW_COLOR}/>
          </div>
          <div  className={classes.move_row2}>
            <LeftArrowsIcon size={ARROW_SIZE} color={ARROW_COLOR}/>
            <RightArrowsIcon size={ARROW_SIZE} color={ARROW_COLOR}/>
          </div>
          <div className={classes.move_row3}>
          <DownArrowsIcon size={ARROW_SIZE} color={ARROW_COLOR}/>
          </div>
        </div>
      </div>
    </div>
  );
};

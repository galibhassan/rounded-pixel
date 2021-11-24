import classes from "./gridDetails.module.css";

const TOOL_TITLE = "Grid";

export const GridDetails = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      
      <div>
        <div>Pixel Width</div>
        <input type="number"/>
      </div>
      <div>
        <div>Pixel Height</div>
        <input type="number"/>
      </div>
      
      <button>Regenerate Grid</button>


      <div>
        <div>Pixel Roundedness</div>
        <input type="number"/>
      </div>
      

    </div>
  );
};

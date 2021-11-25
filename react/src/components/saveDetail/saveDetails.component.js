import classes from "./saveDetails.module.css";

const TOOL_TITLE = "Save Image";

export const SaveDetails = () => {
  return (
    <div className={classes.toolWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <div className={classes.toolChunkContainer}>
        <input className={classes.textInput} type="text" placeholder="File name.." />
      </div>
      <form className={classes.toolChunkContainer}>
        <input type="radio" name="png"/>
        <label>PNG</label>
        <input type="radio" name="json"/>
        <label>JSON</label>

      </form>
      <button className={classes.buttonStandard}> Load</button>
    </div>
  );
};

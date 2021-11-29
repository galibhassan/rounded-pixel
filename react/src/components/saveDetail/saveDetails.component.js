import classes from "../../commonStyle/toolDetailsCommon.module.css";

const TOOL_TITLE = "Save Image";

export const SaveDetails = () => {
  return (
    <div className={classes.toolDetailsWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <div className={classes.toolChunkContainer}>
        <input
          className={classes.textInput}
          type="text"
          placeholder="File name.."
        />
      </div>
      <form className={classes.toolChunkContainer}>
        <div className={classes.toolChunkSub}>
          <input type="radio" name="png" />
          <label>PNG</label>
        </div>
        <div className={classes.toolChunkSub}>
          <input type="radio" name="json" />
          <label>JSON</label>
        </div>
      </form>
      <button className={classes.buttonStandard}> Save</button>
    </div>
  );
};

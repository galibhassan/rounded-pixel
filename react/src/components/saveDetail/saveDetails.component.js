import classes from "../../commonStyle/toolDetailsCommon.module.css";
import html2canvas from "html2canvas";
import { useState } from "react";

const TOOL_TITLE = "Save Image";

export const SaveDetails = () => {

  const [filename, setFilename] = useState("your_rounded_pixel_art_" + (new Date()))

  //temporary code
  const canvas = document.querySelector("#mainCanvas");
  const handleClick = (e) => {
    html2canvas(canvas, { backgroundColor: null })
      .then((canvasOut) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = canvasOut.toDataURL();
        downloadLink.download = filename;
        console.log(downloadLink.download)
        downloadLink.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFileNameInput = (e) =>{
    setFilename(e.currentTarget.value)
  }

  return (
    <div className={classes.toolDetailsWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>

      <div className={classes.toolChunkContainer}>
        <input
          className={classes.textInput}
          type="text"
          placeholder="File name.."
          onInput={handleFileNameInput}
        />
      </div>
      <form className={classes.toolChunkContainer}>
        <div className={classes.toolChunkSub}>
          <input type="radio" name="png" />
          <label>PNG</label>
        </div>
        <div className={classes.toolChunkSub}>
          <input type="radio" name="json" disabled />
          <label>JSON</label>
        </div>
      </form>
      <button className={classes.buttonStandard} onClick={handleClick}>
        {" "}
        Save
      </button>
    </div>
  );
};

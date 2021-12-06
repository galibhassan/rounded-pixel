import classesAboutDetails from "./aboutDetails.module.css";
import classes from "../../commonStyle/toolDetailsCommon.module.css";
const TOOL_TITLE = "About";

export const AboutDetails = () => {
  return (
    <div className={classes.toolDetailsWrapper}>
      <div className={classes.toolTitle}>{TOOL_TITLE}</div>
      <div className={classesAboutDetails.aboutDetailText}>
        Thanks for dropping by! The front-end of this software is currently
        being developped in{" "}
        <span className={classesAboutDetails.boldText}>React.js</span>. I am
        using <span className={classesAboutDetails.boldText}>Redux</span> as the
        state management tool. A previous non-react (and not good-looking)
        version developped in plain JavaScript can be found{" "}
        <a href="https://galibhassan.github.io/rounded-pixel">here</a>. Stay
        tuned for updates!
        <br />- Galib Hassan,
        <div className={classesAboutDetails.xSmallText}>
          {new Date().toString()}
        </div>
      </div>
    </div>
  );
};

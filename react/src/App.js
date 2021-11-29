import classes from "./App.module.css";
import { Logo } from "./components/logo/logo.component";
import { ToolDetails } from "./components/toolDetails/toolDetails.component";
import { Board } from "./components/board/board.component";
import { ToolBar } from "./components/toolbar/toolbar.component";
import {ToolButton} from "./components/toolButton/toolButton.component"

function App() {
  return (
    <div className={classes.appComponent}>
      <div className={classes.appContainer}>
        <div className={classes.appRow_1}>
          <div className={classes.logoContainer}>
            <Logo />
          </div>
          <div className={classes.toolDetailContainer}>
            <ToolDetails />
          </div>
          <div className={classes.menuContainer}></div>
        </div>
        <div className={classes.appRow_2}>
          <div className={classes.toolBarContainer}>
            <ToolBar>
              <ToolButton toolName="brush"/>
              <ToolButton toolName="eraser"/>
              <ToolButton toolName="grid"/>
              <ToolButton toolName="eyedropper"/>
              <ToolButton toolName="refImage"/>
              <ToolButton toolName="save"/>
            </ToolBar>
          </div>
          <div className={classes.boardContainer}>
            <Board parentWidth={700} parentHeight={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

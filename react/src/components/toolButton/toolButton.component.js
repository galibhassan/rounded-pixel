import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { toolActions } from "../../store/toolSlice";

import classes from "./toolButton.module.css";
import {
  BsFillBrushFill as BrushIcon,
  BsFillEraserFill as EraserIcon,
  BsGrid3X3 as GridIcon,
  BsImageFill as RefImageIcon,
  BsEyedropper as EyeDropperIcon,
  BsQuestionOctagonFill as QuestionMarkIcon,
} from "react-icons/bs";
import { FaSave as SaveIcon } from "react-icons/fa";

const DEFAULT_TOOL_ICON_COLOR = "#898989";
const HOVERED_ICON_COLOR = "orange";
const CLICKED_ICON_COLOR = "#9670D3";

const INITIAL_TOOL_CONFIG = {
  size: 25,
  color: DEFAULT_TOOL_ICON_COLOR,
  selected: false,
};

export const ToolButton = ({ toolIconColor, toolName }) => {
  const [toolConfig, setToolConfig] = useState(INITIAL_TOOL_CONFIG);
  const {activeTool} = useSelector(state=>state.toolReducer);
  
  const dispatch = useDispatch()

  const renderIcon = () => {
    switch (toolName) {
      case "brush":
        return <BrushIcon {...toolConfig} />;
      case "eraser":
        return <EraserIcon {...toolConfig} />;
      case "grid":
        return <GridIcon {...toolConfig} />;
      case "refImage":
        return <RefImageIcon {...toolConfig} />;
      case "eyedropper":
        return <EyeDropperIcon {...toolConfig} />;
      case "save":
        return <SaveIcon {...toolConfig} />;
      default:
        return <QuestionMarkIcon {...toolConfig} />;
    }
  };

  const handlePointerEnter = (e) => {
    !toolConfig.selected &&
      setToolConfig({
        ...toolConfig,
        color: HOVERED_ICON_COLOR,
      });
  };
  const handlePointerLeave = (e) => {
    !toolConfig.selected &&
      setToolConfig({
        ...toolConfig,
        color: DEFAULT_TOOL_ICON_COLOR,
      });
  };
  const handleClick = (e) => {
    setToolConfig({
      ...toolConfig,
      color: CLICKED_ICON_COLOR,
      selected: true,
    });

    dispatch(toolActions.selectTool({toolName}))
  };

  return (
    <button
      className={classes.toolButton}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {renderIcon()}
    </button>
  );
};

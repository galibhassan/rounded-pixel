import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toolActions } from "../../store/toolSlice";
import Tooltip from "@mui/material/Tooltip";

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

// hotkeys
const HOT_KEY_BRUSH = "b";
const HOT_KEY_EYEDROPPER = "Alt";
const HOT_KEY_ERASER = "e";
const HOT_KEY_SAVE = "s";

const INITIAL_TOOL_CONFIG = {
  size: 25,
};

export const ToolButton = ({ toolName }) => {
  const [toolConfig, setToolConfig] = useState(INITIAL_TOOL_CONFIG);
  const [hasPointerEntered, setHasPointerEntered] = useState(false);
  const { activeTool } = useSelector((state) => state.toolReducer);

  const dispatch = useDispatch();

  let toolColor;
  if (activeTool !== toolName) {
    if (hasPointerEntered) {
      toolColor = HOVERED_ICON_COLOR;
    } else {
      toolColor = DEFAULT_TOOL_ICON_COLOR;
    }
  } else {
    toolColor = CLICKED_ICON_COLOR;
  }

  const renderIcon = () => {
    switch (toolName) {
      case "brush":
        return <BrushIcon {...toolConfig} color={toolColor} />;
      case "eraser":
        return <EraserIcon {...toolConfig} color={toolColor} />;
      case "grid":
        return <GridIcon {...toolConfig} color={toolColor} />;
      case "refImage":
        return <RefImageIcon {...toolConfig} color={toolColor} />;
      case "eyedropper":
        return <EyeDropperIcon {...toolConfig} color={toolColor} />;
      case "save":
        return <SaveIcon {...toolConfig} color={toolColor} />;
      default:
        return <QuestionMarkIcon {...toolConfig} color={toolColor} />;
    }
  };

  const handlePointerEnter = (e) => {
    setHasPointerEntered(true);
  };
  const handlePointerLeave = (e) => {
    setHasPointerEntered(false);
  };
  const handleClick = (e) => {
    dispatch(toolActions.selectTool({ toolName }));
  };

  const getToolTipText = (toolName) => {
    const capitalizedToolName =
      toolName.charAt(0).toUpperCase() + toolName.slice(1);
    switch (toolName) {
      case "brush":
        return `${capitalizedToolName} (${HOT_KEY_BRUSH})`;
      case "eraser":
        return `${capitalizedToolName} (${HOT_KEY_ERASER})`;
      case "grid":
        return `${capitalizedToolName}`;
      case "refImage":
        return `${capitalizedToolName}`;
      case "eyedropper":
        return `${capitalizedToolName} (${HOT_KEY_EYEDROPPER})`;
      case "save":
        return `${capitalizedToolName} (${HOT_KEY_SAVE})`;
    }
  };

  return (
    <Tooltip title={getToolTipText(toolName)} arrow placement="right">
      <button
        className={classes.toolButton}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {renderIcon()}
      </button>
    </Tooltip>
  );
};

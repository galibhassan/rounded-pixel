import classes from "./brushTool.module.css";
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
const TOOL_CONFIG = {
  size: 25,
  color: DEFAULT_TOOL_ICON_COLOR,
};

const BrushTool = ({ toolIconColor, toolName }) => {
  const handleClick = (e) => {
    console.log("Tool selected");
  };

  const renderIcon = () => {
    switch (toolName) {
      case "brush":
        return <BrushIcon {...TOOL_CONFIG} />;
      case "eraser":
        return <EraserIcon {...TOOL_CONFIG} />;
      case "grid":
        return <GridIcon {...TOOL_CONFIG} />;
      case "refImage":
        return <RefImageIcon {...TOOL_CONFIG} />;
      case "eyedropper":
        return <EyeDropperIcon {...TOOL_CONFIG} />;
      case "save":
        return <SaveIcon {...TOOL_CONFIG} />;
      default:
        return <QuestionMarkIcon {...TOOL_CONFIG} />;
    }
  };

  return (
    <button onClick={handleClick}>
      {renderIcon()}
    </button>
  );
};

export default BrushTool;

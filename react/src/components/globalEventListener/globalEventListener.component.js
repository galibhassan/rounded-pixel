import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toolActions } from "../../store/toolSlice";

export const GlobalEventListeners = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch(e.key) {
          case "b": dispatch(toolActions.selectTool({toolName:"brush"})); break;
          case "e": dispatch(toolActions.selectTool({toolName:"eraser"})); break;
          case "s": dispatch(toolActions.selectTool({toolName:"save"})); break;
          case "Alt": dispatch(toolActions.selectTool({toolName:"eyedropper"})); break;
      }
    });
  }, []);

  return <></>;
};

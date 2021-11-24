import { ToolButton } from "../toolButton/toolButton.component";

export const TestComponent = () => {
  return(
    <>
      <ToolButton toolName="brush"/>
      <ToolButton toolName="eyedropper"/>
      <ToolButton toolName="grid"/>
      <ToolButton toolName="refImage"/>
      <ToolButton toolName="save"/>
      <ToolButton toolName="eraser"/>
    </>
  )
}
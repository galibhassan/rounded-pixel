import classes from './brushTool.module.css'
import {BsFillBrushFill} from 'react-icons/bs'

const DEFAULT_TOOL_ICON_COLOR = "#898989"

const BrushTool = ({toolIconColor})=>{
  return(
    <button>
      <BsFillBrushFill
        size={25} 
        color={toolIconColor || DEFAULT_TOOL_ICON_COLOR}
      />
    </button>
  )
}

export default BrushTool
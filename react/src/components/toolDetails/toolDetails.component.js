import classes from './toolDetails.module.css'
import {useSelector} from 'react-redux'

export const ToolDetails = () => {
  const {activeTool} = useSelector(state=>state.toolReducer)
  
  return(
    <div>
      {activeTool}
    </div>
  )

}
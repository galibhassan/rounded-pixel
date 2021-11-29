import classes from './toolDetails.module.css'
import {useSelector} from 'react-redux'
import { BrushDetail } from '../brushDetails/brushDetails.component'
import { EyedropperDetails } from '../eyedropperDetails/eyedropperDetails.component'
import {SaveDetails} from '../saveDetail/saveDetails.component'
import {RefImageDetails} from '../refImageDetails/refImageDetails.component'
import {GridDetails} from '../gridDetails/gridDetails.component'

export const ToolDetails = () => {
  const {activeTool} = useSelector(state=>state.toolReducer)
  
  const renderToolDetails = ()=>{
    switch(activeTool){
      case "brush": return <BrushDetail/>;
      case "eyedropper": return <EyedropperDetails/>;
      case "save": return <SaveDetails/>;
      case "refImage": return <RefImageDetails/>;
      case "grid": return <GridDetails/>;
      default: return <BrushDetail/>
    }
  }

  return(
    <div className={classes.toolDetailsContainer}>
      {renderToolDetails()}
    </div>
  )

}
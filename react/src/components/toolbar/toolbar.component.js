import classes from './toolbar.module.css'

export const ToolBar = (props)=>{
    return(
        <div className={classes.toolBar}>
            {props.children}
        </div>
    )
}
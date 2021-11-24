import classes from './toolContainer.module.css'

export const ToolContainer = (props)=>{
    return(
        <div className={classes.toolContainer}>
            {props.children}
        </div>
    )
}
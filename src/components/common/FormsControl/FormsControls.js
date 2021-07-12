import React from "react"
import c from "./FormsControls.module.css"


export const Textarea = ({input,meta:{touched,error},...props}) => {
    const hasError = touched && error;
    return(
        <div className={c.formControl + " " + (hasError && c.error)}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
               {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input,meta:{touched,error},...props}) => {
    const hasError = touched && error;
    return(
        <div className={c.formControl + " " + (hasError && c.error)}>
            <div>
                <input  {...input} {...props}/>
            </div>
               {hasError && <span>{error}</span>}
        </div>
    )
}
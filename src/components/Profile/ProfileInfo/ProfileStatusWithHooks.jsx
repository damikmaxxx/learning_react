import c from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const ProfileStatusWithHooks = (props) => {
    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true);
    }
    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    const diactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode && 
                <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode && 
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={diactivateEditMode} value={status}/>
                </div>
            }
            
        </div>
    )
}
    

export default ProfileStatusWithHooks
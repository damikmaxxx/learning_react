import { NavLink } from 'react-router-dom';
import c from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={c.dialog + " " + c.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControl/FormsControls';
import { maxLengthCreator, required } from '../../utils/validator/validators';
import DialogItem from './DialogItem/DialogItem';
import c from './Dialogs.module.css';
import Message from './Message/Message';

let maxLength50 = maxLengthCreator(50)
const DialogForm = (props) => {
    
    return <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"text"} placeholder={"..."} validate={[required,maxLength50]}></Field>
            <button >Write text</button>
        </form>
}

const DialogReduxForm = reduxForm({form:"dialog"})(DialogForm)

const Dialogs = (props) => {
    const addNewMessage = (value) => {
        props.addMessage(value.text)
    }

    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message} />)
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogs_items}>

                    {dialogs}
                </div>
                <div className={c.messages}>
                    <div>
                        {messages}
                    </div>
                    <div>
                        <DialogReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Dialogs;
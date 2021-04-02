import c from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';




const Dialogs = (props) => {
    let addMessage = () => {
        props.addMessage()
    }
    let onNewMessageChange = (e) => {

        let text = e.target.value
        props.updateNewMessageText(text)
    }

    debugger
    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message} />)
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
                        <div>
                            <textarea onChange={onNewMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                            <button onClick={addMessage}>Write text</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Dialogs;
import React from 'react';
import { connect } from 'react-redux';
import { UpdateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialoge-reducer'
import Dialogs from './Dialogs';



console.log("asas")
console.log("asas2")
let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
        newMessageText:state.profilePage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: () =>{
            dispatch(addMessageActionCreator())
        },
        addMessage: (text) =>{
            dispatch(UpdateNewMessageTextActionCreator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
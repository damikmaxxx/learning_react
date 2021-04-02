import { connect } from 'react-redux';
import { UpdateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialoge-reducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
        newMessageText:state.profilePage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) =>{
            dispatch(UpdateNewMessageTextActionCreator(text))
        },
        addMessage: () =>{
            dispatch(addMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
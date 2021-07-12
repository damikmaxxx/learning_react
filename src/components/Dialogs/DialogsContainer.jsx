import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage} from '../../redux/dialoge-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
    }
}
export default compose(
    connect(mapStateToProps,{addMessage}),
    withAuthRedirect
)(Dialogs)


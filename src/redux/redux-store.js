import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth-reducer";
import { dialogeReducer } from "./dialoge-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import { appReducer } from "./app-reducer";
let reducers = combineReducers({
    dialogsPage:dialogeReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store
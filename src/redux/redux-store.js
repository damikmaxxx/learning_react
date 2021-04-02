import { combineReducers, createStore } from "redux";
import { dialogeReducer } from "./dialoge-reducer";
import { profileReducer } from "./profile-reducer";

let reducers = combineReducers({
    dialogsPage:dialogeReducer,
    profilePage:profileReducer,
})

let store = createStore(reducers);


export default store
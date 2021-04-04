import { useReducer } from "react";
import { combineReducers, createStore } from "redux";
import { dialogeReducer } from "./dialoge-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
let reducers = combineReducers({
    dialogsPage:dialogeReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
})

let store = createStore(reducers);


export default store
// import { dialogeReducer } from "./dialoge-reducer";
// import { profileReducer } from "./profile-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
// const ADD_MESSAGE = "ADD-MESSAGE";

// export let store = {
//   _state: {
//     dialogsPage: {
//       messages: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "How are you?" },
//         { id: 3, message: "Ok!" },
//       ],
//       newMessageText: "get",
//       dialogs: [
//         { id: 1, name: "Dmitry" },
//         { id: 2, name: "Andrey" },
//         { id: 3, name: "Apets" },
//         { id: 4, name: "Sveta" },
//         { id: 5, name: "Sasha" },
//       ],
//     },
//     profilePage: {
//       posts: [
//         { id: 1, message: "post 1", likesCount: "0" },
//         { id: 2, message: "post 2", likesCount: "20" },
//         { id: 3, message: "post 3", likesCount: "15" },
//       ],
//       newPostText: "hi man",
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscriber() {},
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.dialogsPage = dialogeReducer(this._state.dialogsPage, action);
//     this._state.profilePage = profileReducer(this._state.profilePage, action);

//     this._callSubscriber(this._state);
//   },
// };



// export default store;
// window.store = store;
// console.log(store);

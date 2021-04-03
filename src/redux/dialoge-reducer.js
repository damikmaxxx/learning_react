const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
let init = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Ok!" },
  ],
  newMessageText: "get",
  dialogs: [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Apets" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Sasha" },
  ],
};
export const dialogeReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: state.newMessageText,
          },
        ],

        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const UpdateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

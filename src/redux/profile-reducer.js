const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let init = {
  posts: [
    { id: 1, message: "post 1", likesCount: "0" },
    { id: 2, message: "post 2", likesCount: "20" },
    { id: 3, message: "post 3", likesCount: "15" },
  ],
  newPostText: "hi man",
}

export const profileReducer = (state = init, action) =>{
    switch (action.type) {
        case ADD_POST:
          let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: "0",
          };
          state.posts.push(newPost);
          state.newPostText = "";
          break;
        case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.newText;
          break;

      }
    return state
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
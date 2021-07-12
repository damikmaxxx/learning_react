import { profileAPI, usersAPI } from '../api/api';
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS"
let init = {
  posts: [
    { id: 1, message: "post 1", likesCount: "0" },
    { id: 2, message: "post 2", likesCount: "20" },
    { id: 3, message: "post 3", likesCount: "15" },
  ],
  profile: null,
  status:"",
};

export const profileReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 4,
            message: action.newPostText,
            likesCount: "0",
          },
        ],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status:action.status
      }
    default:
      return state
  }
};

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  
  return {
    type: SET_STATUS,
    status,
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
        
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
          if (response.data.resultCode===0){
            dispatch(setStatus(status))
          }
            
        })
        
  }
}

export const getProfile = (userId) => {
  return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
        
  }
}
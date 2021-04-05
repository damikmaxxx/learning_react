const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

let init = {
  users:[]
}

export const usersReducer = (state = init, action) => {
  switch (action.type) {
    case "TOGGLE_FOLLOW":
      
      var follow = true
      state.users.map((u) => {
        if (u.id === action.userId) {
          follow = !u.followed
        }
      });
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {...u,followed:!u.followed}
            
          }
          return u;
        }),
      };
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

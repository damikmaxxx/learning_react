import {usersAPI} from '../api/api'

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS";
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching:false,
  followingInProgress:[]
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FOLLOW":
      var follow = true;
      state.users.map((u) => {
        if (u.id === action.userId) {
          follow = !u.followed;
        }
      });
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return { ...state, users: action.users };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage };
    case "SET_TOTAL_USERS_COUNT":
      return { ...state, totalUsersCount: action.totalUsers };
    case "TOGGLE_IS_FETCHING":
      return {...state,isFetching:action.isFetching}
    case "TOGGLE_IS_FOLLOW_PROGRESS":
      return {...state,  
        followingInProgress:action.isFetching ? [...state.followingInProgress,action.userId]
        :state.followingInProgress.filter(id => id !=  action.userId)}
    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsers) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsers,
});

export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching,userId) => ({type:TOGGLE_IS_FOLLOW_PROGRESS, isFetching,userId})
export const requestUsers = (currentPage,pageSize) => async (dispatch) =>{
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(currentPage,pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setCurrentPage(currentPage))
    dispatch(setTotalUsersCount(response.data.totalCount))
  
}


export const changedFollow = (userId,userF) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId))
    let response = await usersAPI.getFollow(userId,userF ? "unfollow" : "follow")
      if(response.data.resultCode == 0){
        dispatch(toggleFollow(userId))
        }
        dispatch(toggleFollowingProgress(false,userId))
  
}
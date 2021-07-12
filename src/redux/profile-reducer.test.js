import { addPost, profileReducer } from "./profile-reducer"

it('length of posts should be incremented',() => {
  let action = addPost('hi men');
  let state = {
    posts: [
      { id: 1, message: "post 1", likesCount: "0" },
      { id: 2, message: "post 2", likesCount: "20" },
      { id: 3, message: "post 3", likesCount: "15" },
    ],
    profile: null,
    status:"",
  };

  let newState = profileReducer(state,action)
  expect(newState.posts.length).toBe(5)
})
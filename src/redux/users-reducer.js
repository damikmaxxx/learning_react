const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
let init = {
  users: [
    {
      id: 1,
      photoUrl:"https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg",
      followed: false,
      fullName: "Dmitry",
      status: "Hi Hi Hi Hi Hi",
      location: { city: "Kazan", country: "Russia" },
    },
    {
      id: 2,
      photoUrl:"https://i.ytimg.com/vi/mlO1YaqXLqw/maxresdefault.jpg",
      followed: true,
      fullName: "Vasa",
      status: "I like play game",
      location: { city: "Moscow", country: "Russia1" },
    },
    {
      id: 3,
      photoUrl:"https://hdoboi.kiev.ua/images/25.Jun.2019-planeta-v-kosmose-4k.jpg",
      followed: true,
      fullName: "Dmitry",
      status: "I like this",
      location: { city: "Moscow", country: "Russia2" },
    },
    {
      id: 4,
      photoUrl:"https://www.eastrussia.ru/upload/medialibrary/a6a/Foto-Denis-Budkov.-Lavovyy-potok-na-sklone-vulkana-Klyuchevskoy-Sentyabr-2013-.jpg",
      followed: false,
      fullName: "Dmitry",
      status: "I like ...",
      location: { city: "Moscow", country: "Russia3" },
    },
  ],
};

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
      return { ...state, users: [...state.users, action.users] };
    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

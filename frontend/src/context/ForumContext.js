import { createContext, useReducer } from "react";

export const ForumContext = createContext();

export const forumReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.payload,
      };
    case "SET_POST_BY_ID":
      return {
        posts: action.payload,
      };
    case "CREATE_POST":
      return {
        posts: action.payload,
        ...state.posts,
      };
    default:
      return state;
  }
};

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(forumReducer, {
    posts: null,
  });

  return (
    <ForumContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
};

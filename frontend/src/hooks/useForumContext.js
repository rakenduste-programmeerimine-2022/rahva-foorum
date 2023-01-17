import { ForumContext } from "../context/ForumContext";
import { useContext } from "react";

export const useForumContext = () => {
  const context = useContext(ForumContext);

  if (!context) {
    throw Error("useForumContext must be used inside a ForumContextProvider");
  }

  return context;
};

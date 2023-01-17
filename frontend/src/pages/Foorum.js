import { useEffect } from "react";
import { useForumContext } from "../hooks/useForumContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
// components
import PostDetails from "../components/PostDetails";
//import WorkoutForm from "../components/WorkoutForm";

const Foorum = () => {
  const { posts, dispatch } = useForumContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/forum/allposts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json });
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div>
        <div>
          <Link to="/addpost">Loo uus postitus </Link>
        </div>
      </div>

      <div className="workouts">
        {posts &&
          posts.map((post) => <PostDetails key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Foorum;

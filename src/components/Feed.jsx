import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  // const { firstName, lastName, gender, age, about, photoUrl } = feed;

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!feed) {
      fetchFeed();
    }
  }, []);

  if (!feed) return;
  if (feed.length <= 0) {
    return <h1 className="text-center my-10">No User Found!</h1>;
  }

  return (
    feed && (
      <div>
        <FeedCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;

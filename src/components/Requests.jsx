import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, deleteRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    if (requests) return;
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  //   dispatch(deleteRequest("dsknacj"));

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(deleteRequest(_id));
      console.log(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!requests) {
    return;
  }
  if (requests.length === 0)
    return <h1 className="text-center ">No Requests Found!</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Requests</h1>
      {requests?.map((request) => {
        const { _id, firstName, lastName, age, about, gender, photoUrl } =
          request?.fromUserId;
        console.log("connection ->", firstName);
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto justify-between self-center"
          >
            <img src={photoUrl} alt="img" className="w-20 h-20 rounded-full" />
            <div className="text-start ">
              <h1 className="text-lg">{firstName + " " + lastName}</h1>
              {age && gender && <h3>{gender + "," + age}</h3>}
              <p>{about}</p>
            </div>
            <div className="flex flex-row">
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("rejected", request?._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("accepted", request?._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

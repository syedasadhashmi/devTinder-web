import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      if (connections) {
        return;
      }
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) {
    return;
  }
  if (connections.length === 0) return <h2>No Connections Found!</h2>;
  return (
    <div className="text-center flex flex-col">
      <h1 className="text-3xl m-5">Connections</h1>
      {connections.map(
        ({ _id, firstName, lastName, age, about, gender, photoUrl }) => {
          console.log("connection ->", firstName);
          return (
            <div
              key={_id}
              className="bg-base-300 w-1/2 mx-auto p-5 rounded-2xl m-5 flex justify-around"
            >
              <img
                src={photoUrl}
                alt="img"
                className="w-20 h-20 rounded-full"
              />
              <div className="text-start">
                <h1 className="text-lg">{firstName + " " + lastName}</h1>
                {age && gender && <h3>{gender + "," + age}</h3>}
                <p>{about}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Connections;

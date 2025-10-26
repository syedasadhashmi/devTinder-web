import React, { useState } from "react";
import FeedCard from "./FeedCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age || "");
  const [error, setError] = useState("");
  const [isUserUpdate, setIsUserUpdate] = useState(false);

  const dispatch = useDispatch();

  const editProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          gender,
          about,
          photoUrl,
          age,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setIsUserUpdate(true);
      setTimeout(() => {
        setIsUserUpdate(false);
      }, 3000);
    } catch (err) {
      //   console.log(err);
      setError(err.response.data);
    }
  };
  return (
    <div>
      {/* Error Msg */}
      {error && (
        <div className="toast toast-top toast-center z-10">
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        </div>
      )}
      <div className="flex justify-center ">
        <div className="card card-border bg-base-300 w-96 my-10 justify-self-center-safe mx-5">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <select
                defaultValue="Select Gender"
                // value={gender}
                // defaultValue={gender}
                className="select"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value={"male"}>male</option>
                <option value={"female"}>female</option>
                <option value={"others"}>others</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                type="text"
                className="input"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <textarea
                // defaultValue={"Default Text"}
                value={about}
                className="textarea"
                onChange={(e) => setAbout(e.target.value)}
              >
                {about}
              </textarea>
              {/* <input
                type="text"
                className="input"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              /> */}
            </fieldset>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={editProfile}>
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="my-5">
          <FeedCard
            user={{ firstName, lastName, age, about, gender, photoUrl }}
          />
        </div>
      </div>
      {isUserUpdate && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Updated Successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;

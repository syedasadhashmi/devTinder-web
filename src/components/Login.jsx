import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);

      // console.log("Err", err.response.data);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      {/* Error Msg */}
      {error && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>{error}</span>
        </div>
      )}
      <div className="card card-border bg-base-300 w-96 my-10 justify-self-center-safe">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          {!isLogin && (
            <>
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
            </>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="cursor-pointer text-center"
            onClick={() => setIsLogin((val) => !val)}
          >
            {isLogin
              ? "Want to create an account?"
              : "Already have an account?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

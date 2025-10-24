import React from "react";

const FeedCard = ({ user }) => {
  const { firstName, lastName, gender, age, about, photoUrl } = user;
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-base-300 w-96 shadow-sm justify-center">
        <figure>
          <img src={photoUrl} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {gender && age && <h3>{gender + ", " + age}</h3>}
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

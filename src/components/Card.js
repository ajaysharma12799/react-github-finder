import React from 'react'
import {UseUserContext} from "../context/userContext";

const Card = () => {
  const {user: {user}} = UseUserContext();
    return (
      user === null ? 
      null : 
      <div class="card">
        <img src={user.avatar_url} className="card-img-top" alt={user.name} />
        <div className="card-body">
          <h5 className="card-title"> Name : {user.name.toUpperCase()}</h5>
          <h5 className="lead"> Github Login : {user.login}</h5>
          <h5 className="lead"> Github Bio : {user.bio}</h5>
          <h5 className="lead"> Total Github Followers : {user.followers}</h5>
          <h5 className="lead"> Total Github Followings : {user.following}</h5>
          <h5 className="lead"> Are You Hireable : {user.hireable ? "True" : "False"}</h5>
          <h5 className="lead"> Location : {user.location}</h5>
        </div>
      </div>
    )
}

export default Card

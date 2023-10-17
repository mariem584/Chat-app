import React, { useContext } from "react";
import { Context } from "./contexts";
import  { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const { username, setUserName, secret, setsecret } = useContext(Context);
  const Router = useRouter();
  function onSubmit(e){
    e.preventDefault()
    if(username.length === 0 || secret.length === 0) return
    axios.put(
      'https://api.chatengine.io/users/',
      {username  , secret },
      {headers : {"private-key" : "c6512b1e-3cb4-471b-9c1d-754fa906a757"}}
    ).then (r => Router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form
          action=""
          className="auth-form"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="auth-title">marly chat</div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setsecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button" >Login/Sign Up</button>
        </form>
      </div>
    </div>
  );
}

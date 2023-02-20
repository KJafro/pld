import { Link } from "react-router-dom";
import "./login.css";
import { axiosInstance } from "../../config";
import {useContext, useRef} from "react";
import { Context } from "../../context/Context";
import { useState } from "react"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)
  const [error,setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false);
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE"});
      setError(true);
    }
  }

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" placeholder="Enter your Username" ref={userRef}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your Password" ref={passwordRef}/>
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
        {error && <span style={{color: "red", marginTop:"10px"}}>Incorrect Password</span>}
    </div>
  )
}

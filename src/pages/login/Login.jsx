import { Link } from "react-router-dom";
import "./login.css";
import { axiosInstance } from "../../config";
import {useContext, useRef} from "react";
import { Context } from "../../context/Context";
import { useState } from "react"
import { useEffect } from "react";
import { FaHome } from "react-icons/fa"


export default function Login() {
  useEffect(() => {
    document.title = "Everyday Being | Login"
  }, []);
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)
  const [error,setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false);
    setLoading(true)
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
      setLoading(false)
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE"});
      setError(true);
      setLoading(false)
    }
  }

  return (
    <div className="login">
      <div className="loginLeft"></div>
      <div className="loginRight">
        <form className="loginForm" onSubmit={handleSubmit}>
        <div className="loginTitle">Login</div>
        <label>Username</label>
            <input type="text" className="loginInput" placeholder="Enter your Username" ref={userRef}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your Password" ref={passwordRef}/>
            <button className="loginButton" type="submit">{loading ? ("Logging in...") : "Login"}</button>
            {error && <span style={{color: "red", marginTop:"10px"}}>Incorrect Password</span>}
        </form>
    </div>
    </div>
  )
}

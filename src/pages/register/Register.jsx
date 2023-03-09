import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import { axiosInstance } from "../../config"
import { useEffect } from "react"
import { FaHome } from "react-icons/fa"

export default function Register() {
  useEffect(() => {
    document.title = "Everyday Being | Register"
  }, []);
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)
  const [loading, setLoading] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true)
    try {
      const res = await axiosInstance.post("/auth/register", {
        username, 
        email, 
        password
      });
      setLoading(true)
      res.data && window.location.replace("/#/login");
    } catch (err) {
      setError(true);
      setLoading(false)
    }
  }
  return (
    <div className="register">
      <div className="registerLeft"></div>
      <div className="registerRight">
        <form className="registerForm" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your Username" 
            onChange={e => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your Email" 
            onChange={e => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your Password" 
            onChange={e => setPassword(e.target.value)}
            />
            <button className="registerButton" type="submit">{loading ? ("Registering...") : "Register"}</button>
            {error && <span style={{color: "red", marginTop:"10px", textAlign:"center"}}>Please fill in all fields!</span>}
            <p className="existingAcc">Already have an account? Log in <Link className="links" to ="/login">here</Link></p>
        </form>
        {/* <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
        </button> */}
    </div>
    </div>
  )
}

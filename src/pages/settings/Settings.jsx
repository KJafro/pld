import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config"
import TopBar from "../../components/topbar/TopBar";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("")
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)

  const { user, dispatch } = useContext(Context);
  // const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username.length===0||email.length===0||password.length===0){
      setError(true)
    }
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      profilePic
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <>
    <TopBar/>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h1 className="settingsUpdateTitle">Update Account</h1>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsPP">
            <img
              src={user.profilePic}
              alt="" className="pp"
            />
            <label className="settingslbl">Profile Picture</label>
            <input type="text" placeholder="Image URL" onChange={e=>setprofilePic(e.target.value)}/>
            
            {/* <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label> */}
            {/* <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
          </div>
          <label className="settingslbl">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="settingslbl">Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="settingslbl">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
                   {error?
          <label className="errortxt">Please fill all available fields</label>:""}
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px", fontSize: "20px" }}
            >
              Profile has been updated!
            </span>
          )}
        </form>
      </div>
    </div>
    </>
  );
}
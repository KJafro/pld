import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSpotify, faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  // const PF = "https://everydaybeing.onrender.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <FontAwesomeIcon icon={faFacebook} className="topIcon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter} className="topIcon"></FontAwesomeIcon>
        <Link to="https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy/"><FontAwesomeIcon icon={faSpotify} className="topIcon"></FontAwesomeIcon></Link>
        <Link to="https://instagram.com/everyday.being?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} className="topIcon"></FontAwesomeIcon></Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/blog">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/success">
              SUCCESS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={user.profilePic} alt="" />
            {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
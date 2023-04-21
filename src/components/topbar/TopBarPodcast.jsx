import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbarpodcast.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSpotify, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FaTimes, FaBars} from "react-icons/fa"
import { useRef } from "react";
import Avatar from '@mui/material/Avatar';
import { useIsAdmin } from './../../context/useAdmin';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  // const PF = "https://everydaybeing.onrender.com/images/"
  const navRef = useRef();
  const isAdmin  = useIsAdmin()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const hideNavbar = () =>{
    navRef.current.classList.remove("responsive_nav")
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <Link to="https://www.tiktok.com/@everydaybeing/"><FontAwesomeIcon icon={faTiktok} className="topIcon"></FontAwesomeIcon></Link>
        <Link to="https://twitter.com/EverydayBeing01/"><FontAwesomeIcon icon={faTwitter} className="topIcon"></FontAwesomeIcon></Link>
        <Link to="https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy/"><FontAwesomeIcon icon={faSpotify} className="topIcon"></FontAwesomeIcon></Link>
        <Link to="https://instagram.com/everyday.being?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} className="topIcon"></FontAwesomeIcon></Link>
      </div>
      <div className="topCenter">
        <ul className="topList" ref={navRef}>
          <li className="topListItemPodcast"><Link className="link" to="/podcast">HOME</Link></li>
          <li className="topListItemPodcast"><Link className="link" to="/blog">BLOG</Link></li>
          <li className="topListItemPodcast"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="topListItemPodcast"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="topListItemPodcast"><Link className="link" to="/createpodcast">ADD PODCAST</Link></li>
          {!user && <li className="StopListItem"><Link className="link" to="/login">ACCOUNT</Link></li>}
          <li className="topListItemPodcast" onClick={handleLogout}>{user && "LOGOUT"}</li>
          <button className ="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
          </button>
          </ul>
      </div>
      <div className="topRight">
        {user ? (<Link to="/settings"><img className="topImg" src={user.profilePic ? user.profilePic : <Avatar/>} alt="" />
            {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}</Link>) : (
<ul className="topList">
            <li className="topListItemPodcast"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="topListItemPodcast"><Link className="link" to="/register">REGISTER</Link></li>
</ul>
        )}
              <button className ="nav-btn" onClick={showNavbar}>
          <FaBars />
          </button>
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
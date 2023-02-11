import "./sidebar.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosInstance } from "../../config";
import { Link } from "react-router-dom"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => 
    {
      const res = await axiosInstance.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <div className="sidebarTitle">ABOUT ME!</div>
          <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia corporis vel beatae dignissimos a in provident 
          repellat alias amet odit modi voluptate similique tempora ea voluptatibus.</p>
        </div>
        <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}

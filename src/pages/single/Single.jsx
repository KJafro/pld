import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import TopBar from "../../components/topbar/TopBar";

export default function Single() {
  return (
    <>
    <div className="single">
      <TopBar/>
    </div>
    <div className="post">
      <SinglePost/>
    </div></>
  )
}

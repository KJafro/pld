import "./single.css"
import SinglePost from "../../components/singlePost/SinglePost"
import TopBar from "../../components/topbar/TopBar";
import { useEffect } from 'react';

export default function Single() {
  useEffect(() => {
    document.title = "Everyday Being | Post"
  }, []);
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

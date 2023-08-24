import "./post.css"
import {Link} from "react-router-dom"
import { Fade } from "react-awesome-reveal";
import LazyLoad from 'react-lazy-load';

export default function Post({post}) {
  let moment = require ('moment');
  const cleanedTitle = post.title.replace(/%/g, "").replace(/\s+/g, "-");

  // const PF = "http://localhost:5000/images/"
  return (
<div className="postFront">
      {post.photo && (
        // <img class="postImg" src={PF + post.photo/} alt="" />
        <Link to = {`/post/${cleanedTitle}`} className="link"><LazyLoad offset={300}><img class="postImg" src={post.photo} alt="" /></LazyLoad></Link>
      )}
        <div className="postInfo">
            {/* <div className="postCats">{
              post.categories.map(c=> (
                <span className="postCat">ssdasdsa{c.name}</span>
              ))
            }
            // </div> */}
            <Link to = {`/post/${cleanedTitle}`} className="link">
            <span className="postTitle">{post.title}
            </span>
            </Link>
        <span className="postDate">{moment(post.createdAt).format('MMMM Do YYYY | h:mm a')}</span>
        <p className="postBy">Posted by: {post.username}</p>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  )
}

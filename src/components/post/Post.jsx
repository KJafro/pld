import "./post.css"
import {Link} from "react-router-dom"
import { Fade } from "react-awesome-reveal";

export default function Post({post}) {
  let moment = require ('moment');

  // const PF = "http://localhost:5000/images/"
  return (
<div className="postFront">
      {post.photo && (
        // <img class="postImg" src={PF + post.photo/} alt="" />
        <Link to = {`/post/${post._id}`} className="link"><img class="postImg" src={post.photo} alt="" /></Link>
      )}
        <div className="postInfo">
            {/* <div className="postCats">{
              post.categories.map(c=> (
                <span className="postCat">ssdasdsa{c.name}</span>
              ))
            }
            // </div> */}
            <Link to = {`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}
            </span>
            </Link>
        <span className="postDate">{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  )
}

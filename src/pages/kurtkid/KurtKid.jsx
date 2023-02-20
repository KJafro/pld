import TopBar from '../../components/topbar/TopBar'
import { useContext, useState } from "react";
import './kurtkid.css'
import { Context } from "../../context/Context";
import { Link } from 'react-router-dom';

export default function KurtKid() {

    const [profilePic] = useState("")

    const { user } = useContext(Context);

  return (
    <>
    <TopBar />
    <div className="usercontainer">
    <div className='userpp'>
    <img
              src={user.profilePic}
              alt="" className="userpic"
            />
            <hr className='userhr'/>
  </div>
  <div className="username">
    <p className='underline'>Name</p>
    <p className='undtxt'>KurtKid</p>

    <hr className='userhr'/>
    <p className='underline'>About Me</p>
    <p className='undtxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ducimus, quas debitis molestiae libero eveniet eum delectus quis? Illo dolorum modi iusto porro fugit minus tempore at vero animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum earum temporibus nisi, sequi amet, illum esse assumenda et obcaecati laudantium enim quidem excepturi ab quo dolorem eos non ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima exercitationem quos hic quidem expedita sunt adipisci tenetur ipsum pariatur dolorem ut possimus consequatur ducimus nobis, voluptates molestiae atque eos vitae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab labore reprehenderit. Porro sapiente, itaque tempora corporis, ex modi eligendi est aperiam sed veritatis nam id natus, dolore at vitae!</p>
  </div>
  <hr className='userhr'/>
  <button className='contactme' onClick={() => window.location = 'mailto:yourmail@domain.com'}>Contact Me</button>
  <p>{user.email}</p>
  
  </div>
  </>
  )
}

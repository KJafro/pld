import './construct.css'
import { Link } from 'react-router-dom'

export default function Construct() {

    const progress = document.querySelector('.progress');
    const progress_percentage = document.querySelector('.spanprogress');

    let per = 0;
    function progressLoad() {
        if(per >= 80) {
            progress.style.width = '80%';
            progress_percentage.innerHTML = "80%";
        } else {
            progress.style.width = `${per}%`;
            progress_percentage.innerHTML = `${per}%`;
        }
        per++
    }
    setInterval(progressLoad, 50)

  return (
    <>
    <meta http-equiv="refresh" content="3;url=http://localhost:3000/" />
    <div className="backgroundcon">

    </div>
    <div className="containercon">
        <h1 className='h1con'>UNDER CONSTRUCTION</h1>
        <h3>PROGRESS</h3>
        <div className="progress-wrapper">
            <div className="progress"><span className='spanprogress'>0%</span></div>
        </div>
        <div className="social-icons">
        <i className="Icon fab fa-facebook-square"></i>
        <i className="Icon fab fa-twitter-square"></i>
        <Link to="https://open.spotify.com/show/5ZLCIJR0FHZLIREjPoTACy/"><i class="Icon fa-brands fa-spotify"></i></Link>
        <Link to="https://instagram.com/everyday.being?igshid=YmMyMTA2M2Y="><i className="Icon fab fa-instagram-square"></i></Link>
        </div>
    </div></>
  )
}

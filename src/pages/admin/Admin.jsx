import './admin.css'
import { Fade } from "react-awesome-reveal";
import TopBarGeneral from '../../components/topbar/TopBarGeneral'

export default function Admin() {
  return (
    <>
    <div className="adminContainer">
    <Fade><h1 className='adminh1'>You need to be an admin to access this page!</h1></Fade>
    </div>
    </>
  )
}

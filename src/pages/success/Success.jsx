import "./success.css"
import { Link } from "react-router-dom"
import { Oval } from "react-loader-spinner"

export default function Success() {
  return (
    
    <div className="container">
        <div className="successtxt">
            <h2>POST SUCCESSFULLY ADDED!</h2>
            <Oval
            height={70}
            width={70}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
            />
            <meta http-equiv="refresh" content="3;url=https://everydaybeingfront.onrender.com" />
        </div>
    </div>
    
  )
}

import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className ="headerImg" src="https://www.kapwing.com/videos/63e82287c071180011182acc" alt="" />
    </div>
  )
}

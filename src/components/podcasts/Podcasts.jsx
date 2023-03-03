import Podcast from "../podcast/Podcast"
import "./podcasts.css"

export default function Podcasts({podcasts}) {
  return (
    <div className="podcasts">
      {podcasts.map((p)=>(
        <Podcast podcast={p} />
      ))}
        </div>
  )
}

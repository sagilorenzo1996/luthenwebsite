import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  return (
    <div className="announce-bar">
      <a href="#">
        <span className="announce-pill">New</span>
        <span>Luthen raises $47M Series B to expand Enterprise Autonomy Layer</span>
        <span className="announce-arrow"> →</span>
      </a>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  return (
    <div className="announce-bar">
      <Link to="/platform/builder">
        <span className="announce-pill">New</span>
        <span>Luthen Builder: Build and deploy autonomous workflows in minutes</span>
        <span className="announce-arrow"> →</span>
      </Link>
    </div>
  )
}

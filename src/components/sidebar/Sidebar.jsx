import "./sidebar.css";
import {
  LineStyle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/userList" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              User Database
            </li>
            </Link>
            <Link to="/Results" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Results
            </li>
            </Link>
            <Link to="/Announcements" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Announcements
            </li>
            </Link>
            <Link to="/Queries" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Queries
            </li>
            </Link>
          </ul>
        </div>
        </div>
      </div>
  );
}

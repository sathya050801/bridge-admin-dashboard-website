import {
  CalendarToday,
  PermIdentity,
  Publish,
} from "@material-ui/icons";
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">USER PROFILE</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1580067644090-a03da9d1e360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="userShowImg"
            />
            <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
                </div>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Allen Becker</span>
            </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">FULL NAME: Allen Becker</span>
            </div>
            <div className="userShowInfo">
              <SchoolOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">CLASS & SECTION: IX-C</span>
            </div>
            <div className="userShowInfo">
              <ContactsOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">USER ID: 191001</span>
            </div>
            <div className="userShowInfo">
              <ContactsOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">ROLL NO: 01</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">DOB: 1.9.2008</span>
            </div>
            <div className="userShowInfo">
              <WcOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">GENDER: Male</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">CONTACT</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
    
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <span className="userUpdateTitle">OTHER PERSONAL DETAILS</span>
              <div className="userUpdateItem">
                <label>Father's Name</label>
                <input
                  type="text"
                  placeholder="Jeff Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Mother's Name</label>
                <input
                  type="text"
                  placeholder="Rossy Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Father's Occupation</label>
                <input
                  type="text"
                  placeholder="IT Analyst at IBM"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Mother's Occupation</label>
                <input
                  type="text"
                  placeholder="Teacher at CYK"
                  className="userUpdateInput"
                />
              </div>
    z          <div className="userUpdateItem">
                <label>Mother Tongue</label>
                <input
                  type="text"
                  placeholder="English"
                  className="userUpdateInput"
                />
              </div>

            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

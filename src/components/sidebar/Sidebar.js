// import React, { useContext } from 'react'
import "./sidebar.scss"
import MenuLink from '../menuLink/MenuLink';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useSelector, useDispatch } from "react-redux";
import { authUser, loggedInId } from "../../slice/authSlice";





const Sidebar = () => {
    const loggedInUser = useSelector(authUser);
    console.log(loggedInUser);
    const loggedInUserId = useSelector(loggedInId)
    console.log(loggedInUserId)

    const currentUser = loggedInUser.find((user) => (user.id === loggedInUserId));
    console.log(currentUser)
    const dispatch = useDispatch();



    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="image" style={{ display: "flex", gap: "20px" }}>
                    {currentUser && currentUser.profileImage ? (<img src={currentUser.profileImage} alt="" className="shareProfileImg" />) : (<img src="/assets/ProfileCover/default-pic.jpg" className="shareProfileImg"></img>)}
                    <span> {currentUser && currentUser.name ? <span className="bold">{currentUser.name}</span> : null}</span>

                </div>
                <div className="menu">


                    <MenuLink icon={<RssFeedIcon style={{ color: "#ba8be5" }} />} text="Feed" />
                    <MenuLink icon={<ChatIcon style={{ color: "#ba8be5" }} />} text="Chat" />
                    <MenuLink icon={<EventIcon style={{ color: "#ba8be5" }} />} text="Event" />
                    <MenuLink icon={<PeopleAltIcon style={{ color: "#ba8be5" }} />} text="People" />
                    <MenuLink icon={< BookmarksIcon style={{ color: "#ba8be5" }} />} text="Bookmark" />
                    <MenuLink icon={< StorefrontIcon style={{ color: "#ba8be5" }} />} text="MarketPlace" />
                    <MenuLink icon={<VideoCameraBackIcon style={{ color: "#ba8be5" }} />} text="Video" />



                    <button className="sidebarButton">See more</button>
                    <hr className="sidebarHr" />

                </div>

                {/* <ul className="sidebarFriendList">

                    {users.map((u) => (
                        <Friends key={u.id} user={u} />

                    ))}


                </ul> */}


            </div>
        </div>
    )
}

export default Sidebar
import React, { useContext } from 'react'
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { logout } from '../../slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authUser, loggedInId } from "../../slice/authSlice";






const Navbar = () => {

    const loggedInUser = useSelector(authUser);
    console.log(loggedInUser);
    const loggedInUserId = useSelector(loggedInId)
    console.log(loggedInUserId)

    const currentUser = loggedInUser.find((user) => (user.id === loggedInUserId));
    console.log(currentUser)
    const dispatch = useDispatch();

    const [showModalBox, setShowModalBox] = useState(false);

    const navigate = useNavigate();

    const handleShowModalBox = () => {
        setShowModalBox(!showModalBox)
    }
    const handleLogout = () => {
        dispatch(logout());
        navigate("/")
    }
    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <div className='dflex'>
                    <div className='logos'>
                        <Link to="/" style={{ textDecoration: "none" }}>

                            <span className='logo'><img src="/assets/image/fbLogo.jpeg" alt="fbLogo"></img></span>

                        </Link>
                    </div>
                    <div className='searchBar'>
                        <SearchIcon className='searchIcon' />
                        <input type="text" id="text" placeholder='Search for friend post or videos' className='searchInput'></input>


                    </div>


                </div>

            </div>
            <div className='navbarCenter'>

                <div className='navIcons'>
                    <ul className='ulist'>
                        <li className='navIconsList  active'>
                            <a href="#"> < HomeIcon /></a>
                        </li>

                        <li className='navIconsList '>
                            < OndemandVideoIcon />
                        </li>

                        <li className='navIconsList '>
                            < PeopleIcon />
                        </li>

                        <li className='navIconsList '>
                            < StorefrontIcon />
                        </li>
                        <li className='navIconsList '>
                            < MessageIcon />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='navbarRight'>

                <div className='navbarIcons'>
                    <div className='navbarItems'>
                        <AppsIcon />
                        <span className='navbarIconBadge'>2</span>
                    </div>
                    <div className='navbarItems'>
                        <ChatBubbleIcon />
                        <span className='navbarIconBadge'>10</span>
                    </div>
                    <div className='navbarItems'>
                        <NotificationsIcon />
                        <span className='navbarIconBadge'>8</span>
                    </div>


                </div>
                {/* <Link to={`/profile/${currentUser.displayName}`}> */}
                <div className='profileImg'>
                    {/* <img src="./assets/profile/profile1.jpg" alt="" className="navbarImg" /> */}
                    <div className="image  navbarImg" onClick={handleShowModalBox}>
                        {currentUser && currentUser.profileImage ? (<img src={currentUser.profileImage} alt="" className="shareProfileImg" />) : (<img src="/assets/ProfileCover/default-pic.jpg" className="shareProfileImg"></img>)}


                    </div>


                    {showModalBox ? (
                        <div className='showProfile'>
                            <div className='profileContainer'>
                                <div className='currentimg'>

                                    <div className="image" style={{ display: "flex", gap: "20px" }}>
                                        {currentUser && currentUser.profileImage ? (<img src={currentUser.profileImage} alt="" className="shareProfileImg" />) : (<img src="/assets/ProfileCover/default-pic.jpg" className="shareProfileImg"></img>)}
                                        <span>
                                            {currentUser && currentUser.name ? <span className='bold'>{currentUser.name}</span> : null}
                                        </span>

                                    </div>

                                </div>
                                <div className='hr'></div>

                                <Link to={"/profile"}>

                                    <div className='seeProfile'>

                                        <p className='.para' style={{ marginTop: "10px", marginLeft: "25px", cursor: "pointer", textDecoration: "none" }}>see Profile</p>

                                    </div>
                                </Link>
                            </div>
                            <div className='logoutContainer'>
                                <div className='logout'>
                                    <ul className='ul'>
                                        <li> < SettingsIcon />Setting &privacy</li>
                                        <li><FeedbackIcon />Give Feedback</li>
                                        <li><span onClick={handleLogout} >< ExitToAppIcon />Logout</span></li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    ) : ""}









                </div>



            </div>
        </div >
    )
}

export default Navbar
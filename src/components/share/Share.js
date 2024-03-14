import React, { useContext, useState } from 'react'
import "./share.scss"
import { EmojiEmotions, PermMedia, VideoCameraFront, Close } from '@mui/icons-material'
import 'bootstrap/dist/css/bootstrap.min.css';
// import CreatePost from '../createPost/CreatePost';
import { authUser, loggedInId, registerSuccess } from '../../slice/authSlice';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import Picker from '@emoji-mart/react'
import CreatePost from '../createPost/CreatePost';


const Share = () => {

    const [input, setInput] = useState("");
    // const [error, setError] = useState(false);
    const [showEmojis, setShowEmojis] = useState(false);
    const loggedInUser = useSelector(authUser);
    console.log(loggedInUser);
    const loggedInUserId = useSelector(loggedInId)
    console.log(loggedInUserId)

    const currentUser = loggedInUser.find((user) => (user.id === loggedInUserId));
    console.log(currentUser)


    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className="shareTop">
                    {currentUser && currentUser.profileImage ? <img src={currentUser.profileImage} alt="" className="shareProfileImg" /> : <img src="/assets/ProfileCover/default-pic.jpg" className="shareProfileImg"></img>}






                    <textarea type="text" rows={2} style={{ resize: "none", overflow: "hidden" }} id="text"
                        // placeholder={"What's on your Mind  " +  "raj" + "?"}
                        placeholder={
                            currentUser
                                ? `What's on your mind, ${currentUser.name}?`
                                : "What's on your mind?"
                        }
                        // value={input} onChange={(e) => setInput(e.target.value)}
                        // onKeyDown={handleKey}
                        className="shareInput" />
                </div>
                <hr className="shareHr" />

                <div className='shareImgContainer'>
                    {/* <img src={URL.createObjectURL(img)} alt="" className="shareImg" /> */}
                    {/* <Close className='shareCancelImg' onClick={removeImg} /> */}

                </div>

                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">


                            <Link to="/CreatePost" style={{ textDecoration: "none" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <VideoCameraFront className='shareIcon' style={{ color: "#bb0000f2" }} />
                                <span className='shareOptionText' style={{ color: "black" }}>Live Video</span>
                            </Link>
                        </div>


                        <Link to="/CreatePost" style={{ textDecoration: "none" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <label htmlFor='file' className="shareOption">
                                <PermMedia className='shareIcon' style={{ color: "#2e0196f1" }} />
                                <span className='shareOptionText' style={{ color: "black" }}>Photo /Video</span>
                                {/* <input type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                style={{ display: "none" }}
                                onChange={(e) => setImg(e.target.files[0])}>

                            </input> */}
                            </label>
                        </Link>


                        <div onClick={() => setShowEmojis(!showEmojis)} className="shareOption">
                            <EmojiEmotions className='shareIcon' style={{ color: "#bfc600ec" }} />
                            <span className='shareOptionText'>Feelings / activity</span>
                        </div>
                    </div>

                </div>

                <CreatePost />

            </div>
        </div>
    );





}





export default Share;







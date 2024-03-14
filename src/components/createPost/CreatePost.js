import "./createPost.scss";
import React, { useState } from 'react';
import { EmojiEmotions, PermMedia, VideoCameraFront, Close } from '@mui/icons-material'
import { useSelector } from "react-redux";
import { addPost, removePost, selectAllPosts } from "../../slice/postSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { authUser, loggedInId, registerSuccess } from '../../slice/authSlice';




const CreatePost = () => {
  const loggedInUser = useSelector(authUser);
  console.log(loggedInUser);
  const loggedInUserId = useSelector(loggedInId)
  console.log(loggedInUserId)

  const currentUser = loggedInUser.find((user) => (user.id === loggedInUserId));
  console.log(currentUser)
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  console.log(image);
  const [title, setTitle] = useState("");
  console.log(title)
  const [profile, setProfile] = useState(currentUser)
  console.log(profile)

  const selectPost = useSelector(selectAllPosts);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file)
    setImage(imageUrl)
    console.log(file);
    // console.log(image)



  };



  const removeImg = (postId) => {
    // dispatch(removePost(postId))
    setImage(null)
  }
  const isvalid = Boolean(title) || Boolean(image);


  const handlePostCreate = () => {
    try {
      // const imageUrl = URL.createObjectURL(img); // Get the URL of the image
      dispatch(addPost({
        id: nanoid(),
        title,
        image,  // Store the URL in the Redux state
        Date: new Date().toISOString(),
        name: currentUser.name,
        profileImage: currentUser.profileImage



      }));
      setTitle("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };







  // console.log("Image URL:", URL.createObjectURL(img));


  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title center fs-5" id="staticBackdropLabel">Create Post</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="modal-content">
              <div className="img">
                {currentUser && currentUser.profileImage ? (<img src={currentUser.profileImage} alt="" className="shareProfileImg" />) : (<img src="/assets/ProfileCover/default-pic.jpg" className="shareProfileImg"></img>)}
              </div>
              <textarea type="text" rows={2} style={{ resize: "none", overflow: "hidden" }} id="text"
                placeholder={
                  currentUser
                    ? `What's on your mind, ${currentUser.name}?`
                    : "What's on your mind?"
                }
                value={title} onChange={(e) => setTitle(e.target.value)}

                className="shareInput" />
            </div>

            {image && (<div className='shareImgContainer'>

              <img src={image} alt="" className="shareImg" />


              <Close className='shareCancelImg' onClick={removeImg} />

            </div>
            )}

            <div className="modal-header">
              <h6 className="modal-title center " id="staticBackdropLabel">Add your Post</h6>
              <span> <VideoCameraFront className='shareIcon' style={{ color: "#bb0000f2", cursor: "pointer" }} /></span>
              <label htmlFor='file' className="shareOption">
                <PermMedia className='shareIcon' style={{ color: "#2e0196f1" }} />
                {/* <span className='shareOptionText'>Photo /Video</span> */}
                <input type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  style={{ display: "none" }}

                  onChange={handleImageChange}>

                </input>
              </label>
              <span> < PermMedia className='shareIcon' style={{ color: "#bb0000f2", cursor: "pointer" }} /></span>
              <span> <VideoCameraFront className='shareIcon' style={{ color: "#bb0000f2", cursor: "pointer" }} /></span>
              <span> <VideoCameraFront className='shareIcon' style={{ color: "#bb0000f2", cursor: "pointer" }} /></span>
            </div>



          </div>
          <div className="modal-footer width">
            <button type="button" disabled={!isvalid} onClick={handlePostCreate} className="btn btn-primary width">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

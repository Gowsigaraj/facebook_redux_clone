import React, { useState } from 'react';
import { IconButton } from '@mui/material'
import { Favorite, MoreVert, ThumbUpAltOutlined, ThumbUp, ChatBubbleOutline, ShareOutlined } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import { authUser, loggedInId } from "../../slice/authSlice";

import TimeAgo from './TimeAgo';
import { addPost, removePost, addPostComment, toggleLikePost, selectAllPosts } from "../../slice/postSlice";



import "./post.scss"
const Post = ({ posts }) => {
  // console.log(posts)
  const selectPost = useSelector(selectAllPosts);
  const dispatch = useDispatch()
  const loggedInUser = useSelector(authUser);
  console.log(loggedInUser);
  const loggedInUserId = useSelector(loggedInId)
  console.log(loggedInUserId)

  const currentUser = loggedInUser.find((user) => (user.id === loggedInUserId));
  console.log(currentUser)




  const [input, setInput] = useState('');
  const [liked, setLiked] = useState(false);

  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  // console.log(input)



  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(addPostComment({ postId: posts.id, comment: input }));
    setInput(''); 
  }

  const handleLike = () => {

    dispatch(toggleLikePost({ postId: posts.id, liked }))
    setLiked(!liked)




  }
  //   console.log('Redux State:', selectPost);
  // console.log('Select Post:', posts);
  // console.log('Post Comments:', posts.comments);

  return (


    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={posts.profileImage ? posts.profileImage : "/assets/ProfileCover/default-pic.jpg"} alt={posts.name} className="postProfileImg" />
            <span className="postUsername">{posts.name}</span>
            <TimeAgo timeStamp={posts.Date} />
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postvertbutton" />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{posts.title}</span>
          <img src={posts.image} alt="" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite className="bottomLeftIcon" style={{ color: 'red' }} />
            <ThumbUp className="bottomLeftIcon" style={{ color: '#011631' }} /> {posts.likeCount}
          </div>
          <div className="postBottomRight" onClick={() => setCommentOpen(!commentOpen)}>
            {/* <span className="postCommentText">.comments .share</span> */}
            <span className="postCommentText" >{posts.comments && posts.comments.length} .comments .share</span>

          </div>
        </div>

        <hr className="footerHr" />
        <div className="postBottomFooter">
          {/* <div className="postBottomFooterItem" onClick={()=> setLiked(!liked)} > */}
          <div className="postBottomFooterItem" onClick={handleLike} >

            {liked ?
              (<ThumbUp style={{ color: "#011631" }} className="footerIcon" />)
              : (<ThumbUpAltOutlined className='footerIcon' />)}

            <span className="footerText">Like</span>
          </div>
          <div className="postBottomFooterItem" onClick={() => setCommentBoxVisible(!commentBoxVisible)}>
            <ChatBubbleOutline className="footerIcon" />
            <span className="footerText">Comment</span>
          </div>

          <div className="postBottomFooterItem">
            <ShareOutlined className="footerIcon" />
            <span className="footerText">Share</span>
          </div>
        </div>
      </div>

      {commentBoxVisible && (<form onSubmit={handleSubmitComment} className="commentBox">
        <textarea
          className="commentInput"
          type="text"
          placeholder="Write a comment...."
          rows={1}
          style={{ resize: 'none' }}
          value={input} onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input} className="commentPost">
          Comment
        </button>
      </form>
      )}

      {commentOpen > 0 && (
        <div className="comment">
          {posts.comments && posts.comments.map((comment, index) => (

            <div key={index}>
              <div className="commentWrapper">
                <img className="commentProfileImg" src={posts.profileImage} alt="" />
                <div className="commentInfo">
                  <p className="commentText">{comment}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      )}
    </div>


  );
};

export default Post;

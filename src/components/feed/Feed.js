import React, { useEffect, useState } from 'react'
import "./feed.scss"
import Share from '../share/Share'
import Post from '../post/Post'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../slice/postSlice'
import { authUser, loggedInId } from "../../slice/authSlice";



const Feed = () => {

    const loggedInUser = useSelector(authUser);
    console.log(loggedInUser);
    const loggedInUserId = useSelector(loggedInId)
    console.log(loggedInUserId)

    const currentUser = loggedInUser.find((user) => (user.id === loggedInUserId));
    console.log(currentUser)
    const feedPost = useSelector(selectAllPosts);
    const renderedPosts = feedPost.slice().sort((a, b) => b.Date.localeCompare(a.Date)).map((post) => (
        <Post key={post.id} posts={post} />
    ))




    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share />

                {renderedPosts}


            </div>
        </div>
    )
}

export default Feed
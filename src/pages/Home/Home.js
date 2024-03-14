import React from 'react'
import "./Home.scss";
// import navbar from "./compo"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';






const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='homeContainer'>
                <Sidebar />
                 <Feed />
                <Rightbar /> 
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import "./rightbar.scss"
import { usersOnline } from "../../data"
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Rightbar = () => {

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className='contact'>
          <div className='onlineContact'>
            <span>Contacts</span>
          </div>
          <div className='icons'>
            <div className='searchBar'>
              <SearchIcon className='searchIcons' />
            </div>

            <div className='searchBar'>
              <MoreHorizIcon className='searchIcons' />
            </div>

          </div>
        </div>

        <div className='userOnline'>
          {usersOnline.map((el, i) => (
            <ul className='online' key={el.id}>
              <div className='point'>
                <img src={el.profilePicture} />
                <span> {el.name}</span>
              </div>

              <div className="red">{el.dot}</div>

            </ul>



          ))}
        </div>
      </div>



    </div>

  )
}

export default Rightbar 
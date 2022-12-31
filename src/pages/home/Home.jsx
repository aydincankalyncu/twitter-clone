import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileside/ProfileSide'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <div className='rightSide'>Right</div>
    </div>
  )
}

export default Home
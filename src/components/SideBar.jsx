import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className=' w-[25%] h-full text-white hidden  lg:flex flex-col gap-2 rounded p-2'>
      <div className=' h-[25%] flex flex-col gap-3 p-4 bg-[#121212]'>

        <Link to={'/'} className=' flex items-center gap-2 cursor-pointer mb-3'>
          <img src={assets.spotify} alt="" className=' w-10'/>
          <p className=' font-medium text-xl'> Spotify </p>
        </Link>

        <Link to={'/'} className='flex items-center gap-3 cursor-pointer'>
          <img src={assets.home_icon} alt="home-icon" className=' w-6 cursor-pointer'/>
          <p className='font-bold'> Home </p>
        </Link>

        <div className='flex items-center gap-3 cursor-pointer'>
          <img src={assets.search_icon} alt="search-icon" className=' w-6 cursor-pointer'/>
          <p className='font-bold'> Search </p>
        </div>
      </div>

      <div className='h-[85%] flex flex-col rounded bg-[#121212]'>
        <div className=' flex justify-between items-center p-4'>
          <div className='flex items-center gap-3'>
            <img src={assets.stack_icon} alt="stack-icon" className=' w-8 cursor-pointer'/>
            <p className=' font-semibold'> Your Library </p>
          </div>

          <div className='  flex items-center gap-3'>
            <img src={assets.arrow_right} alt="" className=' w-5'/>
            <img src={assets.plus_icon} alt="" className=' w-5'/>
          </div>
        </div>

        <div className=' bg-[#242424] p-4 m-2 rounded font-semibold flex flex-col items-start'>
          <p>Create your playlists</p>
          <p className='font-light mb-2'>It's easy we will help you</p>
          <button className=' bg-white text-black rounded-full px-4 py-2 text-[15px] mt-2 mb-1'>Create Playlists</button>
        </div>

        <div className=' bg-[#242424] p-4 m-2 mt-1 rounded font-semibold flex flex-col items-start'>
          <p>Let's find some podcasts to follow</p>
          <p className='font-light mb-2'>We'll keep you update on new episodes</p>
          <button className=' bg-white text-black rounded-full px-4 py-2 text-[15px] mt-2 mb-1'>Browse podcasts</button>
        </div>
      </div>

    </div>
  )
}

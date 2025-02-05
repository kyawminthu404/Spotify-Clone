import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate(); 

  return (
    <>
      <div className=' flex justify-between items-center pt-1 mb-4'>
        <div className=' flex items-center gap-2'>
          <img onClick={() => navigate(-1)} src={assets.arrow_left} alt="" className=' w-4 cursor-pointer'/>
          <img onClick={() => navigate(+1)} src={assets.arrow_right} alt="" className=' w-4 cursor-pointer'/>
        </div>

        <div className='flex items-center gap-3'>
          <p className='hidden lg:flex bg-white text-black text-[15px] px-4 py-1 font-semibold rounded-full cursor-pointer'> Explore Premium </p>
          <p className=' bg-black text-white text-[15px] px-4 py-1.5 font-semibold rounded-full cursor-pointer'> Install App </p>
          <p className=' bg-purple-600 text-black text-[15px] rounded-full w-7 h-7 font-semibold flex items-center justify-center cursor-pointer'> R </p>
        </div>
      </div>

      <div className=' flex items-center gap-3'>
        <p className='bg-white text-black rounded-full px-4 py-1 cursor-pointer'>All</p>
        <p className='bg-black text-white rounded-full px-4 py-1 cursor-pointer'>Musics</p>
        <p className='bg-black text-white rounded-full px-4 py-1 cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

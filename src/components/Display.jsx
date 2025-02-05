import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets';

export default function Display() {

  const bgRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.slice(-1) : '';
  const bgColor = albumsData[Number(albumId)].bgColor;
  
  useEffect(() => {
    if (isAlbum) {
      bgRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }else {
      bgRef.current.style.background = `#121212`;
    }
  });

  return (
    <div ref={bgRef} className=' w-full bg-[#121212] text-white rounded m-2 lg:w-[75%] lg:ml-0 px-6 pt-4 overflow-auto'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

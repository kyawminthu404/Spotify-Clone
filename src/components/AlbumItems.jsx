import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AlbumItems({id, image, name, desc}) {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] px-3 p-2 rounded hover:bg-[#ffffff24] cursor-pointer'>
      <img src={image} alt="" className=' rounded'/>
      <p className=' font-bold my-2 mb-1'>{name}</p>
      <p className=' text-sm text-slate-300'>{desc}</p>
    </div>
  )
}

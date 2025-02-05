import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

export default function SongItems({id, name, image, desc}) {

  const { PlayTrackWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => PlayTrackWithId(id)} className='min-w-[180px] px-3 p-2 rounded hover:bg-[#ffffff24] cursor-pointer'>
      <img src={image} alt="" className=' rounded'/>
      <p className=' font-bold my-2 mb-1'>{name}</p>
      <p className=' text-sm text-slate-300'>{desc}</p>
    </div>
  )
}

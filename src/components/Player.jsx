import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

export default function Player() {

  const { track, seekBg, seekBar, playStatus, time, Play, Pause, Next, Previous, SeekClick } = useContext(PlayerContext);

  return (
    <div className=' h-[10%] bg-black text-white flex justify-between items-center px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img src={track.image} alt="" className=' w-12'/>
        <div>
          <p>{track.name}</p>
          <p className='text-sm text-slate-200'>{track.desc.slice(0,15)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex items-center gap-4'>
          <img src={assets.shuffle_icon} alt="" className=' w-4 cursor-pointer'/>
          <img onClick={Previous} src={assets.prev_icon} alt="" className=' w-4 cursor-pointer'/>
          {
            playStatus
            ? <img onClick={Pause} src={assets.pause_icon} alt="" className=' w-4 cursor-pointer'/>
            :  <img onClick={Play} src={assets.play_icon} alt="" className=' w-4 cursor-pointer'/>
          }
          <img onClick={Next} src={assets.next_icon} alt="" className=' w-4 cursor-pointer'/>
          <img src={assets.loop_icon} alt="" className=' w-4 cursor-pointer'/>
        </div>

        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div onClick={SeekClick} ref={seekBg} className=' bg-gray-300 w-[60vw] max-w-[500px] rounded-full h-1'>
            <hr ref={seekBar} className=' h-1 rounded-full bg-green-700 w-0'/>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-2 opacity-75'>
          <img className=' w-4 ' src={assets.play_icon} alt="" />
          <img className=' w-4 ' src={assets.mic_icon} alt="" />
          <img className=' w-4 ' src={assets.queue_icon} alt="" />
          <img className=' w-4 ' src={assets.speaker_icon} alt="" />
          <img className=' w-4 ' src={assets.volume_icon} alt="" />
          <div className=' bg-gray-50 w-20 h-1 rounded'>

          </div>
          <img className=' w-4 ' src={assets.mini_player_icon} alt="" />
          <img className=' w-4 ' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

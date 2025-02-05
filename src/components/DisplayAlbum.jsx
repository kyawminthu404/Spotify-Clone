import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import NavBar from './NavBar';
import { PlayerContext } from '../context/PlayerContext';

export default function DisplayAlbum() {

  const { id } = useParams();
  const albumData = albumsData[id];
  const { PlayTrackWithId } = useContext(PlayerContext);

  return (
    <>
      <NavBar/>

      <div className='mt-10 flex flex-col gap-8 md:flex-row md:items-end'>
        <img src={albumData.image} alt="" className=' w-48 rounded'/>
        <div className=' flex flex-col'>
          <p> Playlist </p>
          <h1 className=' text-5xl md:text-7xl font-bold mb-4'>{albumData.name}</h1>
          <h2> Your weekly update of the most played tracks </h2>
          <p className=' mt-1'>
            <img src={assets.spotify_logo} alt="" className=' w-4 inline mr-1'/>
            <b>Spotify </b>
            . 1,323,154 likes
            . <b>50 songs,</b>
            about 2 hrs 30 mins
          </p>
        </div>
      </div>

      <div className=' grid grid-cols-[3fr_2fr_2fr] sm:grid-cols-[3fr_2fr_2fr_2fr] mt-10 pl-2 mb-4 text-[#a7a7a7]'>
        <p><b className='mr-1'> # </b> Title</p>
        <p>Album</p>
        <p className=' hidden sm:flex'>Date Added </p>
        <img src={assets.clock_icon} alt="" className=' m-auto w-4'/> 
      </div>

      <hr />

      {
        songsData.map((item, index) => {
          if(item.type === albumData.category || item.trending === albumData.trendingSongs) {
            return (
              <div onClick={() => PlayTrackWithId(item.id)} key={index} className=' grid grid-cols-[3fr_2fr_2fr] items-center sm:grid-cols-[3fr_2fr_2fr_2fr] gap-4 p-2 text-[#a7a7a7] hover:bg-[#ffffff26]'>
                <p className='grid grid-cols-[0.2fr_0.5fr_2fr] gap-4 md:gap-1 items-center text-white text-sm'>
                  <b className='text-[#a7a7a7]'>{index + 1}</b>
                  <img src={item.image} alt="" className='inline w-10'/>
                  {item.name}
                </p>
                
                <p className=' text-[15px]'>{albumData.name}</p>
                <p className=' text-[15px] hidden sm:block'> 5 days ago </p>
                <p className=' text-[15px] text-center'>{item.duration}</p>
              </div>
            )
          }
        })
      }
    </>
  )
}

import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import SongItems from './SongItems'

export default function DisplayHome() {
  return (
    <>
      <NavBar/>

      <div className=' mb-4'>
        <h1 className='text-2xl font-bold my-5'> Feature Charts </h1>

        <div className=' flex overflow-auto'>
          {
            albumsData.map((item,index) => 
              <AlbumItems key={index} id={item.id} name={item.name} image={item.image} desc={item.desc}/>
            )
          }
        </div>
      </div>

      <div className=' mb-4'>
        <h1 className='text-2xl font-bold my-5'> Today's biggest hits </h1>

        <div className=' flex overflow-auto'>
          {
            songsData.map((item,index) => 
              <SongItems key={index} id={item.id} name={item.name} image={item.image} desc={item.desc}/>
            )
          }
        </div>
      </div>

      <div className=' mb-4'>
        <h1 className='text-2xl font-bold my-5'> Today's biggest hits </h1>

        <div className=' flex overflow-auto'>
          {
            songsData.map((item,index) => 
             {
              if(item.giveLove) {
                return (
                  <SongItems key={index} id={item.id} name={item.name} image={item.image} desc={item.desc}/>
                )
              }
             }
            )
          }
        </div>
      </div>
    </>
  )
}

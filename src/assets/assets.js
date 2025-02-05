import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import spotify from './spotify.png'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import drowning from './drowning.mp3'
import runwithme from './runwithme.mp3'
import summernight from './summerNight.mp3'
import sadness from './sadness.mp3'
import twosoon from './twosoon.mp3'

import love from './love.jpg'
import bad from './bad.jpg'
import season from './season.jpg'
import woodz from './woodz.jpg'
import sunwoo from './sunwoo.jpg'
import summerNight from './summerNight.jpg'
import jeonjinhee from './jeonjinhee.jpg'
import keshi from './keshi.jpg'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    spotify
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 English",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365",
        category: 'global'
    },
    {   
        id:1,
        name: "Top 50 Korea",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d",
        category: 'korea'
    },
    {   
        id:2,
        name: "Trending Korea",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a",
        trendingSongs: 'trend'
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a",
        trendingSongs: 'global-trend'
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Sad Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Love",
        image: love,
        file:song1,
        desc:"Wave to earth",
        duration:"05:07",
        giveLove: true,
        type: 'korea',
        trending: 'trend'
    },
    {
        id:1,
        name: "Bad",
        image: bad,
        file:song2,
        desc:"Wave to earth",
        duration:"04:23",
        giveLove: true,
        type: 'korea',
        trending: 'trend'
    },
    {
        id:2,
        name: "Season",
        image: season,
        file:song3,
        desc:"Wave to earth",
        duration:"04:16",
        giveLove: false,
        type: 'korea',
        trending: 'trend'
    },
    {
        id:3,
        name: "Drowning",
        image: woodz,
        file:drowning,
        desc:"Woodz",
        duration:"04:05",
        giveLove: true,
        type: 'korea',
        trending: 'trend'
    },
    {
        id:4,
        name: "Run with me",
        image: sunwoo,
        file:runwithme,
        desc:"Sunwoo Junga",
        duration:"3:10",
        giveLove: true,
        type: 'korea',
        trending: 'no-trend'
    },
    {
        id:5,
        name: "Summer,night",
        image: summerNight    ,
        file:summernight,
        desc:"Jeon Jin Hee (.feat wave to earth)",
        duration:"2:45",
        giveLove: true,
        type: 'korea',
        trending: 'trend'
    },
    {
        id:6,
        name: "When our sadness meets",
        image: jeonjinhee,
        file:sadness,
        desc:"Jeon Jin Hee",
        duration:"2:18",
        giveLove: true,
        type: 'korea',
        trending: 'no-trend'
    },
    {
        id:7,
        name: "2 soon",
        image: keshi,
        file:twosoon,
        desc:"Keshi",
        duration:"2:35",
        giveLove: false,
        type: 'global',
        trending: 'global-trend'

    },
    {
        id:8,
        name: "2 soon",
        image: keshi,
        file:twosoon,
        desc:"Keshi",
        duration:"2:35",
        giveLove: false,
        type: 'global',
        trending: 'global-trend'

    },
    {
        id:9,
        name: "2 soon",
        image: keshi,
        file:twosoon,
        desc:"Keshi",
        duration:"2:35",
        giveLove: false,
        type: 'global',
        trending: 'global-trend'

    },
    {
        id:10,
        name: "2 soon",
        image: keshi,
        file:twosoon,
        desc:"Keshi",
        duration:"2:35",
        giveLove: false,
        type: 'global',
        trending: 'no-global-trend'

    },
    {
        id:11,
        name: "2 soon",
        image: keshi,
        file:twosoon,
        desc:"Keshi",
        duration:"2:35",
        giveLove: false,
        type: 'global',
        trending: 'no-global-trend'

    },
    {
        id:12,
        name: "2 soon",
        image: keshi,
        file:twosoon,
        desc:"Keshi",
        duration:"2:35",
        giveLove: false,
        type: 'global',
        trending: 'global-trend'

    },
]
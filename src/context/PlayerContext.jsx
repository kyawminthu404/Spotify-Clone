import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [ track, setTrack ] = useState(songsData[0]);
  const [ playStatus, setPlayStatus ] = useState(false);
  const [ time, setTime ] = useState({
    currentTime: {
      second: '00',
      minute: '00'
    },
    totalTime: {
      second: '00',
      minute: '00'
    }
  });

  const Play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }

  const Pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const Next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const Previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const PlayTrackWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }

  const SeekClick = (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)* audioRef.current.duration);
  }

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {

        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)) + '%';

        setTime({
          currentTime: {
            second: String(Math.floor(audioRef.current.currentTime % 60)).padStart(2, '00'),
            minute: String(Math.floor(audioRef.current.currentTime / 60)).padStart(2, '00')
          },
          totalTime: {
            second: String(Math.floor(audioRef.current.duration % 60)).padStart(2, '00'),
            minute: String(Math.floor(audioRef.current.duration / 60)).padStart(2, '00')
          }
        })
      }
    }, 1000);
  }, [audioRef]);

  const value = {
    audioRef,
    seekBg,
    seekBar,
    track,setTrack,
    playStatus,setPlayStatus,
    time,setTime,
    Play,
    Pause,
    Next,
    Previous,
    PlayTrackWithId,
    SeekClick
  }

  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;
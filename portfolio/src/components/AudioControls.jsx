import React, { useEffect, useState } from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'

import { useAudioPlayer } from '../utils/audio-hook'
import audio from '../assets/audios/Almost.mp3'

const AudioControls = () => {
    const { curTime, duration, isPlaying, setClickedTime, setIsPlaying } = useAudioPlayer(audio)
    const [hovered, setHovered] = useState(false)

  return (
    <div className={style.container} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {isPlaying ? (
        <button className={style.button} onClick={() => setIsPlaying(false)}>
            <FiPause />
        </button>
        ) : (
        <button className={style.button} onClick={() => setIsPlaying(true)}>
            <FiPlay />
        </button>
        )}
        {hovered &&
        <div className={style.desc}>
            <div className={style.time}></div>
        </div>
        }
    </div>
  )
}

const style = {
    container: `w-8 h-8 flex items-center justify-center bg-white fixed top-20 right-5 z-50 rounded-full
    hover:w-200 hover:h-[50px] hover:flex-col hover:justify-none hover:rounded duration-500 ease-in-out`,
    button: `text-primary cursor-pointer`,
    desc: `w-full h-[20px] px-1 py-2`,
    time: `w-full h-1 bg-primary`
}

export default AudioControls
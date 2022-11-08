import { useEffect, useState } from 'react'

export const useAudioPlayer = (audioFile) => {
    const [curTime, setCurTime] = useState()
    const [clickedTime, setClickedTime] = useState()
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState()

    useEffect(() => {
        const audio = new Audio(audioFile)

        const setAudioData = () => {
            setDuration(audio.duration)
            setCurTime(audio.currentTime)
        }

        const setAudioTime = () => setCurTime(audio.currentTime)

        audio.addEventListener('loadeddata', setAudioData)
        audio.addEventListener('timeupdate', setAudioTime)
        
        isPlaying ? audio.play() : audio.pause()

        if(clickedTime && clickedTime !== curTime) {
            audio.currentTime = clickedTime
           setClickedTime(null)
        }

        return () => {
            audio.removeEventListener('loadeddata', setAudioData)
            audio.removeEventListener('timeupdate', setAudioTime)
        }
    })

    return {curTime, duration, isPlaying, setIsPlaying, setClickedTime}
}
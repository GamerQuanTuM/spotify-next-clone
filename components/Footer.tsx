"use client"
import { useEffect, useRef, useState } from "react"
import {
  HeartIcon as SolidHeartIcon, PauseIcon, PlayIcon, ArrowPathRoundedSquareIcon
} from "@heroicons/react/24/solid"
import {
  HeartIcon as OutlineHeartIcon
} from "@heroicons/react/24/outline"

import { BsShuffle as ShuffleIcon } from "react-icons/bs"
import { RiRepeatFill as RepeatIcon } from "react-icons/ri"
import { AiFillFastForward as ForwardIcon, AiFillFastBackward as BackwardIcon } from "react-icons/ai"
import { TbMicrophone2 as MicrophoneIcon } from "react-icons/tb"
import {
  HiOutlineQueueList as QueueIcon,
  HiOutlineSpeakerWave as SpeakerUnmuteIcon,
  HiOutlineSpeakerXMark as SpeakerMuteIcon
}
  from "react-icons/hi2"
import { TbDevices2 as ConnectIcon } from "react-icons/tb"
import myAudio from '../public/Run_BTS.mp3';
import "../styles/range.css"


export default function Footer() {

  type Audio = {
    src?: string | undefined
  }


  const Song: string = myAudio
  const [solidheartIcon, setSolidHearIcon] = useState<boolean>(true)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio(Song));

  useEffect(() => {
    audioRef?.current?.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    audioRef?.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime);
    });

    audioRef?.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current.duration);
    });

    return () => {
      audioRef?.current.removeEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      audioRef?.current.removeEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
      });

      audioRef?.current.removeEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });
    };
  }, []);

  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef?.current.pause();
    } else {
      audioRef?.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeekBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = Number(event.target.value);
    //audioRef.current.currentTime === Gets or sets the current playback position, in seconds.
    audioRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetVolume = Number(event.target.value);
    //Gets or sets the volume level for audio portions of the media element.
    audioRef.current.volume = targetVolume;
    setVolume(targetVolume);
  };

  const handleMute = () => {
    const audio = audioRef?.current;
    if (!audio) return;
    //audio.muted === Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}`;
  };

  const elapsedTime = formatTime(currentTime);
  const remainingTime = formatTime(duration - currentTime);


  const changeIcon = (): void => {
    setSolidHearIcon(!solidheartIcon)
  }
  return (
    <div className='text-white flex justify-between mx-6 mt-3'>

      {/* Artist and Song */}
      <div className="flex items-center space-x-5">
        <div className='flex flex-col space-y-1 tracking-wide'>
          <h2>WANNABE</h2>
          <p className='text-xs text-[#938c8c]'>ITZY</p>
        </div>

        <div onClick={changeIcon}>
          {
            solidheartIcon ?
              <OutlineHeartIcon className="h-6 w-6" />
              :
              <SolidHeartIcon className="h-6 w-6" color="#1DB954" />
          }
        </div>
      </div>

      {/* Seekbar */}
      <div className="self-center ml-[80px]">
        <div className="flex space-x-8 justify-center items-center mb-2">
          <div>
            <ShuffleIcon className="h-4 w-4 text-gray-300/70 self-center" />
          </div>

          <div>
            <BackwardIcon className="h-8 w-8 text-gray-300/70" />
          </div>

          <div onClick={handleAudioToggle}>
            {isPlaying ? <PauseIcon className="h-9 w-9 rounded-full bg-white p-[5px]" color='#191414' /> : <PlayIcon className="h-9 w-9 rounded-full bg-white p-[5px]" color='#191414' />}
            <audio ref={audioRef} src={myAudio} />
          </div>

          <div>
            <ForwardIcon className="h-8 w-8 text-gray-300/70" />
          </div>

          <div>
            <RepeatIcon className="h-4 w-4 text-gray-300/70 self-center" />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <p className="text-white text-xs self-center">{elapsedTime}</p>
          <input
            className="w-[550px] h-1 appearance-none hover:bg-[#1DB954]"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeekBar}
          />
          <p className="text-white text-xs self-center">{remainingTime}</p>
        </div>
      </div>

      {/* Options */}
      <div className="flex space-x-3 justify-center items-center">

        <div>
          <MicrophoneIcon className="w-5 h-5 text-gray-300/70" />
        </div>
        <div>
          <QueueIcon className="w-5 h-5 text-gray-300/70" />
        </div>
        <div>
          <ConnectIcon className="w-5 h-5 text-gray-300/70" />
        </div>
        <div onClick={handleMute}>
          {isMuted || volume === 0 ?
            <SpeakerMuteIcon className="w-5 h-5 text-gray-300/70" />
            :
            <SpeakerUnmuteIcon className="w-5 h-5 text-gray-300/70" />}
        </div>

        <input
          className="h-1 appearance-none hover:bg-[#1DB954] ml-1"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : audioRef?.current?.volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

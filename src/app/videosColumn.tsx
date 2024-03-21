import React, { useState } from 'react'
import { user } from './testUsers'
import { useVideoContext } from './_context/videoContext'


type Props = {
  usersVideoCollection: user[]
}

export const VideoColumn: React.FC<Props> = ({ usersVideoCollection }) => {
  
  const {setVideoPlayer, loader2, setLoader2} = useVideoContext()

  
  
  const userVideosJSX = usersVideoCollection?.map((userVideos: any) =>
    userVideos.map((video: any) => {
       return (
        <div
        key={video.testkey}
        className="flex border-2 border-[#d8cbcb] w-full h-full bg-[#d8cbcb] text-center justify-center items-center"
      >
        <button onClick={() =>{
          setLoader2(true)
          setTimeout(() => {
            setVideoPlayer(video)
            setLoader2(false)
          }, 1500)
        }}>
          <video key={video.testkey} className="h-full" >
            <source src={video.video_file} type="video/mp4" />
          </video>
        </button>
      </div>
       )
      
     })
      
    )

    

  return (
    <div className="flex flex-col gap-3 border w-full md:w-[50%] md:border-r-black h-[100dvh] p-5">
      <div className="text-center">random_videos</div>
      <div className="grid grid-cols-2 gap-4">{userVideosJSX ? userVideosJSX : <div className='loader'>Loading</div>}</div>
    </div>
  )
}

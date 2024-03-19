import React from 'react'
import { useVideoContext } from './_context/videoContext'


export function VideoPlayer() {
  const {currentVideo} = useVideoContext()

  
 
  
  
  return (
    <div className="flex flex-col gap-4 w-full px-4 ">
      <div className="text-center pt-4 underline">
        213123_00 Title Example 1
      </div>

      <div className="flex items-center justify-center w-full h-fit">
      <video id='video_test'autoPlay controls src={currentVideo} />
      </div>
      <div className="text-center underline">
        213123_00 Title Example 1 DESCRIPTION HERE
      </div>
    </div>
  )
}

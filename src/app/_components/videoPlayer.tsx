import React, { use, useEffect, useState } from 'react'
import { useVideoContext } from '../../lib/_context/videoContext'

export function VideoPlayer() {
  const { currentVideo, loader2 } = useVideoContext()
  const [video, setVideo] = useState<any>()

  useEffect(() => {
    if (currentVideo.length === 0) {
      setVideo(false)
    } else currentVideo.length === 1 && setVideo(currentVideo)
  }, [currentVideo, setVideo])

  return (
    <>
      {!loader2 && video ? (
        video.map(
          (video_info: {
            id: number
            title: string
            testkey: number
            video_file: string
          }) => {
            return (
              <div
                key={video_info.testkey}
                className="flex flex-col gap-4 w-full px-4 "
              >
                <div className="text-center pt-4 underline">
                  {video_info.title}
                </div>
                <div className="flex items-center justify-center w-full h-fit">
                  <video
                    id="video_test"
                    autoPlay
                    controls
                    src={video_info.video_file}
                  />
                </div>
                <div className="text-center underline">{video_info.title}</div>
              </div>
            )
          }
        )
      ) : (
        <div className='flex justify-center items-center w-[100%]'>
          <div className="loader">Loading...</div>
        </div>
      )}
    </>
  )
}

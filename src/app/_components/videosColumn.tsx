import React, { useState } from 'react'
import { user } from '../testUsers'
import { useVideoContext } from '../_context/videoContext'
import { useParams } from 'next/navigation'

export interface Props {
  usersVideoCollection: user[]
  userArchive: userArchive
}

type userArchive = {
  username: string
  userVideos: []
}

export const VideoColumn: React.FC<Props> = ({
  usersVideoCollection,
  userArchive,
}) => {
  const params = useParams<{ username: string }>()

  const { setVideoPlayer, loader2, setLoader2 } = useVideoContext()
  

  const userVideosJSX = usersVideoCollection?.map((userVideos: any) =>
    userVideos.map((video: any) => {
      return (
        <div
          key={video.testkey}
          className="flex border-2 border-[#d8cbcb] w-full h-full bg-[#d8cbcb] text-center justify-center items-center"
        >
          <button
            onClick={() => {
              setLoader2(true)
              setTimeout(() => {
                setVideoPlayer(video)
                setLoader2(false)
              }, 1500)
            }}
          >
            <video key={video.testkey} className="h-full">
              <source src={video.video_file} type="video/mp4" />
            </video>
          </button>
        </div>
      )
    })
  )

  

  return (
    <>
      {userArchive?.username && userArchive?.username === params?.username ? (
        <div className="flex flex-col gap-5 border border-x-0 w-full h-[100dvh] p-5">
          <div className="text-xs bg-[#dedede] w-fit p-[2px] px-4 rounded-2xl text-[#424040]">all your random_videos that are out there:</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {userArchive.userVideos ? (
              userArchive.userVideos.map((video_info: any) => {
                return (
                  <video key={video_info.testkey} className="h-full w-full" src={video_info.video_file} ></video>
                )
              })
            ) : (
              <div className="loader">Loading</div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 border w-full md:w-[50%] md:border-r-black h-[100dvh] p-5">
          <div className="text-center">random_videos</div>
          <div className="grid grid-cols-2 gap-4">
            {userVideosJSX ? (
              userVideosJSX
            ) : (
              <div className="loader">Loading</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

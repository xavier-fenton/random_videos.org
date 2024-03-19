import React from 'react'
import { user } from './testUsers'

type Props = {
  users: user[]
}

export const VideoColumn: React.FC<Props> = ({ users }) => {
  // flatMap for typescript here
  const userVideosJSX = users.flatMap((userInfo) =>
    userInfo.userVideos.map((userVideo) => (
      <div
        key={userVideo.id}
        className="flex border-2 border-[#d8cbcb] w-full h-full bg-[#d8cbcb] text-center justify-center items-center"
      >
        <button>
          <video className="h-full" key={userVideo.id}>
            <source src={userVideo.video_file} type="video/mp4" />
          </video>
        </button>
      </div>
    ))
  )

  return (
    <div className="flex flex-col gap-3 border w-full md:w-[50%] md:border-r-black h-[100dvh] p-5">
      <div className="text-center">random_videos</div>
      <div className="grid grid-cols-2 gap-4">{userVideosJSX}</div>
    </div>
  )
}

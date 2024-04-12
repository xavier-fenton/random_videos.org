import React, { useEffect, useState } from 'react'
import { user } from '../testUsers'
import { useVideoContext } from '../../lib/_context/videoContext'
import { useParams } from 'next/navigation'
import { useFireBaseAuth } from '../../lib/_providers/FireBaseAuthProvider'

import { getStorage } from 'firebase/storage'
import NewVideoPlayer from './newVideoPlayer'

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
  const { user } = useFireBaseAuth()
  const [videos, setVideos] = useState<any>()
  const storage = getStorage()
  const params = useParams<{ username: string }>()
  const [source, setSource] = useState<string>()
  const [visibility, setVisibility] = useState<boolean>(false)

  const { setVideoPlayer, loader2, setLoader2 } = useVideoContext()
  
  const handleClick = (e: any) => {
    e.preventDefault()
    console.log(e.target.src)
    setSource(e.target.src)
    setVisibility(true)
  }
  return (
    <>
      {visibility ? (
          <NewVideoPlayer source={source} visibility={setVisibility} />
      ) : null}
      <div className="grid grid-cols-4 gap-4">
          <video
            onClick={handleClick}
            className="h-full w-[100%] cursor-pointer"
            src="2022-09-20 21-05-09.mp4"
          />
          <video
            onClick={handleClick}
            className="h-full w-[100%] cursor-pointer"
            src="2022-09-20 21-05-09.mp4"
          />
          <video
            onClick={handleClick}
            className="h-full w-[100%] cursor-pointer"
            src="2022-09-20 21-05-09.mp4"
          />
          <video
            onClick={handleClick}
            className="h-full w-[100%] cursor-pointer"
            src="2022-09-20 21-05-09.mp4"
          /><video
          onClick={handleClick}
          className="h-full w-[100%] cursor-pointer"
          src="2022-09-20 21-05-09.mp4"
        />
        <video
          onClick={handleClick}
          className="h-full w-[100%] cursor-pointer"
          src="2022-09-20 21-05-09.mp4"
        />
        <video
          onClick={handleClick}
          className="h-full w-[100%] cursor-pointer"
          src="2022-09-20 21-05-09.mp4"
        />
        <video
          onClick={handleClick}
          className="h-full w-[100%] cursor-pointer"
          src="2022-09-20 21-05-09.mp4"
        /><video
        onClick={handleClick}
        className="h-full w-[100%] cursor-pointer"
        src="2022-09-20 21-05-09.mp4"
      />
      <video
        onClick={handleClick}
        className="h-full w-[100%] cursor-pointer"
        src="2022-09-20 21-05-09.mp4"
      />
      <video
        onClick={handleClick}
        className="h-full w-[100%] cursor-pointer"
        src="2022-09-20 21-05-09.mp4"
      />
      <video
        onClick={handleClick}
        className="h-full w-[100%] cursor-pointer"
        src="2022-09-20 21-05-09.mp4"
      />
      </div>
    </>
  )
}

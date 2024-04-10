import React, { useEffect, useState } from 'react'
import { user } from '../testUsers'
import { useVideoContext } from '../../lib/_context/videoContext'
import { useParams } from 'next/navigation'
import { useFireBaseAuth } from '../../lib/_providers/FireBaseAuthProvider'

import { getStorage } from 'firebase/storage'

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
  const {user} = useFireBaseAuth()
  const [videos, setVideos] = useState<any>()
  const storage = getStorage()
  const params = useParams<{ username: string }>()
  


  
  const { setVideoPlayer, loader2, setLoader2 } = useVideoContext()
  


  

  return (
    <>
      
        <div className="flex flex-col gap-3 border w-full md:border-r-black h-[100dvh] p-5">
          <div className="text-center text-sm">explore</div>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
       
    </>
  )
}

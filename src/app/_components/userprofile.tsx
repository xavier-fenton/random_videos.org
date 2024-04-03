import React, { useState } from 'react'
import { VideoPlayer } from './videoPlayer'
import Uploadvideo from './uploadvideo'
import { VideoColumn } from './videosColumn'
import {
  useFireBaseAuth,
} from '../_providers/FireBaseAuthProvider'
import UserProfileHeader from './_subcomponents/userProfileHeader'
import { useRouter } from 'next/router'

export const UserProfile = () => {
  const [state, setState] = useState('user archive:')

  const router = useRouter()
  const { username } = router.query
  const { user } = useFireBaseAuth()

  const handleButtonClicked = (e: Event | any) => {
    setState(e.target.innerHTML)
  }
  const handleBackButton = (e: Event | any) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <>
      { user?.email === username ? 
        <div className="pt-4 flex flex-col">
          <div className="flex">
            <div className='gap-4'>
            <button className="text-[#eee] text-sm bg-gray-400 rounded-r-2xl px-2" onClick={handleBackButton}>back to explorer</button>
            <UserProfileHeader user={user}/>
            </div>
            <div
              onClick={handleButtonClicked}
              id="user_archive"
              className="flex justify-center items-center cursor-pointer w-fit  bg-[#dedede] rounded-t-lg px-2 text-xs py-[2px]"
            >
              user archive:
            </div>
            <div
              onClick={handleButtonClicked}
              id="user_upload"
              className="flex justify-center items-center cursor-pointer w-fit bg-[#f1f1f1] rounded-t-lg px-2 text-xs py-[2px]"
            >
              user upload
            </div>
          </div>
          <div className="flex flex-col w-[100%] h-[100dvh]">
            {state === 'user archive:' ? (
            <VideoColumn />
          ) : state === 'user upload' ? (
            <Uploadvideo />
          ) : (
            <VideoPlayer />
          )}
          </div>
        </div>
      : <div>Wrong place go back</div>}
    </>
  )
}

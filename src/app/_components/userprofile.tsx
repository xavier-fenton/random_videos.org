import React, { useState } from 'react'
import { VideoPlayer } from './videoPlayer'
import Uploadvideo from './uploadvideo'
import { TestUsers as userVideos } from '../testUsers'
import { VideoColumn } from './videosColumn'
import { FireBaseAuthProvider } from '../_providers/FireBaseAuthProvider'
import UserProfileHeader from './_subcomponents/userProfileHeader'

export type Props = {
  user: any
}

export const UserProfile: React.FC<Props> = ({ user }) => {
  const [state, setState] = useState('user archive:')
  const [userArchive, setUserArchive] = useState(user)

  const handleButtonClicked = (e: any) => {
    setState(e.target.innerHTML)
  }

  return (
      <div className="pt-4 flex flex-col">
        <div className="flex pl-4">
          <UserProfileHeader user={user} />
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
            <VideoColumn userArchive={userArchive} />
          ) : state === 'user upload' ? (
            <Uploadvideo />
          ) : (
            <VideoPlayer userArchive={userArchive} />
          )}
        </div>
      </div>
  )
}

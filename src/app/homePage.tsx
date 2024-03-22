import React, { useEffect } from 'react'
import { useVideoContext } from './_context/videoContext'
import { VideoColumn } from './videosColumn'
import { VideoPlayer } from './videoPlayer'
import NotUser from './notUser'

const HomePage = () => {
  const { loader, setLoader, userVideos } = useVideoContext()

  
  useEffect(() => {
    // Update loader state after userVideos is loaded
    if (userVideos === undefined) {
      setLoader(true)
    } else {
      setLoader(false)
    }
  }, [userVideos, setLoader])

  return (
    <>
      {loader ? (
        <div className='flex justify-center items-center pt-10 h-[100dvh]'>
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          {!loader && userVideos.length ? (
            <>
              <div className="flex flex-col w-full md:flex-row">
                <VideoColumn usersVideoCollection={userVideos} />
                <VideoPlayer />
              </div>
            </>
          ) : (
            <NotUser />
          )}
        </>
      )}
    </>
  )
}

export default HomePage

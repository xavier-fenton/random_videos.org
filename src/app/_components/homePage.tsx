import React, { useEffect } from 'react'
import { useVideoContext } from '../../lib/_context/videoContext'
import { VideoColumn } from './videosColumn'
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
                <VideoColumn usersVideoCollection={userVideos} />
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

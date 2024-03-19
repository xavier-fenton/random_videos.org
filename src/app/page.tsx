"use client"
import '../app/globals.css'
import Header from './header'
import { VideoPlayer } from './videoPlayer'
import { VideoColumn } from './videosColumn'
import { TestUsers as users } from './testUsers'
import { VideoPlayerProvider } from './_context/videoContext'

export default function Home() {
  return (
    <>
      <VideoPlayerProvider>
        <Header />
        {users ? (
          <>
            <div className="flex flex-col w-full md:flex-row">
              <VideoColumn users={users} />
              <VideoPlayer />
            </div>
          </>
        ) : (
          // This will be it's own component soon
          <div className="text-center pt-10">
            <div>Not a user </div>
            <div>Login here</div>
            <div className="bg-[#51f0a6] border-red-100 w-fit rounded-2xl text-xs p-2 px-4 absolute bottom-4 ml-4">
              welcome explorer!
            </div>
          </div>
        )}
      </VideoPlayerProvider>
    </>
  )
}

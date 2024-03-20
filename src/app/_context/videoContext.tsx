import { createContext, ReactNode, useContext, useState } from "react"
import {TestUsers } from "../testUsers"

type videoContextProviderProps = {
  children: ReactNode
}

type videoInfo = {
  
}

type VideoPlayerContext = {
  setVideoPlayer: (arg: any) => void
  currentVideo: any
  setCurrentVideo: any
  loader: boolean
  setLoader: (arg: boolean) => void
}

const VideoPlayerContext = createContext({} as VideoPlayerContext)

export function useVideoContext() {
  return useContext(VideoPlayerContext)
}


const getUserVideos= TestUsers.flatMap((user_info) => {
  return user_info.userVideos.map((video_info) => {    
    return video_info.video_file
  })
})





export function VideoPlayerProvider({ children }: videoContextProviderProps) {
  const [loader, setLoader] = useState(false)
  const [currentVideo, setCurrentVideo] = useState('/2024-01-30 16-08-03.mp4')
  

 function setVideoPlayer(arg: string){
  setCurrentVideo(arg)
  
 }

  return (
    <VideoPlayerContext.Provider
      value={{setVideoPlayer, currentVideo, setCurrentVideo, setLoader, loader}}
    >
      {children}
    </VideoPlayerContext.Provider>
  )
}
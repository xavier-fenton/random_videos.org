import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { TestUsers } from "@component/app/testUsers"

type videoContextProviderProps = {
  children: ReactNode
}

type videoInfo = {
  
}

type VideoPlayerContext = {
  setVideoPlayer: (arg: any) => void
  currentVideo: any
  setCurrentVideo: (arg: string[]) => void
  loader: boolean
  setLoader: (arg: boolean) => void
  userVideos: any
  loader2: boolean
  setLoader2: (arg: boolean) => void
}

const VideoPlayerContext = createContext({} as VideoPlayerContext)

export function useVideoContext() {
  return useContext(VideoPlayerContext)
}







export function VideoPlayerProvider({ children }: videoContextProviderProps) {
  const [loader, setLoader] = useState(true)
  const [loader2, setLoader2] = useState(true)

  const [currentVideo, setCurrentVideo] = useState<string[]>([])
  const [userVideos, setUserVideos] = useState()

  
 
 
 useEffect(() => {
  fetch('/api/users').then((res) => 
    res.json()
  ).then((data: any) => {
    const userVids = data.map((users: any) => {
      return users.userVideos
    })
    
    setUserVideos(userVids)
    
  });
 }, [])

 
 function setVideoPlayer(arg: any){
  
  setCurrentVideo([arg])
  
 }

  return (
    <VideoPlayerContext.Provider
      value={{setVideoPlayer, currentVideo, setCurrentVideo, setLoader, loader, userVideos, loader2, setLoader2}}
    >
      {children}
    </VideoPlayerContext.Provider>
  )
}
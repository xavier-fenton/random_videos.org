"use client"
import '../app/globals.css'
import Header from './_components/header'
import { VideoPlayerProvider } from './_context/videoContext'
import HomePage from './_components/homePage'

export default function Home() {

 return (
   <>
      <VideoPlayerProvider>
        <Header />
        <HomePage />
        
      </VideoPlayerProvider>
    </>
  )
}

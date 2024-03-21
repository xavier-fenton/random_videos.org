"use client"
import '../app/globals.css'
import Header from './header'
import { VideoPlayerProvider } from './_context/videoContext'
import HomePage from './homePage'

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

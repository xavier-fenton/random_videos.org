'use client'
import '../app/globals.css'
import Header from './_components/header'
import { VideoPlayerProvider } from './_context/videoContext'
import HomePage from './_components/homePage'

import TestUserFirebase from './testuserfirebase'
import { FireBaseAuthProvider } from './_providers/FireBaseAuthProvider'

export default function Home() {
  return (
    <>
      <FireBaseAuthProvider>
        <VideoPlayerProvider>
          <TestUserFirebase />
          <Header />
          <HomePage />
        </VideoPlayerProvider>
      </FireBaseAuthProvider>
    </>
  )
}

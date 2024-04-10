// app/RootLayout.tsx
'use client'

import './app/globals.css';
import Header from './app/_components/header';
import { VideoPlayerProvider } from './lib/_context/videoContext';
import { FireBaseAuthProvider } from './lib/_providers/FireBaseAuthProvider';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <FireBaseAuthProvider>
      <VideoPlayerProvider>
        <div className='px-4 pt-10'>
          <Header />
        </div>
        {children}
      </VideoPlayerProvider>
    </FireBaseAuthProvider>
  )
}

// app/RootLayout.tsx
'use client';

import './app/globals.css';
import Header from './app/_components/header';
import { VideoPlayerProvider } from './app/_context/videoContext';
import { FireBaseAuthProvider } from './app/_providers/FireBaseAuthProvider';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <FireBaseAuthProvider>
      <VideoPlayerProvider>
        <Header />
        {children}
      </VideoPlayerProvider>
    </FireBaseAuthProvider>
  );
}
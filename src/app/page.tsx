// app/page.tsx
'use client';

import RootLayout from '@component/RootLayout';
import HomePage from './_components/homePage';

export default function Home() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}
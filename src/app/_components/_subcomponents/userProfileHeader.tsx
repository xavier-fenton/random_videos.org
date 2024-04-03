import { auth } from '@component/firebase/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Props } from '../userprofile'

const UserProfileHeader = ({user}: Props) => {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="flex text-sm pr-4 items-center">
      <div className="text-xs">hello</div>
      <div className="text-2xl">{user?.email}</div>
      <button onClick={handleSignOut}>sign out</button>
    </div>
  )
}

export default UserProfileHeader

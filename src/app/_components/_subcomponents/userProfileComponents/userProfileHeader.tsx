import { auth } from '@component/firebase/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FireAuthContext } from '@component/lib/_providers/FireBaseAuthProvider'

const UserProfileHeader = ({user}: FireAuthContext) => {
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
    <div className="flex text-sm px-4 items-center gap-4">
      <div className="text-xs">hello</div>
      <div className="text-2xl">{user?.email}</div>
      <button onClick={handleSignOut}>sign out</button>
    </div>
  )
}

export default UserProfileHeader

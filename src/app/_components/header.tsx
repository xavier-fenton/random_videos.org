import React from 'react';
import { useFireBaseAuth } from '../../lib/_providers/FireBaseAuthProvider';
import { useRouter } from 'next/navigation';
import SignInButton from './_subcomponents/signInButton';
import SignUpButton from './_subcomponents/signUpButton';

export default function Header(){

export default function Header() {
  const { user } = useFireBaseAuth()

  const router = useRouter()
  const handleClick = () => {
    router.push(`/profile/${user?.email}`)
  }

  return (
    <div className="flex h-[50px] justify-between items-center">
      <div className="flex bg-[#fff] rounded-3xl w-fit h-full items-center">
        {user ? <span></span> : <SignUpButton />}
        <div className="flex justify-center items-center px-4 w-[672px]">
          welcome to random_videos.org
        </div>
      </div>
      <div className='flex gap-4'>
        <div className="bg-[#fff] rounded-3xl w-fit">
          {user ? (
            <div className="flex justify-center items-center px-4">
              <button onClick={handleClick}>{user.email}</button>
            </div>
          ) : (
            <div className="flex justify-center items-center px-4 bg-[#fff]">
              <SignInButton />
            </div>
          )}
        </div>
        <div className="bg-[#fff] rounded-3xl w-fit px-4">Sign out</div>
      </div>
    </div>
  )
}

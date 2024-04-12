import React from 'react';
import { useFireBaseAuth } from '../../lib/_providers/FireBaseAuthProvider';
import { useRouter } from 'next/navigation';
import SignInButton from './_subcomponents/signInButton';
import SignUpButton from './_subcomponents/signUpButton';

export default function Header(){

  const { user } = useFireBaseAuth()

  const router = useRouter()
  const handleClick = () => {
    router.push(`/profile/${user?.email}`)
  }

  return (
    <div className="flex justify-between p-20">
      <div className="bg-[#fff] w-fit h-full items-center">
        {user ? <span></span> : <SignUpButton />}
        <div className="bg-[#fff] flex justify-center items-center px-4">
          random_videos
        </div>
      </div>
      <div className='flex gap-4'>
        <div className="bg-[#fff] w-fit">
          {user ? (
            <div className="bg-[#fff] flex justify-center items-center px-4">
              <button onClick={handleClick}>{user.email}</button>
            </div>
          ) : (
            <div className="flex justify-center items-center px-4 bg-[#fff]">
              <SignInButton />
            </div>
          )}
        </div>
        <div className="bg-[#fff] w-fit px-4">Sign out</div>
      </div>
    </div>
  )
}

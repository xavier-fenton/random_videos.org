import React from 'react';
import { useFireBaseAuth } from '../_providers/FireBaseAuthProvider';
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
    <div className='flex h-[100px] justify-between border border-black'>
     {user ? <span></span> : <SignUpButton />} 
      <div className='flex justify-center items-center'>welcome to random_videos.org</div>
      { user ? <div className='flex justify-center items-center pr-4'><button onClick={handleClick}>{user.email}</button></div> : <div className='flex justify-center items-center pl-4'><SignInButton/></div>}

    </div>
  );
};

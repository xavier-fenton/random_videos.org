import { useRouter } from 'next/navigation';
import React from 'react';
import "../../globals.css"
const SignInButton = () => {

  const router = useRouter()
  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/signin')
  }

  return (
    <button  className="pr-4" onClick={handleClick}>explorer</button>
  );
};

export default SignInButton;
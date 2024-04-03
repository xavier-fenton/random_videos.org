import { useRouter } from 'next/navigation';
import React from 'react';
import "../../globals.css"
const SignUpButton = () => {

  const router = useRouter()
  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/signup')
  }

  return (
    <button  className="pl-4" onClick={handleClick}>sign up</button>
  );
};

export default SignUpButton;
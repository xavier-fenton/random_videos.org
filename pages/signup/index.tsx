'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signUp } from '@component/utils/signingFunctions'

import '../../src/app/globals.css'

export default function Page() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleForm = async (event: any) => {
    event.preventDefault()

    const { result, error } = await signUp(email, password)

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push('/')
  }

  return (
    <div className="wrapper w-[100dvh] h-[100dvh] flex flex-col mx-auto items-center justify-center">
    <div className="form-wrapper">
      <h1 className="mt-60 mb-30">Sign up</h1>
      <form onSubmit={handleForm} className="form w-full flex flex-col">
        <label htmlFor="email">
          <p>Email</p>
          <input
            className=''
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <button className="bg-[#8f8f8f]" type="submit">Sign up</button>
      </form>
    </div>
  </div>
  
  )
}

import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (<div className='flex justify-center items-center h-screen hero-gradient'>
  <SignIn/>
  </div>
  
  )
}

export default page
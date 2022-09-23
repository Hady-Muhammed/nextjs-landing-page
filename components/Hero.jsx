import Link from 'next/link'
import React from 'react'

const Hero = ({heading , message}) => {
  return (
    <div className='flex items-center relative h-screen w-full custom-img before:absolute before:w-full before:h-full before:bg-black/40'>
        <div className='text-white relative z-10 ml-8 sm:ml-14 md:ml-28'>
          <h1 className='text-4xl font-extrabold'>{heading}</h1>
          <p className='my-4'>{message}</p>
          <Link href='/contact/#contactUS'>
            <button className='bg-transparent border border-white px-8 py-2 duration-300 hover:bg-white hover:text-black hover:scale-105'>Book</button>
          </Link>
        </div>
    </div>
  )
}

export default Hero
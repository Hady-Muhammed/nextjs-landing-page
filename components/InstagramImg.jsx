import Image from 'next/image'
import React from 'react'
import {FiInstagram} from 'react-icons/fi'

const InstagramImg = ({img}) => {
  return (
    <div className='relative group'>
        <Image className='hover:brightness-50 duration-300' src={img} alt='x'/>
        <FiInstagram size={40} className='opacity-0 group-hover:opacity-[1] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white duration-300'/>
    </div>
  )
}

export default InstagramImg
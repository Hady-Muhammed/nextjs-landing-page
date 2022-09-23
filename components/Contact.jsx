import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 h-screen'>
        <h1 className='text-center text-2xl font-bold p-5 pb-0 my-510101111'>Let`s Work together</h1>
        <form className='max-w-[600px] mx-auto' action="" id='contactUS'>
            
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
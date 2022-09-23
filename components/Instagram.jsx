import React from 'react'
import InstagramImg from './InstagramImg'
import img1 from '../public/ig-img-1.jpeg'
import img2 from '../public/ig-img-2.jpeg'
import img3 from '../public/ig-img-3.jpeg'
import img4 from '../public/ig-img-4.jpeg'
import img5 from '../public/ig-img-5.jpeg'
import img6 from '../public/ig-img-6.jpeg'
const Instagram = () => {
  return (
    <section className='max-w-[1000px] mx-auto'>
        <h2 className='text-center text-2xl font-bold p-5 pb-0'>Follow me on Instagram</h2>
        <span className='block text-center text-lg pt-0 font-bold p-5 text-gray-400'>@Captur</span>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <InstagramImg img={img1}/>
            <InstagramImg img={img2}/>
            <InstagramImg img={img3}/>
            <InstagramImg img={img4}/>
            <InstagramImg img={img5}/>
            <InstagramImg img={img6}/>
        </div>
    </section>
  )
}

export default Instagram
import React from 'react'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import checkmark from '../../public/assets/check.svg'


import Image from 'next/image'
const Features = () => {
  return (
    <div className='px-5 container lg:px-20 mx-auto' >
    <div className='px-5 container lg:px-20 mx-auto flex flex-col gap-y-[56px] py-[56px]'>
     <div>
        <div>
            <h3 className='font-medium  text-blue-500'>
                Sales Monitoring
            </h3>
            <h1 className='pt-3 text-2xl font-medium text-black'>Simplify your sales monitoring</h1>
        <Image src={Feature1} alt ='feature 1 ' className='pt-6' />
        <p className='py-6  text-black'>Stay on top of things and revamp your work progress with our game changing feature . Get a bird's eye view from our customizable dashboard . </p>
       <ul className='flex flex-col gap-y-3'>
        <li className='flex items-center gap-x-2 text-black'>
          <span><Image src={checkmark} alt='checkmark'/></span>  One two three four
        </li>
        <li className='flex items-center gap-x-2 text-black'>
          <span><Image src={checkmark} alt='checkmark'/></span> Five six seven eidght
        </li>
        <li className='flex items-center gap-x-2 text-black'>
          <span><Image src={checkmark} alt='checkmark'/></span>  Eleven twelve thirteen
        </li>
       </ul>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Features

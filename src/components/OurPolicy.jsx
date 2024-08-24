import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold text-[18px]'>Easy Exchage Policy</p>
            <p className='text-gray-400 text-[18px]'>we offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold text-[18px]'>7 Days Return Policy</p>
            <p className='text-gray-400 text-[18px]'>we Provide 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold text-[18px]'>Best Customer Support</p>
            <p className='text-gray-400 text-[18px]'>we provide 24/7 customer Support</p>
        </div>

    </div>
  )
}

export default OurPolicy
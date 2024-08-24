import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();

    }
  return (
    <>
    <div className="text-center">
        <p className='text-2xl font-bold'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3 text-[18px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eveniet totam. Fugit nemo eveniet quos, rem dignissimos aperiam natus impedit harum beatae ipsum, delectus voluptates quis quibusdam reprehenderit ullam atque.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
    </>
  )
}

export default NewsLetterBox
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { images } from '../lib/image'

const Hero = () => {
    return (
        <div className='max-w-2xl m-auto mt-10'>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                <div>
                    <img src="../images/image-product-1.jpg" className='h-80 w-80 rounded-lg' alt="" />
                    <div className='flex justify-between gap-6 mt-2'>
                        {images.map((i, index) => (
                            <div key={index}>
                                <img src={i.src} alt="" className='w-32 h-16 rounded-md' />
                            </div>
                        ))}
            </div>
                </div>
                <div className='space-y-4 mt-10 w-[400px]'>
                    <p className='text-gray-500 text-sm'>Sneaker company</p>
                    <h2 className='text-2xl font-bold'>Fall Limited Edition <br /> Sneakers</h2>
                    <p className='text-gray-500 text-xsm'>
                        These low-profile sneakers are your perfect causal wear companinon.
                        Feautring durable rubber outer sole,they'll withstand everything the weather can offer.
                    </p>

                    <div className='text-l font-bold '>
                        $125.00
                        <span className='bg-black text-white rounded-md text-xs ml-2'>
                            50%
                        </span>
                    </div>
                    <div className='flex justify-around items-center'>
                        <div className='bg-gray-100 flex justify-around items-center gap-9 rounded-md'>


                            <button className='w-8 h-8 flex items-center justify-center rounded-md'>
                                <span className='text-orange-500 text-xl font-bold'>-</span>
                            </button>
                            <span className='font-bold'>
                                0
                            </span>


                            <button className=' w-8 h-8 flex items-center justify-center rounded-md'>
                                <span className='text-orange-500 text-xl font-bold'>+</span>
                            </button>
                        </div>
                        <button className='w-48 h-12 rounded-md bg-orange-500 text-black cursor-pointer flex items-center justify-center gap-6 text-sm font-bold'>
                            <FaShoppingCart />
                            Add to cart
                        </button>
                    </div>

                   
                </div>
            </div>
          
        </div>
    )
}

export default Hero
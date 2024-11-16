import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='max-w-4xl m-auto mt-4'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-9'>
                <h2 className='text-2xl font-bold'>sneakers</h2>

                <div className='mt-2'>
                    <ul className='flex gap-10 text-sm  text-gray-500 '>
                        <li>Collection</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div>

                <div className='flex justify-center gap-6 mt-2'>
                    <FaShoppingCart className='mt-1 cursor-pointer'/>
                    <div className='rounded-full'>
                        <img src="../images/image-avatar.png" alt="" className='h-6 w-6 cursor-pointer' />
                    </div>                   
                </div>
            </div>
            
        </div>
        <hr className='mt-6' />
    </div>
  )
}

export default Header
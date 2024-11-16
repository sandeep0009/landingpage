import React from 'react'
import { ShoppingCart } from 'lucide'
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

                <div className=''>
                    <FaShoppingCart color=''/>
                    <div className='rounded-full'>
                        

                    </div>

                   
                </div>
            </div>
            
        </div>
        <hr className='mt-6' />
    </div>
  )
}

export default Header
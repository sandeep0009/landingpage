import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../state/Context';
import { useWindowSize } from '@/hook/windowScreen';

const Header = () => {
  const { count } = useCart();
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-4xl m-auto mt-4 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {width < 1024 && (
            <div className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
              <FiMenu size={24} />
            </div>
          )}
          <h2 className="text-2xl font-bold">sneakers</h2>
          {width >= 1024 && (
            <ul className="flex gap-10 text-sm text-gray-500 ml-12">
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <FaShoppingCart className="cursor-pointer" />
            {count > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {count}
              </span>
            )}
          </div>
          <div className="rounded-full">
            <img src="../images/image-avatar.png" alt="User Avatar" className="h-8 w-8 cursor-pointer rounded-full" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 bg-white w-64 h-full p-6 shadow-md">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <FiX size={24} className="cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </div>
            <ul className="space-y-6 text-lg text-gray-700">
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}

      <hr className="mt-6" />
    </div>
  );
};

export default Header;

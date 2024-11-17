import  { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { images } from '../lib/image';
import { useCart } from '../state/Context';
import { useWindowSize } from '@/hook/windowScreen';
import MobileCarousel from './MobileCarousel';

const Hero = () => {
  const [imageClicked, setClickedImage] = useState<string>(images[0]?.src || '');
  const { count, increaseCount, decreaseCount } = useCart();
  const width = useWindowSize()?.width;
  const isMobile = width && width < 768;

  const handleClick = (_id: number) => {
    const selectedImage = images.find(image => image.id === _id);
    if (selectedImage) {
      setClickedImage(selectedImage.src);
    }
  };

  return (
    <div className='max-w-2xl m-auto mt-10'>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
        <div className="flex justify-center w-full md:block">
          {!isMobile && (
            <div>
              <img
                src={imageClicked}
                className='h-80 w-80 rounded-lg mb-4'
                alt="Selected product"
              />
              <div className='flex gap-4 justify-center'>
                {images.map((i, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(i.id)}
                    className='cursor-pointer hover:opacity-70 transition-opacity'
                  >
                    <img
                      src={i.src}
                      alt="Product thumbnail"
                      className={`w-20 h-20 rounded-md ${
                        imageClicked === i.src ? 'border-2 border-orange-500 opacity-70' : ''
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        
          {isMobile && <MobileCarousel />}
        </div>
        <div className="w-full md:w-[500px] px-6 md:px-10 space-y-4 md:mt-10">
  <p className="text-gray-500 text-sm">Sneaker company</p>
  <h2 className="text-2xl font-bold">
    Fall Limited Edition <br /> Sneakers
  </h2>
  <p className="text-gray-500 text-xs md:text-sm">
    These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
  </p>
  <div className="text-lg font-bold">
    $125.00
    <span className="bg-black text-white rounded-md text-xs ml-2">50%</span>
  </div>
  <div className="flex md:flex-row flex-col justify-between items-center">
    <div className="bg-gray-100 flex justify-around items-center gap-4 md:gap-9 mt-4 rounded-md w-full md:w-auto">
      <button
        className={`w-8 h-8 flex items-center justify-center rounded-md ${
          count === 0 ? 'opacity-50' : ''
        }`}
        onClick={decreaseCount}
        disabled={count === 0}
      >
        <span className="text-orange-500 text-xl font-bold">-</span>
      </button>
      <span className="font-bold">{count}</span>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-md"
        onClick={increaseCount}
      >
        <span className="text-orange-500 text-xl font-bold">+</span>
      </button>
    </div>
    <button className="md:w-48 w-full mt-4 md:mt-0 h-12 rounded-md bg-orange-500 text-black cursor-pointer flex items-center justify-center gap-4 text-sm font-bold">
      <FaShoppingCart />
      Add to cart
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;

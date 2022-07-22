import Image from 'next/image';
import logo from '../../public/images/logo.png';
export default function Header() {
  return (
    <div>
      <div className="flex justify-between px-12 py-6 items-center">
        <div className="flex w-[160px]">
          <i className="icon-facebook mr-1 text-xl text-gray-700" />
          <i className="icon-instagram text-xl text-gray-700" />
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div>
            <h1
              className="text-center text-3xl text-red-300 mb-1"
              style={{
                fontFamily: 'Silent Reaction',
              }}
            >
              Peach and Petal
            </h1>
            <h2
              style={{
                fontFamily: 'Playfair',
              }}
              className="text-center uppercase text-xs text-gray-500 mb-4"
            >
              Luxury Lingerie
            </h2>
          </div>
          <div
            className="flex"
            style={{
              fontFamily: 'Playfair',
            }}
          >
            <p className="text-gray-700 mx-3 text-xs"> New Arrivals</p>
            <p className="text-gray-700 mx-3 text-xs"> Lingerie</p>
            <p className="text-gray-700 mx-3 text-xs"> Nightwear</p>
            <p className="text-gray-700 mx-3 text-xs"> Swimwear</p>
            <p className="text-gray-700 mx-3 text-xs"> Designers</p>
            <p className="text-gray-700 mx-3 text-xs"> Sale</p>
            <p className="text-gray-700 mx-3 text-xs"> Help</p>
          </div>
        </div>
        <p>
          <div className="w-[100px]">
            <i className="icon-search mr-3 text-lg text-gray-700" />
            <i className="icon-shopping-bag text-lg text-gray-700" />
            <span className="text-[12px] text-red-300">(2)</span>
          </div>
        </p>
      </div>
      <div className="text-center bg-black p-2 text-white text-[12px] font-light">
        <div className="flex gap-x-12 mx-auto w-fit">
          <p className="  ">Free delivery on orders over £100</p>
          <p>|</p>
          <p className=" ">UK and International Shipping</p>
          <p>|</p>
          <p className=" ">Ethically Sourced Fabric</p>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import logo from '../../public/images/logo.png';
export default function Header() {
  return (
    <div>
      <div
        className="flex items-center justify-center flex-col p-6"
        style={{
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      >
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
      <div className="text-center bg-black p-2">
        <p className=" text-white text-[12px] font-light">
          Free delivery on orders over £100 | UK and International Shipping |
          Ethically Sourced Fabric
        </p>
      </div>
    </div>
  );
}

import Image from 'next/image';
import hero from '../../public/images/hero5.jpg';

export default function Hero() {
  return (
    <div className="relative w-full h-[35rem]">
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        // style={{ filter: ' brightness(0.7)' }}
      />
      <div
        className="absolute left-0 top-[50%] translate-y-[-50%] flex justify-center flex-col px-20 py-12 rounded-tr-md rounded-br-md"
        style={{ background: 'rgba(0,0,0,0.5)' }}
      >
        <p
          className=" text-white text-5xl mb-4"
          style={{
            fontFamily: 'Playfair',
          }}
        >
          Summer Sale
        </p>
        <p className=" text-white mb-4">
          Save up to 15% on selected items with code SUMMER
        </p>
        <p className="border bg-black border-black text-white w-fit px-6 py-2 text-[.9rem] rounded-full ">
          Shop Sale
        </p>
      </div>
    </div>
  );
}

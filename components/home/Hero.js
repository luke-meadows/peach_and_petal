import Image from 'next/image';
import hero from '../../public/images/hero.jpg';

export default function Hero() {
  return (
    <div className="relative w-full h-[35rem]">
      <Image src={hero} layout="fill" objectFit="cover" />
      <div
        className="w-full absolute left-0 top-[50%] translate-y-[-50%] flex justify-center items-center flex-col px-20 py-12"
        style={{ background: 'rgba(255,255,255,0.4)' }}
      >
        <p
          className=" text-black text-5xl mb-4"
          style={{
            fontFamily: 'Playfair',
          }}
        >
          Summer Sale
        </p>
        <p className=" text-black mb-4">
          Save up to 15% on selected items with code SUMMER
        </p>
        <p className="border bg-black border-black text-white/90 w-fit px-12 py-3 text-l rounded-full pointer">
          Shop Now
        </p>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function ProductThumbnail({ title, image }) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <div className="relative w-full">
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          style={{ filter: 'brightness(0.9)' }}
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center z-20 text-white">
          <p
            style={{
              fontFamily: 'Playfair',
            }}
            className="text-4xl mb-4"
          >
            {title}
          </p>
          <p className="border bg-red-300 border-red-300 text-red-300 w-fit px-8 py-2 text-sm rounded-full text-black pointer">
            Shop Now
          </p>
        </div>
      </div>
    </div>
  );
}

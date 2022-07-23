import Image from 'next/image';
import { useState } from 'react';

export default function ShowcaseCard({ image, image2 }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="relative h-[35rem] w-[20rem] showcase-img overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? image2 : image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-[14px] font-semibold mt-2 mb-1">
        Balcony Bra & Thong Set
      </p>
      <p className="text-[14px] mb-1">Pink</p>
      <p className="text-[14px] font-semibold">£90.00</p>
    </div>
  );
}

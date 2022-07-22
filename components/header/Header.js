export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-6 px-12 py-6 items-center">
        <div className="flex w-[180px] col-span-1">
          <i className="icon-facebook mr-2 text-xl text-gray-700" />
          <i className="icon-instagram text-xl text-gray-700" />
        </div>
        <div className="flex items-center justify-center flex-col col-span-4">
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
              className="text-center uppercase text-xs text-gray-500  sm:mb-0 md:mb-6 lg:mb-6"
            >
              Luxury Lingerie
            </h2>
          </div>
          <div
            className="hidden md:flex lg:flex text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: 'Playfair',
            }}
          >
            <p className="text-gray-700 mx-3 pointer"> New Arrivals</p>
            <p className="text-gray-700 mx-3 pointer"> Lingerie</p>
            <p className="text-gray-700 mx-3 pointer"> Nightwear</p>
            <p className="text-gray-700 mx-3 pointer"> Swimwear</p>
            <p className="text-gray-700 mx-3 pointer"> Designers</p>
            <p className="text-gray-700 mx-3 pointer"> Sale</p>
            <p className="text-gray-700 mx-3 pointer"> Help</p>
          </div>
        </div>
        <div className="flex items-center justify-end col-span-1">
          <i className="icon-search  text-lg text-gray-700" />
          <i className="ml-5 icon-shopping-bag text-lg text-gray-700" />
          <span className="text-[12px] text-red-300">(2)</span>
          <i className=" ml-2 icon-menu text-xl mt-[2px] text-gray-700 lg:hidden md:hidden" />
        </div>
      </div>
      <div className="text-center bg-black p-2 text-white text-[12px] font-light">
        <div className="flex gap-x-12 mx-auto w-fit">
          <p className="  ">Free delivery on orders over £100</p>
          <p>|</p>
          <p className=" ">UK and International Shipping</p>
          <p>|</p>
          <p className="">Free returns - 30 day policy</p>
        </div>
      </div>
    </div>
  );
}

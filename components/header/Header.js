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
              className="text-center uppercase text-xs text-gray-500 mb-6"
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
            <p className="text-gray-700 mx-3 text-s"> New Arrivals</p>
            <p className="text-gray-700 mx-3 text-s"> Lingerie</p>
            <p className="text-gray-700 mx-3 text-s"> Nightwear</p>
            <p className="text-gray-700 mx-3 text-s"> Swimwear</p>
            <p className="text-gray-700 mx-3 text-s"> Designers</p>
            <p className="text-gray-700 mx-3 text-s"> Sale</p>
            <p className="text-gray-700 mx-3 text-s"> Help</p>
          </div>
        </div>
        <div className="w-[100px]">
          <p>
            <i className="icon-search mr-3 text-lg text-gray-700" />
            <i className="icon-shopping-bag text-lg text-gray-700" />
            <span className="text-[12px] text-red-300">(2)</span>
          </p>
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

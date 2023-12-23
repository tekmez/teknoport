const Card = () => {
  return (
    <div className="w-[268px] h-[432px] px-4 py-6 bg-neutral-100 rounded-[9px] flex-col justify-start items-center gap-4 inline-flex">
      <div className="self-stretch justify-end items-center gap-2 inline-flex">
        <div className="w-8 h-8 justify-center items-center flex">
          <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
        </div>
      </div>
      <img className="w-40 h-40" src="/Iphone14.png" />
      <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
        <div className="self-stretch h-[88px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-center text-black text-base font-medium font-['SF Pro Display'] leading-normal">
            Blackmagic Pocket Cinema Camera 6k
          </div>
          <div className="self-stretch text-center text-black text-2xl font-semibold font-['SF Pro Display'] leading-normal tracking-wide">
            $2535
          </div>
        </div>
        <div className="px-16 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-center text-white text-sm font-medium font-['SF Pro Display'] leading-normal">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

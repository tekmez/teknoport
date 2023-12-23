import Image from "next/image";
import Card from "./ui/Card";
import Category from "./ui/Category";

export default function Home() {
  return (
    <>
      <div className="bg-[#211C24] text-white px-40 flex justify-center items-center flex-wrap xl:justify-between">
        <div className="flex flex-col gap-y-6 mt-6 ">
          <p className="opacity-40 text-2xl">Pro.Beyond.</p>
          <p className="text-8xl">IPhone 15 Pro</p>
          <p className="opacity-40 text-lg">
            Created to change everything for the better. For everyone
          </p>
          <button className="w-44 inline-flex py-4 px-14 justify-center items-center gap-2 rounded-md border border-white border-solid text-white self-center xl:self-start">
            Button
          </button>
        </div>
        <Image
          width={400}
          height={400}
          src="/iPhone.png"
          alt=""
          className="object-scale-down mt-6"
        />
      </div>
      <Category />
      {/* <!-- 2. Section --> */}

      <div className="flex flex-wrap justify-center w-full gap-12 p-6">
        {Array(6)
          .fill()
          .map((_, i) => (
            <Card key={i} />
          ))}
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 px-4 md:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {/* First Column */}
          <div className="flex flex-col">
            <Image
              src="/logoWhite.png"
              alt="Logo"
              width={96}
              height={32}
              priority
              className="self-center md:self-start"
            />
            <p className="mb-4 mt-2 text-[#CFCFCF]">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Services</h2>
            <ul className="space-y-2 text-[#CFCFCF]">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
            </ul>
          </div>
        </div>
        <Link href="#" className="mt-8 grid place-items-center">
          <Image
            src="/instagram.svg"
            alt="Logo"
            width={24}
            height={24}
            priority
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

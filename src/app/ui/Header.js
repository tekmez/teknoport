import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white sticky top-0">
      <nav>
        <div className="container mx-auto flex justify-between items-center gap-8 py-6 px-4 md:py-4 md:justify-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={96} height={32} priority />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-4 rounded-md h-6 bg-gray-100 text-black focus:outline-none"
            />
            <Link href="#" className="text-black">
              Home
            </Link>
            <Link href="#" className="text-black">
              Contact
            </Link>
            <Link href="#" className="text-black">
              About
            </Link>
          </div>

          <div className="md:hidden">
            {/* <!-- Mobil navbar butonu --> */}
            <button className="text-black">
              <Image
                src="/hamburger.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

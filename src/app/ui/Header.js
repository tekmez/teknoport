import Image from "next/image";
import Link from "next/link";
import SubNav from "./SubNav";

const Header = () => {
  return (
    <header className="bg-white">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
                  fill="#080341"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
                  fill="#080341"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
                  fill="#080341"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
const SubLink = ({ href, label, svg, i }) => {
  return (
    <Link
      href={href}
      className="text-white/50 flex flex-row items-center gap-2"
    >
      <Image src={svg} alt="My Icon" width={24} height={24} />
      {label}
      {i !== 5 && <span className="text-white/50 mx-5 hidden md:block">|</span>}
    </Link>
  );
};
const SubNav = () => {
  const links = [
    {
      href: "#",
      label: "Phone",
      svg: "/phone.svg",
    },
    {
      href: "#",
      label: "Computers",
      svg: "/phone.svg",
    },
    {
      href: "#",
      label: "Tablets",
      svg: "/phone.svg",
    },
    {
      href: "#",
      label: "Smart Watches",
      svg: "/watches.svg",
    },
    {
      href: "#",
      label: "Accessories",
      svg: "/watches.svg",
    },
    {
      href: "#",
      label: "Headphones",
      svg: "/headphones.svg",
    },
  ];

  return (
    <div className="w-full bg-[#2E2E2E] hidden py-2 px-40 md:flex text-xs md:text-base md:items-center md:justify-center md:gap-4">
      {links.map((link, i) => (
        <SubLink
          key={i}
          href={link.href}
          label={link.label}
          svg={link.svg}
          i={i}
        />
      ))}
    </div>
  );
};

export default SubNav;

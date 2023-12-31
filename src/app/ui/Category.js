"use client";
import Image from "next/image";
import { useState } from "react";

const CommonCategoryCard = ({ icon, title }) => {
  return (
    <div className="w-32 sm:w-40 h-32 px-4 sm:px-8 py-2 sm:py-6 bg-gray-200 rounded-[15px] flex-col justify-center items-center gap-2 inline-flex">
      <div>{icon}</div>
      <div className="text-center text-black text-base font-medium leading-normal">
        {title}
      </div>
    </div>
  );
};

const CategoryList = ({ categories, activeIndex, onCategoryClick }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className="flex justify-center items-center gap-4 sm:gap-8 w-min sm:w-full"
        // style={{ width: "min-content" }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => onCategoryClick(index)}
            className={`${
              activeIndex === index ? "border-b-2 border-black" : ""
            } cursor-pointer`}
          >
            <CommonCategoryCard {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      icon: (
        <Image src="/blackPhone.svg" alt="My Icon" width={48} height={48} />
      ),
      title: "Phones",
    },
    {
      icon: (
        <Image src="/blackPhone.svg" alt="My Icon" width={48} height={48} />
      ),
      title: "Smart Watches",
    },
    {
      icon: (
        <Image src="/blackCamera.svg" alt="My Icon" width={48} height={48} />
      ),
      title: "Cameras",
    },
    {
      icon: (
        <Image
          src="/blackHeadphones.svg"
          alt="My Icon"
          width={48}
          height={48}
        />
      ),
      title: "Headphones",
    },
    {
      icon: (
        <Image src="/blackComputer.svg" alt="My Icon" width={48} height={48} />
      ),
      title: "Computers",
    },
    {
      icon: <Image src="/blackGame.svg" alt="My Icon" width={48} height={48} />,
      title: "Gaming",
    },
  ];

  const handleCategoryClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full px-4 py-2 sm:px-8 sm:py-4 flex justify-center items-center flex-wrap">
      <div className="text-2xl sm:text-4xl font-bold text-black mb-4">
        Categories
      </div>
      <CategoryList
        categories={categories}
        activeIndex={activeIndex}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export default Category;

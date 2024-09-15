"use client";
import ItemLayout from "@/components/about/ItemLayout"; // Ensure the correct path to ItemLayout
import Image from "next/image";

const Chapter1 = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/background/Chapter1.jpg" // Directly reference the image in the public folder
        priority
        alt="Background for Chapter 1"
        fill // Use fill instead of specifying width and height
        className="-z-50 object-cover object-center opacity-50"
      />

      {/* Content */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full h-full relative">
        {/* Chapter Title */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Chapter 1: The Beginning
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            It was a cold, misty evening when Emily first heard the phone ring. Sitting alone in her small, creaky apartment on the outskirts of the city...
          </p>
        </ItemLayout>

        {/* Chapter Image */}
        <ItemLayout className="col-span-full">
          <Image
            className="w-1/2 h-auto object-cover"
            src="/images/gli.jpg" // Ensure the image exists in the public folder
            alt="Chapter 1 image"
            width={200}
            height={100}
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </div>
  );
};

export default Chapter1;

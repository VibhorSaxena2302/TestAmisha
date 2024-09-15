"use client";
import ItemLayout from "@/components/about/ItemLayout"; // Ensure the correct path to ItemLayout
import Image from "next/image";


const Chapter3 = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* Chapter Title */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Chapter 3: The Final Call
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            With every passing moment, Emily felt the grip of fear tightening around her. The phone calls were no longer random; they had a purpose...
          </p>
        </ItemLayout>

        {/* Chapter Image */}
        <ItemLayout className="col-span-full">
          <Image
            className="w-1/2 h-auto object-cover"
            src="/images/chapter1.jpg" // Ensure the image exists in the public folder
            alt="Chapter 3 image"
            width={200}
            height={100}
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default Chapter3;

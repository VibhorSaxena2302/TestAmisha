import ChapterDetails from "@/components/chapters/ChapterDetails"; // Import the chapter details component
import Image from "next/image";
import bg from "../../../../public/background/Chapter1-background.jpeg"; // Adjust the path as needed

export const metadata = {
  title: "Chapter 1",
};

export default function Chapter1() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Chapter 1 background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* 3D Model */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <HatModel />
      </div>

      {/* Chapter Header */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Chapter 1
          </h1>
          <p className="font-light text-foreground text-lg">
            The Beginning of the Journey
          </p>
        </div>
      </div>

      {/* Chapter Details */}
      <ChapterDetails />
    </>
  );
}

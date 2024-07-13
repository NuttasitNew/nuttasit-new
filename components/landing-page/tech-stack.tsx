"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";

const TechStack = () => {
  return (
    <section className="relative h-[100px]">
      <div className="absolute bg-white flex h-[160px] w-full  "></div>
      <div className="absolute flex flex-row  justify-center h-[160px] w-full z-50 ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 3,
              stopOnInteraction: false,
            }),
          ]}
          className="max-w-[1080px] min-w-[400px] flex items-center"
        >
          <CarouselContent className="-ml-20">
            {techStackList.map((data, index) => (
              <CarouselItem className="basis-1/1 lg:basis-1/3" key={index}>
                <div className="w-[350px] h-[180px] flex items-center justify-center">
                  <Image
                    src={`/${data.src}`}
                    width={100}
                    height={100}
                    alt="nextjs logo"
                    className="w-[300px] h-[150px] object-contain "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

const techStackList = [
  {
    name: "nextjs",
    src: "next-js.svg",
  },
  {
    name: "typescript",
    src: "typescript.svg",
  },
  {
    name: "tailwinds",
    src: "tailwind-css.svg",
  },
  {
    name: "react",
    src: "react.svg",
  },
  {
    name: "nodejs",
    src: "nodejs.svg",
  },
  {
    name: "shadcnui",
    src: "shadcnui.svg",
  },
];

export default TechStack;

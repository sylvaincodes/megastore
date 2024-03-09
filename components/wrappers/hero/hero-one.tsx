import { Container } from "@/components/ui/container";
import { Row } from "@/components/ui/row";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const HeroOne = () => {
  return (
    <section className="my-6">
      <Container>
        <Carousel
          
        >
          <CarouselContent className="mx-2">
            <CarouselItem className="basis-2/2 mx-1 w-full rounded-lg h-[316px]  bg-hero_bg">
              <div className="grid grid-cols-3">
                <div
                  className="pt-24 lg:pt-24 ps-4 lg:py-10 lg:ps-12 col-span-2 
                            sm:col-span-2 flex 
                             gap-y-4 md:gap-y-8 flex-col text-white"
                >
                  <h2 className="text-sm capitalize md:text-[20px] font-normal">
                    best deal online on smart watches
                  </h2>
                  <h1 className="text-lg uppercase md:text-[40px] font-extrabold">
                    smart wearable
                  </h1>
                  <p className="text-[30px] font-light">UP to 80% OFF</p>
                </div>

                <div
                  className="hidden sm:flex col-span-1 relative"
                  style={{
                    backgroundImage: `url('/svg/hero_bg.svg')`,
                    height: "100vh",
                  }}
                >
                  <Image
                    className="absolute right-30 top-10 h-[230px]"
                    src="/svg/hero_product.svg"
                    width="300"
                    height="200"
                    alt="image"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-2/2 mx-1 w-full rounded-lg h-[316px]  bg-hero_bg">
              <div className="grid grid-cols-3">
                <div
                  className="pt-24 lg:pt-24 ps-4 lg:py-10 lg:ps-12 col-span-2 
                            sm:col-span-2 flex 
                             gap-y-4 md:gap-y-8 flex-col text-white"
                >
                  <h2 className="text-sm capitalize md:text-[20px] font-normal">
                    best deal online on smart watches
                  </h2>
                  <h1 className="text-lg uppercase md:text-[40px] font-extrabold">
                    smart wearable
                  </h1>
                  <p className="text-[30px] font-light">UP to 80% OFF</p>
                </div>

                <div
                  className="hidden sm:flex col-span-1 relative"
                  style={{
                    backgroundImage: `url('/svg/hero_bg.svg')`,
                    height: "100vh",
                  }}
                >
                  <Image
                    className="absolute right-30 top-10 h-[230px]"
                    src="/svg/hero_product.svg"
                    width="300"
                    height="200"
                    alt="image"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-2/2 mx-1 w-full rounded-lg h-[316px]  bg-hero_bg">
              <div className="grid grid-cols-3">
                <div
                  className="pt-24 lg:pt-24 ps-4 lg:py-10 lg:ps-12 col-span-2 
                            sm:col-span-2 flex 
                             gap-y-4 md:gap-y-8 flex-col text-white"
                >
                  <h2 className="text-sm capitalize md:text-[20px] font-normal">
                    best deal online on smart watches
                  </h2>
                  <h1 className="text-lg uppercase md:text-[40px] font-extrabold">
                    smart wearable
                  </h1>
                  <p className="text-[30px] font-light">UP to 80% OFF</p>
                </div>

                <div
                  className="hidden sm:flex col-span-1 relative"
                  style={{
                    backgroundImage: `url('/svg/hero_bg.svg')`,
                    height: "100vh",
                  }}
                >
                  <Image
                    className="absolute right-30 top-10 h-[230px]"
                    src="/svg/hero_product.svg"
                    width="300"
                    height="200"
                    alt="image"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="bg-white -right-8 h-20 w-20" />
          <CarouselPrevious
            className="bg-white -left-8 h-20 w-20"
            size="icon"
          />
        </Carousel>
      </Container>
    </section>
  );
};

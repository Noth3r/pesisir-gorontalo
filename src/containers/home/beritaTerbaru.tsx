import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

function BeritaTerbaru() {
  return (
    <div className="flex w-full items-center md:justify-center bg-bluish-100 px-8 md:px-24 xl:px-32 py-10">
      <div className="basis-1/6 font-cocogoose text-2xl md:text-4xl font-bold text-bluish-300">
        Berita
        <br />
        Terbaru
      </div>
      <div className="flex basis-5/6 items-center justify-between">
        <div className="relative h-32 2xl:h-40 w-12">
          <Image src="/line.svg" fill alt="" />
        </div>
        <Carousel className="w-full">
          <CarouselContent className="font-futura font-light text-bluish-300">
            {/* {data.map((item, index) => (
              <CarouselItem className="text-center text-2xl basis-1/4" key={index}>
                <div>{item.title}</div>
                <div>{item.date}</div>
              </CarouselItem>
            ))} */}
            <CarouselItem className="text-center text-2xl">
              <div>Coming Soon</div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="relative h-32 2xl:h-40 w-12 rotate-180">
          <Image src="/line.svg" fill alt="" />
        </div>
      </div>
    </div>
  );
}

export default BeritaTerbaru;

import Image from "next/image";

function Teaser() {
  return (
    <div className="relative w-full bg-cover bg-top bg-no-repeat md:pb-4">
      <Image
        quality={100}
        src="/teaser.png"
        fill
        className="object-cover"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-16 text-bluish-100 sm:gap-y-8 xl:gap-y-16">
        <div className="relative flex h-20 w-4/5 justify-center md:h-44">
          <Image src="/teaser title.svg" className="object-fill" fill alt="" />
        </div>
        <iframe
          className="aspect-video w-72 sm:w-96 md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[60rem]"
          src="https://www.youtube.com/embed/8NUQOX5iyR0?si=GQG4jlwgd5dbG7c-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Teaser;

import Image from "next/image";

function Teaser() {
  return (
    <div 
    style={{
      backgroundImage: "url('/teaser.png')",
    }}
    className="w-full  md:pb-4 bg-cover bg-top bg-no-repeat">
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center sm:gap-y-8 xl:gap-y-16 px-4 py-16 text-bluish-100">
        <div className="relative h-20 md:h-44 w-4/5 flex justify-center">
        <Image src="/teaser title.svg" className="object-fill" fill alt="" />
        </div>
      <iframe className="w-72 sm:w-96 md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[60rem] aspect-video" src="https://www.youtube.com/embed/8NUQOX5iyR0?si=GQG4jlwgd5dbG7c-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Teaser;

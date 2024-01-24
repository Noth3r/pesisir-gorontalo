import Image from "next/image";

function Logo() {
  return (
    <div className="relative w-full bg-cover bg-top bg-no-repeat">
      <Image
        quality={100}
        src="/logo-bg.png"
        fill
        className="object-cover"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-16 text-bluish-100 lg:flex-row lg:py-32 2xl:py-48">
        <div className="flex flex-col items-center justify-center lg:-mr-24 lg:basis-1/2 xl:-mr-44">
          <div className="relative hidden w-full lg:inline lg:h-[14.5rem]">
            <Image
              src="/logo-title.svg"
              className="object-fill brightness-0 invert"
              fill
              alt=""
            />
          </div>
          <h1 className="mt-4 font-cocogoose text-4xl lg:hidden">Logo Kami</h1>
          <p className="mt-4 w-[22rem] px-8 text-justify font-futura text-xl font-light md:px-0">
            Sebuah harapan optimis untuk meningkatkan kesejahteraan masyarakat
            lokal yang berdampingan dengan keindahan alam pesisir Gorontalo
          </p>
        </div>
        <div className="order-first w-full lg:order-last lg:basis-1/2">
          <div className="relative h-72 w-full md:h-96 xl:h-[35rem]">
            <Image
              src="/logo-transparent.png"
              className="object-contain"
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;

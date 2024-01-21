import Image from "next/image";

function Logo() {
  return (
    <div
      style={{
        backgroundImage: "url('/logo-bg.png')",
      }}
      className="w-full bg-cover bg-top bg-no-repeat"
    >
      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row lg:py-32 2xl:py-48 items-center justify-center px-4 py-16 text-bluish-100">
        <div className="lg:basis-1/2 flex flex-col items-center justify-center lg:-mr-24 xl:-mr-44">
          <div className="relative hidden lg:inline lg:h-[14.5rem] w-full">
            <Image
              src="/logo-title.svg"
              className="object-fill brightness-0 invert"
              fill
              alt=""
            />
          </div>
          <h1 className="text-4xl font-cocogoose mt-4 lg:hidden">Logo Kami</h1>
          <p className="px-8 md:px-0 font-futura mt-4 font-light text-xl w-[22rem] text-justify">
            Logo Kami Sebuah harapan optimis untuk mengembangkan kesejahteraan
            masyarakat pesisir berdampingan dengan keindahan alam pesisir
            Gorontalo
          </p>
        </div>
        <div className="lg:basis-1/2 w-full order-first lg:order-last">
        <div className="relative h-72 md:h-96 xl:h-[35rem] w-full">
            <Image
              src="/logo-transparent.svg"
              className="object-fill"
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

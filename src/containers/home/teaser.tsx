import Image from "next/image";

function Teaser() {
  return (
    <div 
    style={{
      backgroundImage: "url('/teaser.png')",
    }}
    className="w-full lg:h-screen bg-cover bg-top bg-no-repeat">
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center gap-y-32 px-4 py-16 text-bluish-100">
        <div className="relative h-44 w-4/5 flex justify-center">
        <Image src="/teaser title.svg" className="object-fill" fill alt="" />
        </div>
      </div>
    </div>
  );
}

export default Teaser;

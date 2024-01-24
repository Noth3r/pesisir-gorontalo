import Image from "next/image";
import React from "react";

function OprecHero() {
  return (
    <div className="relative h-screen md:h-[800px] lg:h-screen w-full bg-cover bg-top bg-no-repeat">
      <Image
        quality={100}
        src="/bg-oprec-hero.jpg"
        fill
        priority
        className="object-cover hidden md:block"
        alt=""
      />
      <Image
        quality={100}
        src="/bg-oprec-hero-mobile.jpg"
        priority
        fill
        className="object-cover md:hidden"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 py-16 text-bluish-100">
        <div className="relative h-full w-full  hidden md:block">
          <Image src="/text oprec.png" priority fill className="object-contain" alt="" />
        </div>
        <div className="relative h-full w-full md:hidden">
          <Image src="/text-oprec-mobile.png" priority fill className="object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OprecHero;

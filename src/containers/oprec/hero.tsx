import Image from "next/image";
import React from "react";

function OprecHero() {
  return (
    <div className="relative h-screen w-full bg-cover bg-top bg-no-repeat">
      <Image
        quality={100}
        src="/bg-oprec-hero.jpg"
        fill
        className="object-cover"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 py-16 text-bluish-100">
        <div className="relative h-full w-full">
          <Image src="/text oprec.png" fill className="object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OprecHero;

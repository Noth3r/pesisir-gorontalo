"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
const DynamicMap = dynamic(() => import("./maps"), {
  ssr: false,
});

function OprecLocation() {
  return (
    <>
      <div className="relative w-full bg-cover bg-top bg-no-repeat pb-20">
        <Image
          quality={100}
          src="/hero-oprec.png"
          fill
          className="object-cover"
          alt=""
        />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 py-16 text-white">
          <h1 className="mb-12 font-cocogoose text-4xl font-bold md:pt-12 xl:pt-20">
            Lokasi KKN
          </h1>
          <div className="relative h-[30rem] w-full px-8 md:h-[35rem]">
            <DynamicMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default OprecLocation;

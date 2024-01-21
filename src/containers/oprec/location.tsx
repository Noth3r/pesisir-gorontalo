"use client";

import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./maps"), {
  ssr: false,
});

function OprecLocation() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/hero-oprec.png')",
        }}
        className="relative w-full bg-cover bg-top bg-no-repeat pb-20"
      >
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 py-16 text-bluish-100">
          <h1 className="font-cocogoose text-4xl font-bold mb-12 md:pt-12 xl:pt-20">Lokasi KKN</h1>
          <div className="relative px-8 w-full h-[30rem] md:h-[35rem]">
            <DynamicMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default OprecLocation;

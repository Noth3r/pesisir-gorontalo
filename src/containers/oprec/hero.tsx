import React from "react";

function OprecHero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero-oprec.png')",
      }}
      className="h-screen w-full bg-cover bg-top bg-no-repeat"
    >
      <div className="container h-full relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-16 text-bluish-100">
      <h1 className="font-beach text-4xl xl:text-7xl uppercase "><span className="tracking-[1em]">Ope</span><span>n</span></h1>
      <h1 className="font-beach text-4xl xl:text-7xl uppercase">Recruitment</h1>

      </div>
    </div>
  );
}

export default OprecHero;

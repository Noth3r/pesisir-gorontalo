import Image from "next/image";
import Link from "next/link";
import React from "react";

const infoOprec = [
  {
    name: "Guidebook",
    link: "#",
  },
  {
    name: "Prasyarat",
    link: "https://drive.google.com/drive/folders/1ibXgS1hQynlF5sZlAfbAypO-vwqKPLUX?usp=sharing",
  },
  {
    name: "Formulir",
    link: "https://bit.ly/OprecPesisirGorontalo2024",
  },
];

function OprecInfo() {
  return (
    <div className="relative w-full bg-purplish-200 2xl:h-screen">
      <div className="absolute -top-44 md:-top-32 h-1/2 w-full">
        <Image src="/wave-oprec.svg" className="object-fill" fill alt="" />
      </div>
      <div className="absolute z-10 -bottom-4 xl:-bottom-12 h-20 scale-125 xl:h-80 w-full rounded-b-[50%] bg-purplish-200"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center gap-y-12 xl:gap-y-20 px-4 py-16 text-bluish-100">
        <div className="font-cocogoose md:pt-20 xl:pt-40 2xl:pt-44">
          <h1 className="text-2xl text-center xl:text-4xl text-bluish-100">Open Recruitment</h1>
          <h2 className="text-xl text-center font-light text-bluish-100">
            Anggota Tim KKN PPM UGM
          </h2>
        </div>
        <h1 className="font-beach text-4xl xl:text-5xl text-center">Pesisir Gorontalo 2024</h1>
        <div className="flex flex-col w-full px-8 justify-between gap-y-8 md:w-1/2 xl:w-2/5">
          {infoOprec.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="font-cocogoose xl:text-4xl">{item.name}</p>
              <Link target="_blank" href={item.link}  >
                <button  className="rounded-md font-cocogoose xl:text-xl font-[350] text-purplish-200 bg-white px-4 py-2">
                  Kunjungi
                </button>
              </Link>
            </div>
          ))}
        </div>
        <p className="font-cocogoose text-center xl:text-2xl font-[350]">
        Jadilah Bagian dari Kami untuk Memajukan Gorontalo!
        </p>
      </div>
    </div>
  );
}

export default OprecInfo;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const listDesa = [
  {
    nama: "Coming Soon",
    link: "#",
    bgColor: "#BFF0CB",
  },
  {
    nama: "Coming Soon",
    link: "#",
    bgColor: "#FAE260",
  },
  {
    nama: "Coming Soon",
    link: "#",
    bgColor: "#2AA19D",
  },
];

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero.png')",
      }}
      className="w-full bg-cover bg-top bg-no-repeat pt-4 md:pt-12 2xl:pt-20"
    >
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-y-12 xl:gap-y-20 2xl:gap-y-32 px-4 py-16 text-bluish-100">
        <div>
          <p className="font-cocogoose text-4xl font-[350] text-bluish-100 lg:text-greenish-300">
            KKN PPM UGM
          </p>
          <p className="text-center font-futura text-xl font-light text-bluish-100 lg:text-white">
            Periode II Tahun 2024
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center">
          {/* <h1 className="font-beach text-8xl uppercase text-greenish-300">Pesisir Gorontalo</h1> */}
          <div className="relative lg:-mt-8 xl:-mt-12 xl:mb-4 2xl:mb-12 hidden h-44 w-4/5 justify-center lg:flex">
            <Image src="/pesisir.svg" className="object-fill" fill alt="" />
          </div>
          <div className="relative mb-12 h-52 md:h-72 md:w-72 w-52 justify-center lg:hidden">
            <Image src="/logo.png" className="object-fill" fill alt="" />
          </div>
          <div className="lg:hidden">
          <p className="font-beach text-5xl md:text-8xl uppercase text-bluish-100">
            Pesisir
          </p>
          <p className="-mt-3 md:-mt-6 uppercase font-cocogoose text-[1.75rem] md:text-[3.5rem] font-normal text-bluish-300">
            Gorontalo
          </p>
          </div>
          <p className="hidden xl:inline text-center font-sans text-2xl text-white">
            Mengabdi Bersama di Belahan Pesisir Indonesia
          </p>
        </div>
        <div className="-mt-8 flex flex-col gap-y-4">
          <p className="text-center font-cocogoose md:text-4xl font-[350] uppercase text-bluish-100 xl:text-greenish-300">
            Kawasan Desa KKN Kami
          </p>
          <p className="hidden md:inline -mt-2 mb-2 text-center font-futura text-2xl font-light">
            Kecamatan Batudaa Pantai <br />Kabupaten Gorontalo
            <br /> Provinsi Gorontalo
          </p>
          <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:gap-x-12 xl:gap-x-64">
            {listDesa.map((desa, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-4">
                  <Link href={desa.link}>
                    <button
                      style={{
                        backgroundColor: desa.bgColor,
                      }}
                      className={`w-44 rounded-lg py-4 font-futura text-xl md:text-2xl font-bold uppercase text-purplish-200`}
                    >
                      {desa.nama}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

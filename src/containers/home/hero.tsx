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
    <div className="relative w-full bg-cover bg-top bg-no-repeat pt-4 md:pt-12 2xl:pt-20">
      <Image
        quality={100}
        src="/hero.png"
        fill
        className="object-cover"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-y-12 px-4 py-16 text-bluish-100 xl:gap-y-20 2xl:gap-y-32">
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
          <div className="relative hidden h-44 w-4/5 justify-center lg:-mt-8 lg:flex xl:-mt-12 xl:mb-4 2xl:mb-12">
            <Image src="/pesisir.svg" className="object-fill" fill alt="" />
          </div>
          <div className="relative mb-12 h-52 w-52 justify-center md:h-72 md:w-72 lg:hidden">
            <Image src="/logo.png" className="object-fill" fill alt="" />
          </div>
          <div className="lg:hidden">
            <p className="font-beach text-5xl uppercase text-bluish-100 md:text-8xl">
              Pesisir
            </p>
            <p className="-mt-3 font-cocogoose text-[1.75rem] font-normal uppercase text-bluish-300 md:-mt-6 md:text-[3.5rem]">
              Gorontalo
            </p>
          </div>
          <p className="hidden text-center font-sans text-2xl text-white xl:inline">
            Mengabdi Bersama di Belahan Pesisir Indonesia
          </p>
        </div>
        <div className="-mt-8 flex flex-col gap-y-4">
          <p className="text-center font-cocogoose font-[350] uppercase text-bluish-100 md:text-4xl xl:text-greenish-300">
            Kawasan Desa KKN Kami
          </p>
          <p className="-mt-2 mb-2 hidden text-center font-futura text-2xl font-light md:inline">
            Kecamatan Batudaa Pantai <br />
            Kabupaten Gorontalo
            <br /> Provinsi Gorontalo
          </p>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:gap-y-0 xl:gap-x-64">
            {listDesa.map((desa, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-4">
                  <Link href={desa.link}>
                    <button
                      style={{
                        backgroundColor: desa.bgColor,
                      }}
                      className={`w-44 rounded-lg py-4 font-futura text-xl font-bold uppercase text-purplish-200 md:text-2xl`}
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

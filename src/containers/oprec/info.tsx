import Image from "next/image";
import Link from "next/link";
import React from "react";

const infoOprec = [
  {
    name: "Guidebook",
    link: "https://drive.google.com/file/d/1I2vpBbm9x0Jpfe75_yxnL6CGlxPqovPW/view?usp=sharing",
    bgColor: "#BFF0CB",
  },
  {
    name: "Prasyarat",
    link: "https://drive.google.com/drive/folders/1ibXgS1hQynlF5sZlAfbAypO-vwqKPLUX?usp=sharing",
    bgColor: "#FAE260",
  },
  {
    name: "Formulir",
    link: "https://bit.ly/OprecPesisirGorontalo2024",
    bgColor: "#2AA19D",
  },
];

function OprecInfo() {
  return (
    <div className="relative w-full bg-cover bg-top bg-no-repeat 2xl:h-screen">
      <Image
        quality={100}
        src="/hero-oprec.png"
        fill
        className="object-cover"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center gap-y-12 px-4 py-16 text-bluish-100 xl:gap-y-20">
        <div className="font-cocogoose md:pt-20 xl:pt-40 2xl:pt-44">
          <h1 className="text-center text-2xl text-bluish-100 xl:text-4xl">
            Open Recruitment
          </h1>
          <h2 className="text-center text-xl font-light text-bluish-100">
            Anggota Tim KKN PPM UGM Periode II{" "}
            <span className="font-sans font-medium text-bluish-100">2024</span>
          </h2>
        </div>
        <h1 className="text-center font-beach text-4xl xl:text-5xl">
          Pesisir Gorontalo 2024
        </h1>
        <div className="flex w-full flex-col justify-between gap-y-8 px-8 md:w-1/2 xl:w-2/5">
          {infoOprec.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="font-cocogoose xl:text-4xl">{item.name}</p>
              <Link target="_blank" href={item.link}>
                <button
                  style={{
                    backgroundColor: item.bgColor,
                  }}
                  className="rounded-md px-4 py-2 font-cocogoose font-[350] text-purplish-200 xl:text-xl"
                >
                  Kunjungi
                </button>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center font-cocogoose font-[350] xl:text-2xl">
          Jadilah Bagian dari Kami untuk Memajukan Gorontalo!
        </p>
      </div>
    </div>
  );
}

export default OprecInfo;

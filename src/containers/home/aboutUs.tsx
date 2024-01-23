import Image from "next/image";

function AboutUs() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-bluish-100 py-8 md:py-12 xl:px-32 xl:py-16">
      <div className="relative flex h-10 w-full justify-center md:h-16 md:w-1/2">
        <Image src="/about-us.svg" className="object-fill" fill alt="" />
      </div>
      <div className="mt-6 flex w-full flex-col items-center px-8">
        <p className="w-full text-center font-futura font-light text-bluish-300 md:w-4/6 md:text-xl">
          Pesisir Gorontalo merupakan tim Kuliah Kerja Nyata-Pembelajaran
          Pemberdayaan Masyarakat (KKN-PPM) Universitas Gadjah Mada yang
          melaksanakan pengabdian masyarakat untuk pemberdayaan masyarakat lokal
          pada bidang ekonomi, lingkungan, pendidikan, kesehatan, dan lain-lain
          di daerah pesisir Gorontalo.
        </p>
        <ul className="mt-4 flex gap-x-4 font-futura font-medium text-purplish-200 md:mt-12">
          <li>Berita</li>
          <span>|</span>
          <li>Anggota</li>
          <span>|</span>
          <li>Galeri</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;

import Image from "next/image";

function AboutUs() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-bluish-100 xl:px-32 py-8 md:py-12 xl:py-16">
      <div className="relative flex h-10 md:h-16 w-full md:w-1/2 justify-center">
        <Image src="/about-us.svg" className="object-fill" fill alt="" />
      </div>
      <div className="mt-6 flex w-full flex-col items-center px-8">
        <p className="w-full md:w-4/6 text-center font-futura md:text-xl font-light text-bluish-300">
          Pesisir Gorontalo merupakan tim Kuliah Kerja Nyata-Pembelajaran
          Pemberdayaan Masyarakat (KKN-PPM) Universitas Gadjah Mada yang
          mengabdikan diri untuk pemberdayaan masyarakat lokal pada bidang
          ekonomi, lingkungan, pendidikan, kesehatan, dan lain-lain di daerah
          pesisir Gorontalo.
        </p>
        <ul className="flex gap-x-4 mt-4 md:mt-12 font-futura font-medium text-purplish-200">
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

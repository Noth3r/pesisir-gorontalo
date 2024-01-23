import Image from "next/image";
import Link from "next/link";

const footerList = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/pesisirgorontalo",
    image: "/ig.svg",
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@pesisirgorontalo",
    image: "/tiktok.svg",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@KKNPesisirGorontalo",
    image: "/youtube.svg",
  },
  {
    name: "Email",
    link: "mailto:kknpesisirgorontalo2024@gmail.com",
    image: "/email.svg",
  },
];

function Footer() {
  return (
    <footer className="relative" id="contact-us">
      <div className="absolute -top-20 z-10 h-40 w-full">
        <Image src="/wave-orange.svg" className="object-fill" fill alt="" />
      </div>
      <div className="overflow-hidden relative flex h-80 w-full items-center justify-center bg-orangish-200 md:h-72 xl:h-96">
        <div className="container z-10 flex flex-col justify-between px-14 text-yellowish-100 md:flex-row">
          <div className="flex flex-col">
            <div>
              <p className="font-beach text-xl uppercase">Pesisir Gorontalo</p>
              <p className="-mt-1 font-cocogoose text-sm font-light md:text-base">
                KKN PPM UNIVERSITAS GADJAH MADA
              </p>
            </div>
            <ul className="flex h-full items-center justify-start gap-x-8 font-futura text-xl font-medium text-purplish-200">
              {footerList.map((item, index) => (
                <li key={index}>
                  <Link target="_blank" href={item.link}>
                    <div className="relative h-4 w-4 md:h-12 md:w-12">
                      <Image
                        src={item.image}
                        className="object-fill"
                        fill
                        alt=""
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:mt-0 mt-6">
            <p className="font-cocogoose font-[350] uppercase">
              Diselenggarakan Oleh
            </p>
            <div className="mt-2 flex w-full justify-center gap-x-4 md:justify-between">
              <div className="relative h-20 w-20 md:h-28 md:w-28">
                <Image
                  src="/logo-ugm.svg"
                  className="object-fill"
                  fill
                  alt=""
                />
              </div>
              <div className="relative h-20 w-20 md:h-28 md:w-28">
                <Image
                  src="/logo-kkn.svg"
                  className="object-fill"
                  fill
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 mx-auto hidden h-64 w-full xl:inline">
          <Image
            src="/line-footer-orange.svg"
            className="object-fill"
            fill
            alt=""
          />
        </div>
        <div className="absolute bottom-0 z-0 mx-auto h-96 w-full md:hidden">
          <Image
            src="/line-footer-orange-mobile.svg"
            className="object-fill"
            fill
            alt=""
          />
        </div>
        <p className="absolute bottom-0 z-10 font-futura text-xs font-medium text-orangish-200 md:text-yellowish-100">
          © PESISIR GORONTALO 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;

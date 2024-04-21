"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { debounce } from "~/utils/debounce";

const navbarList = [
  {
    name: "Beranda",
    link: "/",
    active: true,
  },
  {
    name: "Blog",
    link: "/blog",
    active: false,
  },
  {
    name: "Anggota",
    link: "#",
    active: false,
  },
  {
    name: "Galeri",
    link: "#",
    active: false,
  },
  {
    name: "Contact Us",
    link: "#contact-us",
    active: true,
  },
];

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showMobile, setShowMobile] = useState(false);

  const controlNavbar = useCallback(() => {
    setShow(window.scrollY <= lastScrollY);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    const handler = debounce(controlNavbar, 100);
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [controlNavbar]);

  return (
    <>
      <nav
        className={`sticky z-50 w-full transition-all duration-700 ${
          show ? "top-0" : "-top-24"
        }`}
      >
        <div className="flex h-12 items-center justify-end bg-bluish-100 px-8 md:h-20 lg:px-14">
          <button
            onClick={() => setShowMobile(!showMobile)}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-yellowish-100 bg-orangish-200 md:h-12 md:w-12 lg:hidden"
          >
            <svg
              className="h-3 w-3 text-greenish-300 md:h-6 md:w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <TooltipProvider delayDuration={100}>
            <ul
              className={cn(
                "hidden h-full items-center gap-x-8 font-futura text-xl font-medium text-purplish-200 lg:flex",
              )}
            >
              {navbarList.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <li
                      className={cn(
                        item.active ? "hover:scale-110" : "",
                        "transition-all",
                      )}
                    >
                      <Link
                        className={cn(
                          item.active ? "cursor-pointer" : "pointer-events-none",
                        )}
                        aria-disabled={!item.active}
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    </li>
                  </TooltipTrigger>
                  {!item.active && (
                    <TooltipContent className="bg-white">
                      <p className="text-purplish-200">Coming Soon!</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </ul>
          </TooltipProvider>
        </div>
        <Link href="/">
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%)",
            }}
            className="absolute top-0 flex h-11 w-52 cursor-pointer items-center bg-purplish-200 md:h-[4.75rem] md:w-72 lg:w-96 xl:w-[26rem]"
          >
            <div className="flex w-80 items-center gap-x-2 p-2 md:ml-8 lg:ml-14">
              <div className="relative hidden h-14 w-14 md:inline">
                <Image src="/logo.png" className="object-contain" fill alt="" />
              </div>
              <div className="flex flex-col justify-center text-white">
                <p className="-mb-1 font-beach uppercase text-bluish-100 md:text-3xl lg:text-4xl">
                  Pesisir <span className="md:hidden">Gorontalo</span>
                </p>
                <p className="-mt-1 hidden font-cocogoose font-[350] uppercase md:inline md:text-[1.1rem] lg:text-xl">
                  Gorontalo
                </p>
              </div>
            </div>
          </div>
        </Link>
      </nav>
      <div
        className={`${
          showMobile && show ? "right-8 md:right-8" : "-right-64 md:-right-96"
        } fixed top-10 z-50 transition-all duration-700 md:top-20 md:w-auto lg:hidden`}
      >
        <ul className="mt-4 flex flex-col gap-3 bg-purplish-100 p-4 font-medium rtl:space-x-reverse">
          {navbarList.map((item, index) => (
            <li
              key={index}
              className="border border-purplish-200 bg-bluish-100 hover:bg-gray-100 md:px-2"
            >
              <Link
                href={item.link}
                aria-disabled={!item.active}
                className={cn(
                  item.active ? "cursor-pointer" : "pointer-events-none",
                  "block rounded px-3 py-2 font-cocogoose text-purplish-200",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute -left-4 top-4 z-50 h-[18.5rem] w-4">
          <Image src="/border-nav.svg" className="object-cover" fill alt="" />
        </div>
        <div className="absolute -bottom-[5.25rem] left-[3.9rem] z-50 h-[10.4rem] w-4 -rotate-90 md:-bottom-[6.25rem] md:left-[4.4rem] md:h-[11.75rem]">
          <Image src="/border-nav.svg" className="object-cover" fill alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;

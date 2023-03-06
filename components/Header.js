import Image from "next/image";
import React, { useState, useEffect } from "react";
import netflixLogo from "../public/Netflix_logo.svg";
import { HiSearch, HiBell } from "react-icons/hi";

import Link from "next/link";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#064e13]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={netflixLogo}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="netflix"
        />

        <ul className="hidden gap-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">Sports</li>
          <li className="headerLink">Games</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center gap-4 text-sm font-light">
        <HiSearch size={25} className="hidden sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <HiBell size={25} className="" />
        <Link href="/accounts">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

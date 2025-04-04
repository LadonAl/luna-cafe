"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../common/brand";
import { Button } from "../common/buttons";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the saved position
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <header
      className={`group fixed w-full mx-auto z-10 [&:not(.scrolled)_*]:text-white [.scrolled]:bg-cream [.scrolled]:shadow-md ${scrollPosition && "scrolled"}`}
    >
      <nav className='flex container mx-auto py-8 group-[.scrolled]:py-4 items-center gap-8'>
        <Link href='/'>
          <Logo upperClassName='group-[.scrolled]:text-xl' lowerClassName='group-[.scrolled]:text-sm' />
        </Link>

        <Link href='#'>About</Link>
        <Link href='#'>Stores</Link>
        <Link href='#'>Products</Link>

        <Button color='primary' size='medium' variant='filled' href='#' className='ms-auto'>
          Book Now
        </Button>
      </nav>
    </header>
  );
};

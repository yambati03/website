import React, { useState } from "react";
import { useTheme } from "next-themes";
import NavButton from "./Navigation/NavButton";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import {
  SunIcon,
  DocumentTextIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Photography", href: "/photography" },
];

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    sessionStorage.setItem("theme", newTheme);
  };

  const buttonBox = () => {
    return (
      <div className='flex space-x-4 items-center'>
        <button onClick={() => toggleTheme()}>
          <SunIcon className='hover:text-zinc-600 dark:hover:text-zinc-400 duration-100 w-6 h-6' />
        </button>
        <Link href='/resume.pdf' passHref>
          <DocumentTextIcon className='hover:text-zinc-600 hover:cursor-pointer dark:hover:text-zinc-400 duration-100 w-5 h-5' />
        </Link>
        <a href='https://github.com/yambati03' target='_blank' rel='noreferrer'>
          <FaGithub className='hover:text-zinc-600 dark:hover:text-zinc-400 duration-100 w-5 h-5' />
        </a>
      </div>
    );
  };

  return (
    <>
      <nav className='flex justify-between items-center mx-4'>
        <div className='font-bold'>
          <Link href='/'>Yashas Ambati</Link>
        </div>
        <div className='space-x-4 items-center font-semibold hidden md:flex'>
          {navigation.map((item) => (
            <NavButton key={item.name} href={item.href}>
              {item.name}
            </NavButton>
          ))}
        </div>
        <div className='space-x-10 items-center font-semibold hidden md:flex'>
          {buttonBox()}
        </div>
        <button className='ml-auto md:hidden' onClick={() => setOpen(true)}>
          <MenuIcon className='h-6 w-6' />
        </button>
      </nav>
      <div
        className={`transition-all ease-out fixed top-0 bottom-0 right-0 w-64 p-6 bg-zinc-50 dark:bg-zinc-900 z-40 shadow ${
          open ? "" : "-right-80"
        }`}
      >
        <div className='flex'>
          <button className='ml-auto' onClick={() => setOpen(false)}>
            <XIcon className='h-6 w-6' />
          </button>
        </div>
        <div className='space-x-10 font-semibold flex flex-col items-end mt-8'>
          {buttonBox()}
        </div>
        <div className='flex flex-col justify-center items-end mt-4'>
          {navigation.map((item) => (
            <NavButton key={item.name} href={item.href}>
              {item.name}
            </NavButton>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;

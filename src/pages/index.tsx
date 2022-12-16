import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/favicon/logo.svg";
import favicon from "/public/favicon/favicon.svg";
import github from "/public/assets/companies/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const HomePage: NextPage = () => {
  const links: {
    name: string;
    href: string;
  }[] = [
    {
      name: "Docs",
      href: "#"
    },
    {
      name: "Blog",
      href: "#"
    },
    {
      name: "Features",
      href: "#"
    }
  ];
  return (
    <>
      <Head>
        <title>Oncode</title>
      </Head>
      <div className='h-screen w-screen relative bg-home overflow-auto overflow-x-hidden'>
        <div className='absolute h-full w-full z-0 top-0 max-w-2xl'>
          <div className='h-full w-full relative'>
            <div className='absolute flex justify-evenly h-full w-screen'>
              <div className='w-56 h-full bg-bluish bg-opacity-5 bg-gradient-to-b'></div>
              <div className='w-56 h-full bg-greenish bg-opacity-5 bg-gradient-to-b'></div>
            </div>
            <div className='absolute bottom-0 bg-red h-80 w-screen flex flex-col z-10'>
              <div className='h-1/2 w-screen overflow-hidden flex relative'>
                {Array(100)
                  .fill("")
                  .map((text: string, index: number) => (
                    <div
                      key={index}
                      className={` ${
                        (index + 1) % 3 != 0
                          ? "border-[1px] min-w-[12em] h-full border-gray-300 border-opacity-10"
                          : `min-w-[12em] h-full blur-lg rounded-[40%] bg-opacity-30 ${
                              index % 2 == 0 ? "bg-greenish" : "bg-purple"
                            } `
                      }`}
                    ></div>
                  ))}
              </div>
              <div className='h-1/2 w-screen overflow-hidden flex'>
                {Array(100)
                  .fill("")
                  .map((text: string, index: number) => (
                    <div
                      key={index}
                      className='border-[1px] min-w-[12em] h-full border-gray-300 border-opacity-10'
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className='h-screen w-full z-50 absolute max-w-screen'>
          <div className='h-24 w-screen p-4 md:px-12 flex items-center justify-between'>
            <div className='w-36 h-full flex items-center'>
              <div className='hidden md:block w-full'>
                <Image src={logo} alt='logo' />
              </div>
              <div className='flex md:hidden w-14 items-center justify-center'>
                <FontAwesomeIcon
                  icon={faBars}
                  className='text-white text-3xl'
                />
              </div>
            </div>
            <div className='hidden w-fit text-white md:flex gap-5 text-lg'>
              {links.map((link) => (
                <Link href={link.href} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className='w-fit flex items-center gap-3 md:gap-6 text-lg text-white justify-center'>
              <div className='w-9 flex items-center justify-center'>
                <Image src={github} alt='GitHub' />
              </div>
              <div>
                <Link href='/login' className='cursor-pointer'>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className='h-[calc(100vh_-_6rem)] min-h-[calc(100vh_-_6rem)] p-4 w-4/5 lg:w-3/5 m-auto flex items-center pt-[5em] flex-col gap-10'>
            <h1 className='text-[2.5em] md:text-[3.5em] xl:text-[3em] 2xl:text-[5em] text-white text-center'>
              Always code with Super fast cloud tooling
            </h1>
            <p className='lg:w-2/4 text-white text-[1.2em] md:text-[1.4em] text-center'>
              Super Fast, automated cloud development environments for
              collaboration,no setup, in seconds.
            </p>
            <button className='bg-white p-4 px-12 text-xl rounded-md'>
              <Link href={"/login"}>Get started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

//Home Page

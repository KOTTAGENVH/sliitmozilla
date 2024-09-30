/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React from "react";
import Head from "next/head";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import AnimatedButton from "@/components/animatedBtn";
import Image from "next/image";

function Page() {
  function handleViewAllClick() {
    window.open("https://medium.com/@infosliitmcc", "_blank");
  }

  return (
    <div className="h-screen w-screen bg-white">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Drawer />
      <div className="h-auto w-full flex flex-col justify-center items-center p-12">
        <h1 className="font-montserrat text-customBrown text-2xl md:text-5xl font-bold">
          Mozilla Campus Club
        </h1>
        <div className="flex items-center justify-center m-2">
          <h1 className="font-montserrat text-orange-300 text-2xl md:text-5xl font-bold">
            &ldquo;
          </h1>
          <h1 className="font-montserrat text-customOrange text-2xl md:text-5xl font-bold">
            Blog
          </h1>
          <h1 className="font-montserrat text-orange-300 text-2xl md:text-5xl font-bold">
            &rdquo;
          </h1>
        </div>
        <p className="text-center text-stone-400 p-4 flex items-center justify-center text-sm md:text-2xl">
          Your Gateway to the Web&apos;s Future. Dive into the world of open
          source, technology, and innovation with our engaging articles and
          insights. Join our community in exploring the exciting possibilities
          of the web.
        </p>
        <AnimatedButton
          name=" View all "
          handleButtonClick={handleViewAllClick}
        />
      </div>
      <div className="h-auto w-full flex flex-row justify-center items-center p-12">
        <Image
          src="/blogDummy.jpg"
          width={100}
          height={100}
          alt="Mozilla Logo"
          className="cursor-pointer rounded-3xl h-56 w-9/12"
        />
        <div className="h-56 w-full m-2 p-2">
          <span className="bg-orange-100 text-customOrange text-md 
          me-2 px-2.5 py-1.5 rounded-3xl ">
            Latest
          </span>
          <h1 className="text-3xl text-black p-4">
          The Power of Open Source: How Mozilla Shaped the Web
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Page;

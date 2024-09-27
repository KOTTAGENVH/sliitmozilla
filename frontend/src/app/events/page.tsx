"use client";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import React from "react";

function Page() {
  return (
    <div className="h-screen w-screen bg-white">
      <Header />
      <Drawer/>
    </div>
  );
}

export default Page;

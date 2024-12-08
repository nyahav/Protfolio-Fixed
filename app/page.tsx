"use client"

import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Clients from "@/components/clients";
import Experince from "@/components/Experince";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav}  from "@/components/ui/FloatingNavBar";

//import { FaHome, FaInfoCircle } from "react-icons/fa"; 
/**
 * import { navItems } from "@/data";
import { socialMedia } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
**/

export default function Home() {
  return (
    <main className="relative bg-black-100 
    flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <h1>
        <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects/>
          <Clients />
          <Experince/>
          <Approach/>
          <Footer />
        </h1>
      </div>
    </main>
  );
}

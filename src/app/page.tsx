import React from "react";
import "./styles/home.scss";
import Image from "next/image";
import HomeLinks from "@/components/HomeLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisa Folawiyo | Luxury African Fashion with Hand Embellishment",
  description: "Discover Lisa Folawiyo's luxury African fashion, where hand embellishment meets contemporary elegance. Shop our latest collections today.",
};

export default function Home() {
  return (
    <section className="home-hero-section">
      <div className="home-slider-wrapper">
        <div className="home-slider-item home-slider-item1"></div>
        <div className="home-slider-item home-slider-item2"></div>
        <div className="home-slider-item home-slider-item3"></div>
        <div className="home-slider-item home-slider-item4"></div>
      </div>
      <div className="home-text-wrapper">
        <Image 
          src="/media/images/logo-white-md.png"
          alt="Lisafolawiyo Logo"
          width={230}
          height={80}
          className="w-[170px] absolute top-10 left-1/2 -translate-x-1/2 md:w-[230px] md:block" 
        />
        <div className="home-links-wrapper">
          <HomeLinks />
        </div>
      </div>
    </section>
  );
}

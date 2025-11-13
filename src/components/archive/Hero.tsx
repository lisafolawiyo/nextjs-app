'use client';

import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Timeline, VideoPlayer } from '@/components/archive';

function HeroMobile() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Check if screen is sm (640px) or larger
    const isDesktop = window.innerWidth >= 640;
    setVideoSrc(
      isDesktop
        ? 'https://res.cloudinary.com/aiyeola/video/upload/v1763021322/lisa-folawiyo/IMG_9504_xmxmmt.mp4'
        : 'https://res.cloudinary.com/aiyeola/video/upload/v1763020920/lisa-folawiyo/IMG_9505_twy9bt.mp4',
    );
  }, []);

  return (
    <>
      <section className="relative h-screen w-full">
        {videoSrc && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-contain"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end justify-center px-6 pb-32">
          <button
            onClick={() => setIsPlayerOpen(true)}
            className="group flex items-center justify-center gap-3 border border-white/60 px-6 py-3 text-xs tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black sm:text-sm"
          >
            <span>PLAY VIDEO</span>
          </button>
        </div>

        {isPlayerOpen && (
          <div className="absolute inset-0 top-0 z-[300] flex items-center justify-center bg-black/90 p-4">
            <VideoPlayer
              videoUrl={videoSrc}
              onClose={() => setIsPlayerOpen(false)}
            />
          </div>
        )}
      </section>
    </>
  );
}

function HeroDesktop() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!heroRef.current || !imageContainerRef.current || !buttonRef.current)
      return;

    // Animate button on load
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      },
    );

    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        if (imageContainerRef.current) {
          gsap.to(imageContainerRef.current, {
            yPercent: -30 * self.progress,
            ease: 'none',
          });
        }

        if (buttonRef.current) {
          gsap.to(buttonRef.current, {
            opacity: 1 - self.progress * 1.5,
            y: self.progress * 50,
            ease: 'none',
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section ref={heroRef} className="relative h-screen">
        <div
          ref={imageContainerRef}
          className="absolute left-0 top-0 h-full w-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          >
            <source
              src="https://res.cloudinary.com/aiyeola/video/upload/v1763021322/lisa-folawiyo/IMG_9504_xmxmmt.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 z-10 flex items-end justify-start px-8 pb-32 md:px-16">
          {!isPlayerOpen && (
            <button
              ref={buttonRef}
              onClick={() => {
                setIsPlayerOpen(true);
              }}
              className="group relative flex items-center justify-center border-2 border-white/80 bg-transparent px-8 py-4 text-sm tracking-widest text-white opacity-0 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white hover:bg-white hover:text-black md:text-base"
            >
              <span className="relative z-10">PLAY VIDEO</span>
            </button>
          )}
        </div>

        {isPlayerOpen && (
          <div className="absolute inset-0 top-0 z-[300] flex items-center justify-center bg-black/90 p-4">
            <VideoPlayer
              videoUrl="https://res.cloudinary.com/aiyeola/video/upload/v1763021322/lisa-folawiyo/IMG_9504_xmxmmt.mp4"
              onClose={() => setIsPlayerOpen(false)}
            />
          </div>
        )}
      </section>

      <section className="relative z-10 bg-white py-20">
        <Timeline />
      </section>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <div className="block lg:hidden">
        <HeroMobile />

        <section className="relative z-10 bg-white py-12">
          <Timeline />
        </section>
      </div>

      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </>
  );
}

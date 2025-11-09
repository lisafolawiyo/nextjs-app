'use client';

import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Timeline, VideoPlayer } from '@/components/archive';

function HeroMobile() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/gifs/Hero.gif"
          alt="Hero background"
          className="h-full w-full object-cover"
          fill
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full text-left">
            <h2 className="mb-2 text-[48px] font-bold leading-[48px] text-white sm:text-[60px] sm:leading-[60px]">
              THE LISA FOLAWIYO
            </h2>
            <div className="flex flex-col items-start gap-4 lg:flex-row">
              <h3 className="mb-6 text-[48px] font-bold leading-[48px] text-white sm:text-[60px] sm:leading-[60px]">
                ARCHIVE
              </h3>
              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                From one season to another, this archive captures the evolution
                of a movement that changed the face of African fashion. With
                print, embellishment, and craftsmanship as her signature, Lisa
                Folawiyo propelled African design into the global conversation
                leaving an indelible mark on the world of fashion.
              </p>
            </div>
            <button
              onClick={() => setIsPlayerOpen(true)}
              className="group flex items-center justify-center gap-3 border border-white/60 px-6 py-3 text-xs tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black sm:text-sm"
            >
              <span>PLAY VIDEO</span>
            </button>
          </div>
        </div>

        {isPlayerOpen && (
          <div className="absolute inset-0 top-0 z-[300] flex items-center justify-center bg-black/90 p-4">
            <VideoPlayer onClose={() => setIsPlayerOpen(false)} />
          </div>
        )}
      </section>
    </>
  );
}

function HeroDesktop() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      !heroRef.current ||
      !imageContainerRef.current ||
      !textContainerRef.current ||
      !contentRef.current ||
      !buttonRef.current ||
      !paragraphRef.current ||
      !nextSectionRef.current
    )
      return;

    const textElements = contentRef.current.querySelectorAll('h2, h3');
    const originalElements: HTMLElement[] = [];
    const blackTextWrappers: HTMLElement[] = [];

    gsap.set([buttonRef.current, paragraphRef.current], {
      opacity: 1,
      y: 0,
    });

    textElements.forEach((element, index) => {
      const originalElement = element as HTMLElement;
      originalElements.push(originalElement);

      const wrapper = document.createElement('div');
      wrapper.className = 'inline-block relative overflow-hidden';
      wrapper.style.display = 'block';

      const blackText = originalElement.cloneNode(true) as HTMLElement;
      blackText.style.color = '#212529';
      blackText.style.position = 'relative';
      blackText.style.zIndex = '1';
      blackText.id = `black-text-${index}`;
      blackTextWrappers.push(blackText);

      const whiteText = originalElement.cloneNode(true) as HTMLElement;
      whiteText.style.color = 'white';
      whiteText.style.position = 'absolute';
      whiteText.style.top = '0';
      whiteText.style.left = '0';
      whiteText.style.width = '100%';
      whiteText.style.height = '100%';
      whiteText.style.zIndex = '2';
      whiteText.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
      whiteText.id = `white-text-${index}`;

      originalElement.parentNode?.insertBefore(wrapper, originalElement);
      originalElement.remove();
      wrapper.appendChild(blackText);
      wrapper.appendChild(whiteText);
    });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: textContainerRef.current,
      pinSpacing: false,
      onUpdate: (self) => {
        const imageContainer = imageContainerRef.current;
        const nextSection = nextSectionRef.current;

        if (imageContainer && contentRef.current && nextSection) {
          const imageRect = imageContainer.getBoundingClientRect();
          const imageBottom = imageRect.bottom;
          const viewportHeight = window.innerHeight;

          textElements.forEach((_, index) => {
            const whiteText = document.getElementById(`white-text-${index}`);

            if (whiteText) {
              const textRect = whiteText.getBoundingClientRect();
              const textTop = textRect.top;
              const textBottom = textRect.bottom;
              const textHeight = textRect.height;

              const intersectionTop = Math.max(textTop, 0);
              const intersectionBottom = Math.min(textBottom, imageBottom);
              const visibleHeight = Math.max(
                0,
                intersectionBottom - intersectionTop,
              );

              const clipPercentage = (visibleHeight / textHeight) * 100;
              const finalClip = Math.max(0, Math.min(100, clipPercentage));

              whiteText.style.clipPath = `polygon(0 0, 100% 0, 100% ${finalClip}%, 0 ${finalClip}%)`;
            }
          });

          gsap.to(imageContainerRef.current, {
            yPercent: -50 * self.progress,
            ease: 'none',
            overwrite: true,
            duration: 0.1,
          });

          const fadeStart = viewportHeight * 0.6;
          const fadeEnd = viewportHeight * 0.1;

          const fadeProgress = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(fadeEnd, fadeStart, 0, 1, imageBottom),
          );

          if (buttonRef.current && paragraphRef.current) {
            buttonRef.current.style.opacity = fadeProgress.toString();
            paragraphRef.current.style.opacity = fadeProgress.toString();

            if (fadeProgress === 0) {
              buttonRef.current.style.pointerEvents = 'none';
              paragraphRef.current.style.pointerEvents = 'none';
            } else {
              buttonRef.current.style.pointerEvents = 'auto';
              paragraphRef.current.style.pointerEvents = 'auto';
            }
          }
        }
      },
    });

    ScrollTrigger.create({
      trigger: nextSectionRef.current,
      start: 'top bottom',
      end: 'center center',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        blackTextWrappers.forEach((blackText) => {
          gsap.to(blackText, {
            clipPath: `polygon(0 ${progress * 100}%, 100% ${
              progress * 100
            }%, 100% 100%, 0 100%)`,
            ease: 'none',
            duration: 0.1,
            overwrite: true,
          });
        });

        gsap.to(textContainerRef.current, {
          y: -progress * 100,
          ease: 'none',
          duration: 0.1,
          overwrite: true,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      originalElements.forEach((element, index) => {
        const wrapper = document.getElementById(
          `black-text-${index}`,
        )?.parentElement;
        if (wrapper) {
          wrapper.parentElement?.insertBefore(element, wrapper);
          wrapper.remove();
        }
      });
    };
  }, []);

  return (
    <div>
      <section ref={heroRef} className="relative" style={{ height: '200vh' }}>
        <div
          ref={imageContainerRef}
          className="absolute left-0 top-0 h-screen w-full"
        >
          <Image
            src="/gifs/Hero.gif"
            alt="Hero background"
            className="h-full w-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div
          ref={textContainerRef}
          className="absolute left-0 top-0 flex h-screen w-full items-center justify-center md:mt-16"
        >
          <div className="w-full px-8">
            <div ref={contentRef} className="text-left">
              <h2 className="mb-4 text-[72px]  font-bold leading-[60px] text-white lg:text-[96px] lg:leading-[82px]">
                THE LISA FOLAWIYO
              </h2>
              <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-16">
                <h3 className="text-[72px] font-bold leading-[70px] text-white lg:text-[96px] lg:leading-[80px] xl:mt-4">
                  ARCHIVE
                </h3>
                <p
                  ref={paragraphRef}
                  className="max-w-4xl pt-3 text-base leading-relaxed text-white/90 lg:text-[20px]"
                >
                  From one season to another, this archive captures the
                  evolution of a movement that changed the face of African
                  fashion. With print, embellishment, and craftsmanship as her
                  signature, Lisa Folawiyo propelled African design into the
                  global conversation leaving an indelible mark on the world of
                  fashion.
                </p>
              </div>
              {!isPlayerOpen && (
                <button
                  onClick={() => setIsPlayerOpen(true)}
                  ref={buttonRef}
                  className="mt-34 group flex items-center justify-center gap-3 border border-white/60 px-6 py-3 text-xs tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black md:w-[219px] md:text-base"
                >
                  <span>PLAY VIDEO</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {isPlayerOpen && (
          <div className="absolute inset-0 top-0 z-[300] flex items-center justify-center bg-black/90 p-4">
            <VideoPlayer onClose={() => setIsPlayerOpen(false)} />
          </div>
        )}
      </section>

      <section
        ref={nextSectionRef}
        className="relative z-10 bg-white py-20"
        style={{
          transform: 'translateY(0%)',
          opacity: '1',
        }}
      >
        <Timeline />
      </section>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <div className="block 2xl:hidden">
        <HeroMobile />

        <section className="relative z-10 bg-white py-12">
          <Timeline />
        </section>
      </div>

      <div className="hidden 2xl:block">
        <HeroDesktop />
      </div>
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseGsapFadeInOptions {
  duration?: number;
  delay?: number;
  y?: number;
  stagger?: number;
  start?: string;
  triggerOnce?: boolean;
}

export const useGsapFadeIn = (options: UseGsapFadeInOptions = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    y = 30,
    start = 'top 80%',
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: y,
    });

    // Create ScrollTrigger animation
    const ctx = gsap.context(() => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: triggerOnce
            ? 'play none none none'
            : 'play none none reverse',
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [duration, delay, y, start, triggerOnce]);

  return elementRef;
};

export const useGsapFadeInChildren = (options: UseGsapFadeInOptions = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    y = 30,
    stagger = 0.15,
    start = 'top 80%',
    triggerOnce = true,
  } = options;

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = Array.from(container.children);

    // Set initial state for all children
    gsap.set(children, {
      opacity: 0,
      y: y,
    });

    // Create ScrollTrigger animation with stagger
    const ctx = gsap.context(() => {
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: start,
          toggleActions: triggerOnce
            ? 'play none none none'
            : 'play none none reverse',
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [duration, delay, y, stagger, start, triggerOnce]);

  return containerRef;
};

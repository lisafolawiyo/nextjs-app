'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface ImageGalleryModalProps {
  images: { src: string; alt?: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function ImageGalleryModal({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && overlayRef.current && modalRef.current) {
      if (isOpen) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' },
        );
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        );
      } else {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
        });
        gsap.to(modalRef.current, {
          opacity: 0,
          scale: 0.95,
          y: 10,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => setShouldRender(false),
        });
      }
    }
  }, [isOpen, shouldRender]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="flex h-[85vh] w-[85vw] flex-col bg-white  shadow-2xl"
      >
        <div className="flex items-center justify-between  px-4 py-4 pt-10 md:px-8">
          <button
            onClick={onClose}
            className="flex  items-center gap-x-2 text-sm text-[#212529] transition-colors hover:text-gray-600 md:text-base"
            aria-label="Close gallery"
          >
            <ChevronLeft />
            <span>Back</span>
          </button>

          {/* Image Counter */}

          <div className="border-1 flex items-center justify-center border border-black py-2 text-sm text-[#212529] max-sm:hidden md:w-[200px] md:text-base">
            <span>
              {currentIndex + 1}/{images.length}
            </span>
          </div>
        </div>

        {/* Main Image */}

        <div className="border-1 mx-auto my-4 flex w-[140px] items-center justify-center border border-black py-2 text-sm text-[#212529] sm:hidden md:text-base">
          <span>
            {currentIndex + 1}/{images.length}
          </span>
        </div>
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-8 md:px-20">
          <Image
            src={images[currentIndex]?.src ?? '/media/images/placeholder.png'}
            alt={images[currentIndex]?.alt ?? `Image ${currentIndex + 1}`}
            width={1200}
            height={1200}
            className="max-h-full w-auto max-w-full object-contain"
            priority
          />
        </div>

        {/* Bottom Navigation Section */}
        <div className="px-4 py-4 md:px-8">
          <div className="mx-auto flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="border border-[#212529] bg-white p-2 text-[#212529] transition-all hover:bg-black hover:text-white md:p-3"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="border border-[#212529] bg-white p-2 text-[#212529] transition-all hover:bg-black hover:text-white md:p-3"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { ChevronLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeData = [
    {
      american: '2',
      alphabetical: 'XXS',
      jbl: '6',
      bust: '32',
      waist: '24½',
      hips: '34½',
    },
    {
      american: '4',
      alphabetical: 'XS',
      jbl: '8',
      bust: '34',
      waist: '26½',
      hips: '36½',
    },
    {
      american: '6',
      alphabetical: 'S',
      jbl: '10',
      bust: '36',
      waist: '28½',
      hips: '38½',
    },
    {
      american: '8',
      alphabetical: 'M',
      jbl: '12',
      bust: '38',
      waist: '30½',
      hips: '40½',
    },
    {
      american: '10',
      alphabetical: 'L',
      jbl: '14',
      bust: '40',
      waist: '32½',
      hips: '42½',
    },
    {
      american: '12',
      alphabetical: 'XL',
      jbl: '16',
      bust: '43',
      waist: '35½',
      hips: '45½',
    },
    {
      american: '14',
      alphabetical: 'XXL',
      jbl: '18',
      bust: '45',
      waist: '37½',
      hips: '47½',
    },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="flex h-[60vh] w-[85vw] flex-col bg-white shadow-2xl md:h-[85vh]"
      >
        <div className="flex items-center justify-between border-b border-[#212529] px-4 py-4 md:px-10 md:py-6">
          <button
            onClick={onClose}
            className="flex items-center gap-x-2 text-sm text-[#212529] transition-colors hover:text-gray-600 md:text-lg"
            aria-label="Close size guide"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
            <span>Back</span>
          </button>
          <h2 className="text-lg font-normal text-black md:text-3xl">
            Size Chart
          </h2>
          <div className="w-12 md:w-20"></div>
        </div>

        <div className="overflow-auto p-4 md:p-10">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="border border-black px-3 py-3 text-left text-xs font-normal md:px-6 md:py-4 md:text-xl">
                    American
                  </th>
                  <th className="border border-black px-3 py-3 text-left text-xs font-normal md:px-6 md:py-4 md:text-xl">
                    Alphabetical
                  </th>
                  <th className="border border-black px-3 py-3 text-left text-xs font-normal md:px-6 md:py-4 md:text-xl">
                    JBL UK
                  </th>
                  <th className="border border-black px-3 py-3 text-left text-xs font-normal md:px-6 md:py-4 md:text-xl">
                    Bust
                  </th>
                  <th className="border border-black px-3 py-3 text-left text-xs font-normal md:px-6 md:py-4 md:text-xl">
                    Waist
                  </th>
                  <th className="border border-black px-3 py-3 text-left text-xs font-normal md:px-6 md:py-4 md:text-xl">
                    Hips
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-[#212529] px-3 py-3 text-xs text-[#212529] md:px-6 md:py-4 md:text-lg">
                      {row.american}
                    </td>
                    <td className="border border-[#212529] px-3 py-3 text-xs text-[#212529] md:px-6 md:py-4 md:text-lg">
                      {row.alphabetical}
                    </td>
                    <td className="border border-[#212529] px-3 py-3 text-xs text-[#212529] md:px-6 md:py-4 md:text-lg">
                      {row.jbl}
                    </td>
                    <td className="border border-[#212529] px-3 py-3 text-xs text-[#212529] md:px-6 md:py-4 md:text-lg">
                      {row.bust}
                    </td>
                    <td className="border border-[#212529] px-3 py-3 text-xs text-[#212529] md:px-6 md:py-4 md:text-lg">
                      {row.waist}
                    </td>
                    <td className="border border-[#212529] px-3 py-3 text-xs text-[#212529] md:px-6 md:py-4 md:text-lg">
                      {row.hips}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

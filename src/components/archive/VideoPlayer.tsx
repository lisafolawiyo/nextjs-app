'use client';

import { useRef, useState } from 'react';

import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl?: string;
  onClose: () => void;
}

export function VideoPlayer({ videoUrl, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    onClose();
  };

  // Autoplay when component mounts
  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] h-screen w-screen bg-black"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        src={
          videoUrl ||
          'https://res.cloudinary.com/aiyeola/video/upload/v1762877652/lisa-folawiyo/IMG_9282_lgjpyj.mp4'
        }
        onClick={handlePlayPause}
        onLoadedData={handleVideoLoad}
        playsInline
        autoPlay
        muted={isMuted}
        controls={false}
      />

      {/* Top Controls Bar */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-start justify-between p-4">
        <button
          onClick={handleFullscreen}
          className="border border-white bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:text-white"
        >
          {isFullscreen ? 'MINIMIZE' : 'FULLSCREEN'}
        </button>

        <button
          onClick={handleClose}
          className="border border-white bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
        >
          CLOSE
        </button>
      </div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between bg-black bg-opacity-80 p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className="bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-200"
          >
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>

          <button
            onClick={handleMuteToggle}
            className="text-white transition-colors hover:text-gray-300"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        <div className="text-sm text-white">
          <span className="font-medium">SOUND:</span>{' '}
          <span
            className={`font-bold ${
              isMuted ? 'text-red-400' : 'text-green-400'
            }`}
          >
            {isMuted ? 'OFF' : 'ON'}
          </span>
        </div>
      </div>
    </div>
  );
}

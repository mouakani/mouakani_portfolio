import React, { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e?.target instanceof Element && e.target.closest('.video-controls')) {
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div 
      className={`relative group w-full max-w-xl mx-auto ${className}`} 
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        className="w-full rounded-lg cursor-pointer"
        src={src}
        muted={isMuted}
        playsInline
        loop
      >
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-8 rounded-full bg-white/20 backdrop-blur-sm">
            <Play size={84} className="text-white" />
          </div>
        </div>
      )}
      
      <div className="video-controls absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress Bar */}
        <div 
          className="h-1.5 bg-white/30 rounded-full cursor-pointer relative group mb-3"
          onClick={(e) => {
            e.stopPropagation();
            if (!videoRef.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            handleSeek(pos * duration);
          }}
        >
          <div
            className="absolute h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <div
            className="absolute h-3 w-3 bg-white rounded-full -top-0.75 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ 
              left: `${(currentTime / duration) * 100}%`,
              transform: 'translateX(-50%)',
              marginTop: '-2px'
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Play size={20} className="text-white" />
            ) : (
              <Play size={20} className="text-white" />
            )}
          </button>
          
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isMuted ? (
              <Play size={20} className="text-white" />
            ) : (
              <Play size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
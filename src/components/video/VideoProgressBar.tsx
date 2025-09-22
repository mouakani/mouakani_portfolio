import React, { useRef } from 'react';

interface VideoProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export function VideoProgressBar({ currentTime, duration, onSeek }: VideoProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;
    onSeek(newTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={progressBarRef}
      className="h-1 bg-white/30 rounded-full cursor-pointer relative group"
      onClick={handleProgressBarClick}
    >
      <div
        className="absolute h-full bg-white rounded-full transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute h-3 w-3 bg-white rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  );
}
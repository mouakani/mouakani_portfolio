import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { VideoProgressBar } from './VideoProgressBar';

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: (e: React.MouseEvent) => void;
  onMuteToggle: (e: React.MouseEvent) => void;
  onSeek: (time: number) => void;
}

export function VideoControls({
  isPlaying,
  isMuted,
  currentTime,
  duration,
  onPlayPause,
  onMuteToggle,
  onSeek,
}: VideoControlsProps) {
  return (
    <div className="video-controls absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <VideoProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={onSeek}
      />
      <div className="flex items-center gap-4 mt-2">
        <button
          onClick={onPlayPause}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          {isPlaying ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white" />
          )}
        </button>
        
        <button
          onClick={onMuteToggle}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          {isMuted ? (
            <VolumeX size={20} className="text-white" />
          ) : (
            <Volume2 size={20} className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
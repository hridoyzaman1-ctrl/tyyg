import React, { useState, useRef, useEffect } from 'react';

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      videoRef.current.muted = newMuted;
      if (newMuted) setVolume(0);
      else setVolume(1);
    }
  };

  return (
    <div 
      className="relative w-full rounded-xl overflow-hidden shadow-2xl group border border-gray-800 bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto object-cover"
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      ></video>

      {/* Center Play Button Overlay */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300 backdrop-blur-[2px]"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center pl-1 shadow-glow transform hover:scale-110 transition-transform hover:bg-white/20">
            <i className="fas fa-play text-white text-3xl"></i>
          </div>
        </div>
      )}

      {/* Custom Controls Bar */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress Bar */}
        <div className="mb-4 relative group/progress">
          <div className="h-1 bg-white/20 rounded-full w-full overflow-hidden backdrop-blur-sm cursor-pointer">
             <div 
               className="h-full bg-gradient-to-r from-blue-500 to-purple-500 relative transition-all duration-100 ease-linear" 
               style={{ width: `${progress}%` }}
             >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
             </div>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={handleSeek}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-4 opacity-0 cursor-pointer z-10"
          />
        </div>

        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-6">
            <button onClick={togglePlay} className="hover:text-primary transition-colors focus:outline-none transform active:scale-90 transition-transform">
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
            </button>
            
            <div className="flex items-center gap-3 group/volume">
              <button onClick={toggleMute} className="hover:text-primary transition-colors w-6 focus:outline-none">
                <i className={`fas ${isMuted || volume === 0 ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
              </button>
              <div className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300 flex items-center">
                 <input 
                   type="range" 
                   min="0" 
                   max="1" 
                   step="0.1" 
                   value={volume} 
                   onChange={handleVolumeChange}
                   className="h-1 w-20 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                 />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-300">
             <span className="bg-white/10 px-2 py-0.5 rounded border border-white/5">4K Ultra HD</span>
             <i className="fas fa-expand hover:text-white cursor-pointer transition-colors text-gray-400" onClick={() => videoRef.current?.requestFullscreen()}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;

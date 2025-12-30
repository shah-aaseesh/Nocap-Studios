import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    isLandscape?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    className = "",
    autoPlay = false,
    muted = true,
    loop = true,
    isLandscape = false
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isMuted, setIsMuted] = useState(muted);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isInView && videoRef.current) {
            videoRef.current.load();
        }
    }, [isInView]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!hasStarted) setHasStarted(true);
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
        setIsMuted(!isMuted);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedData = () => {
        setIsLoaded(true);
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            if (autoPlay) {
                // If autoplay is true, we consider it started
                setHasStarted(true);
                videoRef.current.play().catch(() => {
                    setIsPlaying(false);
                });
            }
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div
            className={`relative overflow-hidden bg-black group/video ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={togglePlay}
        >
            {/* Poster Image */}
            {poster && (
                <img
                    src={poster}
                    alt="Video thumbnail"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
            )}

            <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                loop={loop}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedData={handleLoadedData}
            >
                {isInView && <source src={src} type="video/mp4" />}
            </video>

            {/* Custom Controls Overlay */}
            <div
                className={`absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 z-20 pointer-events-none ${(hasStarted && (isHovered || !isPlaying)) ? 'opacity-100' : 'opacity-0'}`}
            >
                <div
                    className="w-full px-4 mb-1 pointer-events-auto transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-2">
                        {/* Progress Bar */}
                        <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer group/progress hover:h-2 transition-all">
                            <div
                                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-100"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                            <input
                                type="range"
                                min="0"
                                max={duration || 0}
                                value={currentTime}
                                onChange={handleSeek}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-between mt-1">
                            <button
                                onClick={togglePlay}
                                className="p-1.5 text-white hover:text-primary transition-colors rounded-lg hover:bg-white/10"
                            >
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                            </button>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold font-mono text-white select-none">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </span>
                                <button
                                    onClick={toggleMute}
                                    className="p-1.5 text-white hover:text-primary transition-colors rounded-lg hover:bg-white/10"
                                >
                                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Centered Big Play Button (Initial State or Paused) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl scale-100 transition-transform duration-300 group-hover/video:scale-110">
                        <Play size={32} className="text-white ml-1" fill="currentColor" />
                    </div>
                </div>
            )}
        </div>
    );
};

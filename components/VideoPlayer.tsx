import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    className = "",
    autoPlay = false,
    muted = true,
    loop = true
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Load when 10% visible
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
            // Start loading the video
            videoRef.current.load();
        }
    }, [isInView]);

    const handleLoadedData = () => {
        setIsLoaded(true);
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented
            });
        }
    };

    return (
        <div className={`relative overflow-hidden bg-black ${className}`}>
            {/* Poster Image (Placeholder) */}
            {/* Poster Image (Placeholder) */}
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
                muted={muted}
                loop={loop}
                playsInline
                onLoadedData={handleLoadedData}
                poster={poster} // Native poster as backup
            >
                {isInView && <source src={src} type="video/mp4" />}
            </video>
        </div>
    );
};

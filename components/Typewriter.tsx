import React, { useState, useEffect } from 'react';

interface Segment {
    text: string;
    className?: string;
}

interface TypewriterProps {
    segments: Segment[];
    delay?: number;
    wait?: number;
    start?: boolean;
    loop?: boolean;
    initialDelay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
    segments,
    delay = 100,
    wait = 2000,
    start = true,
    loop = false,
    initialDelay = 0
}) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    // Calculate full text from segments
    const fullText = segments.map(s => s.text).join('');

    useEffect(() => {
        if (start) {
            const timer = setTimeout(() => {
                setHasStarted(true);
            }, initialDelay);
            return () => clearTimeout(timer);
        } else {
            setHasStarted(false);
            setDisplayText('');
            setIsFinished(false);
            setIsDeleting(false);
        }
    }, [start, initialDelay]);

    useEffect(() => {
        if (!hasStarted || isFinished) return;

        let timeout: NodeJS.Timeout;

        const handleType = () => {
            const currentLength = displayText.length;

            if (!isDeleting && currentLength < fullText.length) {
                // Typing
                setDisplayText(fullText.substring(0, currentLength + 1));
                timeout = setTimeout(handleType, delay);
            } else if (!isDeleting && currentLength === fullText.length) {
                // Finished typing
                if (loop) {
                    timeout = setTimeout(() => setIsDeleting(true), wait);
                } else {
                    setIsFinished(true);
                }
            } else if (isDeleting && currentLength > 0) {
                // Deleting
                setDisplayText(fullText.substring(0, currentLength - 1));
                timeout = setTimeout(handleType, delay / 2);
            } else if (isDeleting && currentLength === 0) {
                // Finished deleting, restart
                setIsDeleting(false);
                timeout = setTimeout(handleType, delay);
            }
        };

        timeout = setTimeout(handleType, delay);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, fullText, delay, wait, hasStarted, loop, isFinished]);

    let currentPos = 0;

    return (
        <span>
            {segments.map((segment, index) => {
                const startIdx = currentPos;
                // Calculate how much of this segment should be shown based on global displayText length
                const length = Math.max(0, Math.min(displayText.length - startIdx, segment.text.length));
                const textToShow = segment.text.substring(0, length);
                currentPos += segment.text.length;

                return (
                    <span key={index} className={segment.className}>
                        {textToShow}
                    </span>
                );
            })}
            {(!isFinished || loop) && <span className="animate-pulse">|</span>}
        </span>
    );
};

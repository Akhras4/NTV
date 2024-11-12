import React, { useEffect, useRef } from "react";
import './nav.sass';
import useMedia from 'use-media';

interface NavItemProps {
    name: string;
    link: string;
    videoSrc: string;
    logSrc?:string
}

const Navitem: React.FC<NavItemProps> = ({ name, link, videoSrc }) => {
    const navItemRef = useRef<HTMLDivElement | null>(null);
    const logoItemRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isWide = useMedia({ maxWidth: '800px' });

    const isLogoItem = name === "logo"; //logo name chang it 

    const mouseEnter = () => {
        if (!isLogoItem && videoRef.current) {
            videoRef.current.play();
        }
    };

    const mouseLeave = () => {
        if (!isLogoItem && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        const currentNavItem = isLogoItem ? logoItemRef.current : navItemRef.current;
        const video = videoRef.current;
        if (isLogoItem && video) {
            video.play();
        }

        if (currentNavItem && !isWide) {
            currentNavItem.addEventListener('mouseenter', mouseEnter);
            currentNavItem.addEventListener('mouseleave', mouseLeave);
        }

        return () => {
            if (currentNavItem && !isWide) {
                currentNavItem.removeEventListener('mouseenter', mouseEnter);
                currentNavItem.removeEventListener('mouseleave', mouseLeave);
            }
        };
    }, [isWide, isLogoItem]);

    useEffect(() => {
        if (videoRef.current) {
            if (isWide) {
                videoRef.current.play();
            } else if (!isLogoItem) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isWide, isLogoItem]);

    return (
        <a href={link}>
            <div className="NavItemCon" ref={isLogoItem ? logoItemRef : navItemRef}>
                <div className="contentWrapper">
                    <div className="textWrapper">
                        {isLogoItem ?(
                        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                        <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="4em" fill="#1e3a8a" text-anchor="middle">NTV</text>
                        <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="2em" fill="#1e3a8a" text-anchor="middle">beveiliging</text>
                      </svg>
                        ):(
                        <>
                            <h1 className="NavItemText">{name}</h1>
                            <h1 className="NavItemText secondary">{name}</h1>
                        </>
                        )}
                        
                    </div>
                </div>
                <div className="bg"></div>
                <video
                    ref={videoRef}
                    className="NavItemVideo"
                    src={videoSrc}
                    muted
                    loop
                    controls={false}
                />
            </div>
        </a>
    );
};

export default Navitem;
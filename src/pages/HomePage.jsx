import React from 'react';
// Assuming ScrollDownIcon is in a components/Icons directory
// If it's still in App.jsx, you might need to move it or adjust the import path
// For now, let's assume it's moved to its own file for better organization
// import ScrollDownIcon from '../components/Icons/ScrollDownIcon'; // Example path

// If ScrollDownIcon is simple enough, you can redefine it here or import from a shared icons file
const ScrollDownIcon = ({ color = "#292528" }) => (
    <div className="scroll-down-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    </div>
);

const HomePage = () => {
    return (
        <section id="home" className="hero-section page-padding">
            <div className="hero-text-container">
                <div className="hero-content">
                    <h1>
                        Sanvar Studio:<br />
                        Crafting Interactive Experiences.
                    </h1>
                    <p>
                        Pioneering 3D Games, Web Development, HTML5 Games & Playable Ads.
                    </p>
                </div>
            </div>
            <div className="hero-video-container">
                <video
                    // IMPORTANT: Replace with the path to your video file
                    // For example, if your video is in `public/videos/hero-bg.mp4`, use "/videos/hero-bg.mp4"
                    src="/videos/placeholder-hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline // Important for iOS and inline playback
                    className="hero-video"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default HomePage;

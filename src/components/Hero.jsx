import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import heroVideo from "../assets/video/hero-video.mp4";
import "./Hero.css";
import ValorantButton from "./ValorantButton";
const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const heroLogoRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      heroSubtitleRef.current,
      {
        opacity: 0,
        y: 20,
        ease: "power2.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      heroLogoRef.current,
      {
        opacity: 0,
        y: 20,
        ease: "power2.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      }
    );

    gsap.fromTo(
      ctaButtonRef.current,
      {
        opacity: 0,
        y: 20,
        ease: "power2.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
      }
    );
  }, []);

  const toggleVolume = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const mutedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  );

  const unmutedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  );

  return (
    <section className="hero">
      <div className="video-background">
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle" ref={heroSubtitleRef}>
          Your Ultimate Valorant Companion App
        </p>
        <img
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=375"
          alt="hero logo"
          className="hero-logo"
          ref={heroLogoRef}
        />
        <a
          href="https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe"
          download
          style={{ textDecoration: 'none' }}
        >
          <ValorantButton variant="red">DOWNLOAD NOW</ValorantButton>
        </a>

      </div>

      <div
        id="volume-control"
        className="volume-control"
        onClick={toggleVolume}
      >
        {isMuted ? mutedIcon : unmutedIcon}
      </div>
    </section>
  );
};

export default Hero;

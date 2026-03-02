import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onLetsGoClick: () => void;
}

export default function HeroSection({ onLetsGoClick }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(iconRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
      })
      .from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
      }, '-=0.6')
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.3');

      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 0.9,
        opacity: 0.3,
        filter: 'blur(10px)',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden z-10"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/30 rounded-full blur-sm"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center px-6">
        <div
          ref={iconRef}
          className="inline-block mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="128" viewBox="0 0 100 100" width="128">
            <path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#3b82f6"></path>
          </svg>
        </div>

        <h1
          ref={titleRef}
          className="text-8xl md:text-9xl font-black mb-6 tracking-tight"
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 80px rgba(59, 130, 246, 0.5)',
          }}
        >
          VALRadiant
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-12"
        >
          App that they don't want you to know.
        </p>

        <button
          ref={buttonRef}
          onClick={onLetsGoClick}
          className="group relative z-30 px-12 py-5 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-sm border-2 border-blue-400"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 1), rgba(6, 182, 212, 1))',
            boxShadow: '0 15px 50px rgba(59, 130, 246, 0.7), 0 0 60px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            opacity: 0,
            transform: 'scale(0.8)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <span className="relative flex items-center justify-center gap-3 font-extrabold tracking-wide">
            LETS GO
          </span>
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
        <span className="text-blue-400 text-sm uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}

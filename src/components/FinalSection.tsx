import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Users, TrendingUp, Search } from 'lucide-react';

interface FinalSectionProps {
  switchAudio: (newSrc: string) => void;
}

export default function FinalSection({ switchAudio }: FinalSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({
    users: 0,
    matches: 0,
    searches: 0,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
        y: 100,
      });

      gsap.fromTo(buttonRef.current,
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 0.5,
          },
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
        }
      );

      gsap.from(statsRef.current?.children || [], {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const targets = {
              users: 10000,
              matches: 300000,
              searches: 100000,
            };

            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);

              setStats({
                users: Math.floor(targets.users * easeOutQuart),
                matches: Math.floor(targets.matches * easeOutQuart),
                searches: Math.floor(targets.searches * easeOutQuart),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)
            `,
            backgroundSize: '100px 100px',
            animation: 'moveGrid 20s linear infinite',
          }}
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-12"
      >
        <div className="space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Available Now
            </span>
          </div>

          <h2
            className="text-7xl md:text-8xl font-black leading-tight"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #3b82f6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 100px rgba(59, 130, 246, 0.5)',
            }}
          >
            Rise to Radiant
          </h2>

          <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-2xl mx-auto">
            Join thousands of players elevating their game with VALRadiant
          </p>
        </div>

        <button
          ref={buttonRef}
          onClick={() => {
            switchAudio('/download.mp3');
            const link = document.createElement('a');
            link.href = 'https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe';
            link.download = 'VALRadiant.Setup.1.4.1.exe';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="group relative px-12 py-6 text-xl font-bold text-white rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm border-2 border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(6, 182, 212, 0.9))',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.5)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>

          <span className="relative flex items-center justify-center gap-3">
            <Download className="w-6 h-6" strokeWidth={2} />
            Download VALRadiant for PC
          </span>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white/50 blur-sm group-hover:w-full transition-all duration-300" />
        </button>

        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-500">No login required</span>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-4">
              <div className="inline-block p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Users className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
              </div>

              <div>
                <div className="text-5xl font-black text-white mb-2">
                  {stats.users.toLocaleString()}+
                </div>
                <div className="text-gray-400 text-lg">Users Joined</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-4">
              <div className="inline-block p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                <TrendingUp className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
              </div>

              <div>
                <div className="text-5xl font-black text-white mb-2">
                  {stats.matches.toLocaleString()}+
                </div>
                <div className="text-gray-400 text-lg">Matches Analyzed</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-4">
              <div className="inline-block p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Search className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
              </div>

              <div>
                <div className="text-4xl font-black text-white mb-2">
                  {(stats.searches / 1000).toFixed(0)}K+
                </div>
                <div className="text-gray-400 text-lg">Player Searches</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center space-y-2">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <p className="text-gray-600 text-xs uppercase tracking-widest">VALRadiant 2026</p>
      </div>
    </section>
  );
}

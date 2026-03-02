import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Crosshair, Trophy } from 'lucide-react';

export default function AgentScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ranksRef = useRef<HTMLDivElement>(null);
  const [hoveredRank, setHoveredRank] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
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

      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 150,
        opacity: 0,
        stagger: 0.2,
        rotateX: 45,
      });

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 0.95,
      });

      gsap.from(ranksRef.current?.children || [], {
        scrollTrigger: {
          trigger: ranksRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Agent Mastery',
      description: 'Track your performance with every agent',
    },
    {
      icon: Crosshair,
      title: 'Precision Stats',
      description: 'Headshot rates, accuracy, and more',
    },
    {
      icon: Trophy,
      title: 'Rank Progress',
      description: 'Monitor your climb to Radiant',
    },
  ];

  const rankData = [
    { name: 'Iron', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/iron3.png', users: 312, color: 'from-gray-600 to-gray-700', order: 1 },
    { name: 'Bronze', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/bronze3.png', users: 487, color: 'from-orange-700 to-amber-800', order: 2 },
    { name: 'Silver', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/silver3.png', users: 634, color: 'from-gray-300 to-gray-400', order: 3 },
    { name: 'Gold', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/gold3.png', users: 912, color: 'from-yellow-500 to-amber-600', order: 4 },
    { name: 'Radiant', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/radiant.png', users: 26, color: 'from-yellow-200 to-yellow-400', special: true, order: 5 },
    { name: 'Diamond', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/diamond3.png', users: 1534, color: 'from-purple-400 to-pink-500', order: 6 },
    { name: 'Ascendant', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/ascendant3.png', users: 823, color: 'from-emerald-400 to-teal-500', order: 7 },
    { name: 'Immortal', icon: 'https://trackercdn.com/cdn/tracker.gg/valorant/db/tiers/immortal3.png', users: 1246, color: 'from-red-500 to-rose-600', order: 8 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)
            `,
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blue-500/10"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `pulse ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-16">
        <div ref={textRef} className="space-y-6">
          <h2
            className="text-7xl md:text-8xl font-black leading-tight"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient 8s ease infinite',
            }}
          >
            Built for Competitors.
          </h2>
          <p className="text-4xl text-gray-300 font-light">Designed for future Radiants.</p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 mb-20"
          style={{ perspective: '1000px' }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 backdrop-blur-sm hover:border-blue-500/60 transition-all duration-500"
              style={{
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4">
                <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30">
                  <feature.icon className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              <div
                className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-12 space-y-4">
          <p className="text-lg text-gray-400">Trusted by players across all ranks</p>
        </div>

        <div ref={ranksRef} className="flex flex-wrap justify-center items-end gap-6 max-w-7xl mx-auto">
          {rankData.map((rank, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
              style={{ order: rank.order }}
              onMouseEnter={() => setHoveredRank(rank.name)}
              onMouseLeave={() => setHoveredRank(null)}
            >
              <div
                className={`relative rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 p-6 ${
                  rank.special
                    ? 'bg-gradient-to-br from-yellow-950/40 to-amber-950/40 border-yellow-500/50'
                    : 'bg-gradient-to-br from-gray-950/40 to-gray-900/40 border-gray-700/50'
                } ${hoveredRank === rank.name ? 'scale-110 shadow-2xl' : 'scale-100'}`}
                style={{
                  boxShadow: hoveredRank === rank.name ? `0 20px 60px ${rank.special ? 'rgba(250, 204, 21, 0.4)' : 'rgba(59, 130, 246, 0.3)'}` : 'none',
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center space-y-3">
                  <div className={`relative transition-transform duration-300 group-hover:scale-110 ${
                    rank.special ? 'w-24 h-24' : 'w-16 h-16'
                  }`}>
                    <img
                      src={rank.icon}
                      alt={rank.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                    {rank.special && (
                      <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse" />
                    )}
                  </div>

                  <div className="text-center">
                    <div
                      className={`font-black mb-1 ${
                        rank.special ? 'text-3xl' : 'text-2xl'
                      }`}
                      style={{
                        background: rank.special ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'white',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {rank.users}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      {rank.name}
                    </div>
                  </div>
                </div>

                {rank.special && (
                  <div className="absolute -top-3 -right-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-yellow-500/50 blur-md animate-pulse" />
                      <div className="relative px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-xs font-bold text-black">
                        TOP
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

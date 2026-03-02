import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, Zap, Eye } from 'lucide-react';

interface FeatureSceneProps {
  title: string;
  subtitle: string;
  sceneNumber: number;
  imageSrc?: string;
}

export default function FeatureScene({ title, subtitle, sceneNumber, imageSrc }: FeatureSceneProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isOdd = sceneNumber % 2 !== 0;

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        x: isOdd ? -200 : 200,
        opacity: 0,
      });

      gsap.from(panelRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        x: isOdd ? 200 : -200,
        rotateY: isOdd ? 45 : -45,
        opacity: 0,
      });

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 0.95,
        opacity: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sceneNumber]);

  const getIcon = () => {
    if (sceneNumber === 1) return BarChart3;
    if (sceneNumber === 2) return Zap;
    return Eye;
  };
  const Icon = getIcon();
  const gradientFrom = sceneNumber % 2 !== 0 ? 'from-blue-600/30' : 'from-cyan-600/30';
  const gradientTo = sceneNumber % 2 !== 0 ? 'to-cyan-600/30' : 'to-blue-600/30';
  const glowColor = sceneNumber % 2 !== 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)';

  const getFeatures = () => {
    if (sceneNumber === 1) return ['Ranks', 'Hidden Names', 'Attack/Defend'];
    if (sceneNumber === 2) return ['Match Timeline', 'Full Match History', 'Detailed Data'];
    return ['Private Profiles', 'Any Player', 'Real-time Data'];
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${sceneNumber === 1 ? '20%' : '80%'} 50%, ${glowColor} 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          ref={contentRef}
          className={`space-y-6 ${sceneNumber % 2 === 0 ? 'md:order-2' : ''}`}
        >
          <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-sm border border-blue-500/20`}>
            <Icon className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
          </div>

          <h2
            className="text-6xl md:text-7xl font-black leading-tight"
            style={{
              background: 'linear-gradient(to right, #ffffff, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </h2>

          <p className="text-3xl text-gray-400 font-light">{subtitle}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            {getFeatures().map((feature, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 backdrop-blur-sm"
              >
                <span className="text-blue-300 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={panelRef}
          className={`relative ${sceneNumber % 2 === 0 ? 'md:order-1' : ''}`}
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden"
            style={{
              boxShadow: `0 20px 60px ${glowColor}`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-cyan-500/5" />

            <div className="absolute top-4 left-4 right-4 h-12 bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl font-black text-blue-500/20">APP</div>
                  <div className="text-xl text-gray-600">Screenshot Placeholder</div>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

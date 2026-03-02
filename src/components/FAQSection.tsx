import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
        opacity: 0,
        y: 80,
      });

      gsap.from(faqRef.current?.children || [], {
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 75%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        x: -50,
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs: FAQItem[] = [
    {
      category: 'General Information',
      question: 'What is this app, and what does it do?',
      answer:
        'This app provides real-time information about the players in your current Valorant match. You can instantly see details such as ranks, recent match history, and performance trackers. By clicking on a player\'s name, you can explore their recent matches and competitive progression.',
    },
    {
      category: 'General Information',
      question: 'How is this different from other tracking services?',
      answer:
        'Our app provides a critical advantage — real-time information before a match starts. Unlike other services that only show you details after a game has finished, our tool allows you to see who you are playing with during the agent select phase. This empowers you to make informed, crucial decisions such as potentially dodging a match based on live data.',
    },
    {
      category: 'Legality & Safety',
      question: 'Is the app free?',
      answer:
        'Yes. The app is developed by Harry created especially for those who struggle or are simply curious about knowing more about their teammates during a match. Our goal is to keep the app completely free and ad-free. However, redistribution of this app by third parties is strictly prohibited and may result in legal action.',
    },
    {
      category: 'Technical & Usage',
      question: 'Can I run the app in the background?',
      answer:
        'Absolutely. The app does not interact with or modify the game client in any way, and it does not trigger anti-cheat systems. It only communicates with the official Riot API, making it safe to keep running alongside Valorant.',
    },
  ];

  const categories = ['General Information', 'Legality & Safety', 'Technical & Usage'];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div ref={headerRef} className="text-center mb-16 space-y-4">
          <h2
            className="text-6xl md:text-7xl font-black"
            style={{
              background: 'linear-gradient(135deg, #ffffff, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about VALRadiant
          </p>
        </div>

        <div ref={faqRef} className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 uppercase tracking-wider">
                {category}
              </h3>
              <div className="space-y-4">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq, idx) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={idx}
                        className="relative rounded-xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-500/5 transition-colors duration-200"
                        >
                          <span className="text-lg font-semibold text-white pr-8">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>

                        {isOpen && (
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

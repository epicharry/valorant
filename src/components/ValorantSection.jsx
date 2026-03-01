import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const ValorantSection = () => {
  const valorantSectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionParagraphRef = useRef(null);
  const valorantTextBgRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Valorant" Section animations
      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(sectionParagraphRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
      });
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
      });
      gsap.to(valorantTextBgRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -150, // Moves the text up as you scroll down
      });
    }, valorantSectionRef); // scope the selector to the sectionRef

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section id="about" className="we-are-valorant" ref={valorantSectionRef}>
      <div className="">
        <div className="valorant-text-bg" ref={valorantTextBgRef}>
          VALRADIANT
        </div>
        <h2 className="section-title" ref={sectionTitleRef}>
          Your Ultimate Valorant Companion
        </h2>
        <p ref={sectionParagraphRef}>
          VALRadiant is a production-ready desktop application that enhances your Valorant experience. No login required - the app uses Riot's local API to keep all your data safe and secure on your machine. Built with official Riot Games APIs and fully compliant with their terms of service.
        </p>
        <a
          href="https://github.com/epicharry/valradiant"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button ref={buttonRef} className="font-semibold text-sm relative cursor-pointer text-center hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase mt-4 tracking-wider">
            VIEW ON GITHUB
          </button>
        </a>
      </div>
    </section>
  );
};

export default ValorantSection;

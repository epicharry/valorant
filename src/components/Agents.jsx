// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import agent1 from "../assets/images/raze.png";
// import agent2 from "../assets/images/jett.png";
// import "./Agents.css";
// import ValorantButton from "./ValorantButton";
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const AgentsSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const agent1Ref = useRef(null);
//   const agent2Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(titleRef.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//       });

//       gsap.from(descRef.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         delay: 0.2,
//       });

//       gsap.to(agent1Ref.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//         y: -100,
//       });

//       gsap.to(agent2Ref.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//         y: -50,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-valorant-dark bg-opacity-50 text-white  flex justify-center"
//     >
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
//         <div className="relative flex justify-center w-full md:w-1/2 ">
//           <img
//             ref={agent2Ref}
//             src={agent2}
//             alt="Agent 1"
//             className="max-h-[350px] md:max-h-[500px] mt-5 md:mt-40 object-contain z-10"
//           />
//           <img
//             ref={agent1Ref}
//             src={agent1}
//             alt="Agent 1"
//             className="max-h-[420px] md:max-h-[600px] mt-8 md:mt-30  object-contain z-10 -ml-30 "
//           />
//         </div>

//         <div className="text-center md:text-left w-full md:w-1/2 space-y-6 p-10 md:p-3">
//           <h2 className="title" ref={titleRef}>
//             YOUR AGENTS
//           </h2>
//           <p ref={descRef}>
//             <strong className="block mb-2">
//               Creativity is your greatest weapon.
//             </strong>
//             More than guns and bullets, you’ll choose an Agent armed with
//             adaptive, swift, and lethal abilities that create opportunities to
//             let your gunplay shine. No two Agents play alike, just as no two
//             highlight reels will look the same.
//           </p>

//           <ValorantButton variant="red">PLAY NOW</ValorantButton>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AgentsSection;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Make sure SplitText is correctly imported
import agent1 from "../assets/images/raze.png";
import agent2 from "../assets/images/jett.png";
import "./Agents.css"; // Keep your existing CSS if any
import ValorantButton from "./ValorantButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText); // Register SplitText too
}

const AgentsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const agent1Ref = useRef(null);
  const agent2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize SplitText for title and description
      const splitTitle = new SplitText(titleRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      // For the description, we want to animate the lines as a group
      const splitDesc = new SplitText(descRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      // Apply overflow hidden to the parent of the lines for the mask effect
      // You might need to add a parent div with overflow:hidden if the title/desc elements themselves can't be overflow:hidden
      // For simplicity, we'll apply it directly to the element's parent in the animation timeline.

      // Title Animation (SplitText Mask Lines)
      gsap.from(splitTitle.lines, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        yPercent: 100, // Start lines 100% below their final position
        opacity: 0,
        stagger: 0.1, // Animate lines one after another
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => splitTitle.revert(), // Revert SplitText once animation is done
      });

      // Description Animation (SplitText Mask Lines)
      gsap.from(splitDesc.lines, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        yPercent: 100, // Start lines 100% below their final position
        opacity: 0,
        stagger: 0.08, // Slightly faster stagger for description
        duration: 0.7,
        ease: "power2.out",
        delay: 0.3, // Delay after title animation
        onComplete: () => splitDesc.revert(), // Revert SplitText once animation is done
      });

      // Agent Image Animations (Keep existing scrub animations)
      gsap.to(agent1Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
      });

      gsap.to(agent2Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 50,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-valorant-dark bg-opacity-50 text-white flex justify-center pt-10 md:pt-8 px-4 md:px-0"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        <div className="relative flex justify-center w-full md:w-1/2">
          <img
            ref={agent2Ref}
            src={agent2}
            alt="Agent 1"
            className="max-h-[350px] md:max-h-[500px] -mt-4 md:mt-8 object-contain z-10"
          />
          <img
            ref={agent1Ref}
            src={agent1}
            alt="Agent 1"
            className="max-h-[420px] md:max-h-[600px] mt-20 md:mt-30 object-contain z-10 -ml-30 "
          />
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 space-y-6 p-3 md:p-3">
          <h2
            className="title overflow-hidden"
            ref={titleRef}
          >
            REAL-TIME STATS
          </h2>
          <p
            className="text-lg leading-relaxed overflow-hidden"
            ref={descRef}
          >
            <strong className="block mb-2">
              Know your opponents before the match begins.
            </strong>
            VALRadiant automatically detects your matches and displays real-time player information during agent select. View ranks, recent performance, agent preferences, and match history for every player in your lobby.
          </p>

          <a
            href="https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe"
            download
            style={{ textDecoration: 'none' }}
          >
            <ValorantButton variant="white">DOWNLOAD NOW</ValorantButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ValorantButton from './ValorantButton';
import { useState } from 'react';

const ContentSection = () => {
    const imageUrl = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f0001d0a770784d6462e8e127904b5e8dd1a280d-3440x1020.jpg?auto=format&fit=fill&q=80&h=800';
    const sectionRef = useRef(null);

    // Refs for animation targets
    const title1Ref = useRef(null);
    const contentRef = useRef(null);
    const textRef = useRef(null);

    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         // Initial scale down animation
    //         gsap.set(contentRef.current, { scale: 0.8 });

    //         // Scale up animation on scroll
    //         gsap.to(contentRef.current, {
    //             scale: 1,
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: "top bottom", // starts when top of trigger hits bottom of viewport
    //                 end: "top 60%", // ends when top of trigger hits 80% of viewport
    //                 scrub: true, // smooth scrubbing
    //             }
    //         });

    //         // Initialize SplitText for title and description
    //         const splitTitle = new SplitText(title1Ref.current, {
    //             type: "lines",
    //             mask: "lines",
    //             linesClass: "line++",
    //         });

    //         const splitDesc = new SplitText(textRef.current, {
    //             type: "lines",
    //             mask: "lines",
    //             linesClass: "line++",
    //         });

    //         gsap.from(splitTitle.lines, {
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: "top 90%",
    //             },
    //             yPercent: 100,
    //             opacity: 0,
    //             stagger: 0.1,
    //             duration: 0.8,
    //             ease: "power2.out",
    //             onComplete: () => splitTitle.revert(),
    //         });

    //         gsap.from(splitDesc.lines, {
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: "top 75%",
    //             },
    //             yPercent: 100,
    //             opacity: 0,
    //             stagger: 0.08,
    //             duration: 0.7,
    //             ease: "power2.out",
    //             delay: 0.3,
    //             onComplete: () => splitDesc.revert(),
    //         });

    //     }, sectionRef);

    //     return () => ctx.revert();
    // }, []);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a master timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom", // starts when top of trigger hits bottom of viewport
                    end: "bottom center", // adjust as needed
                    scrub: false, // disable scrub for precise sequencing
                }
            });

            // Initial scale down
            gsap.set(contentRef.current, { scale: 0.8 });

            // 1. First, scale up the content
            tl.to(contentRef.current, {
                scale: 1,
                duration: 1,
                ease: "power2.out",
            });

            // Initialize SplitText for title and description
            const splitTitle = new SplitText(title1Ref.current, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            });

            const splitDesc = new SplitText(textRef.current, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            });

            // 2. After scaling, animate title lines
            tl.from(splitTitle.lines, {
                yPercent: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => splitTitle.revert(),
            });

            // 3. Then animate description lines
            tl.from(splitDesc.lines, {
                yPercent: 100,
                opacity: 0,
                stagger: 0.08,
                duration: 0.7,
                ease: "power2.out",
                onComplete: () => splitDesc.revert(),
            }, "<0.5");

        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (

        <>
            {/* <section
                ref={sectionRef}
                className="relative flex item-start md:items-center w-full bg-black"
                style={{ minHeight: 'calc(100vh * 0.7)', maxHeight: '800px', }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 "
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />

                <div className="relative z-20 w-full px-8 lg:px-10 py-20 lg:py-0">
                    <div className="text-left">
                        <h1 ref={title1Ref} className="text-6xl md:text-7xl font-heading uppercase text-valorant-offwhite tracking-tighter overflow-hidden">
                            Season 2025 <br />
                            Act IV

                        </h1>
                        <h2 ref={title2Ref} className="text-7xl md:text-7xl font-heading uppercase text-valorant-offwhite tracking-tighter" >
                        </h2>
                        <p ref={textRef} className="mt-5 text-lg font-bold text-valorant-offwhite mb-8">
                            Brave the harsh beauty of Corrode. New ground, classic energy.
                        </p>
                        <ValorantButton variant="red">Watch Now</ValorantButton>

                    </div>
                </div>
            </section> */}
            <section className="w-full mt-10" ref={sectionRef}>
                <div className="px-3" ref={contentRef}>
                    <div className="relative h-146 w-full overflow-hidden rounded-md">
                        <div className="relative size-full">
                            <img
                                src={imageUrl}
                                alt="Content Background"
                                className="absolute left-0 top-0 size-full object-cover object-center"
                            />
                            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                                <div className="text-left pt-10 md:pt-30">
                                    <h1 ref={title1Ref} className="text-6xl md:text-7xl font-heading uppercase text-valorant-offwhite tracking-tighter overflow-hidden">
                                        Match History <br />
                                        & Stats

                                    </h1>

                                    <p ref={textRef} className="mt-5 text-lg font-bold text-valorant-offwhite mb-8">
                                        Click on any player to view their recent match history and rank progression. Track your own performance over time.
                                    </p>
                                    <a
                                        href="https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe"
                                        download
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <ValorantButton variant="red">Download Now</ValorantButton>
                                    </a>

                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>

    );
};
export default ContentSection;

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.97, .97, .97)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};
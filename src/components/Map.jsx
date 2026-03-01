import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ValorantButton from './ValorantButton'

function Map() {
    const sectionRef = useRef(null);

    // Refs for animation targets
    const title1Ref = useRef(null);
    const contentRef = useRef(null);
    const textRef = useRef(null);

    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }
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
            }); // slight delay after scaling

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
            {/* <section id="section-home-maps" className="relative">
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3828b05489971b4715f673bc0e2db81f6c7afac7-5120x1616.png?auto=format&fit=fill&q=80&h=970"
                                alt=""
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
                            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                                <div className="mb-6">
                                    <p className="text-6xl md:text-6xl font-bold uppercase text-valorant-dark font-heading">YOUR MAPS</p>
                                    <p className="text-5xl md:text-4xl font-bold uppercase text-valorant-dark font-heading">FIGHT AROUND THE WORLD</p>
                                </div>

                                <div className="mb-8">
                                    <p className="text-lg text-valorant-dark">
                                        Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
                                    </p>
                                </div>

                                <a
                                    href="https://playvalorant.com/en-us/maps/"
                                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors duration-200"
                                >
                                    VIEW ALL MAPS
                                </a>
                            </div>

                            <div className="lg:w-1/2">
                                <img
                                    src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/65c45804e00ee97977b6eef06da370543968d161-1232x1232.png?auto=format&fit=fill&q=80&w=850"
                                    alt=""
                                    loading="lazy"
                                    className="w-full max-w-lg mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section> */}
            <section className="w-full mt-5" ref={sectionRef}>
                <div className="px-3" ref={contentRef}>
                    <div className="relative h-auto lg:h-[580px] w-full overflow-hidden rounded-md">
                        <div className="relative size-full">
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3828b05489971b4715f673bc0e2db81f6c7afac7-5120x1616.png?auto=format&fit=fill&q=80&h=970"
                                alt="Content Background"
                                className="absolute left-0 top-0 size-full object-cover object-center"
                            />

                            <div className="relative z-10 flex flex-col lg:flex-row justify-between p-5 text-blue-50">
                                {/* Text Content - Left Side */}
                                <div className="text-left pt-10 md:pt-20 lg:pt-30 lg:w-1/2 lg:pr-8">
                                    <h1 ref={title1Ref} className="text-4xl sm:text-5xl md:text-6xl font-heading uppercase text-valorant-dark tracking-tighter">
                                        SAFE & SECURE <br />
                                        NO LOGIN REQUIRED
                                    </h1>
                                    <p ref={textRef} className="mt-5 text-lg font-bold text-valorant-dark mb-8">
                                        VALRadiant uses Riot's local API, so no credentials are needed. All sensitive data stays on your machine. Built with official Riot Games APIs and fully compliant with their terms of service.
                                    </p>
                                    <a
                                        href="https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe"
                                        download
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <ValorantButton variant="red">DOWNLOAD NOW</ValorantButton>
                                    </a>
                                </div>

                                {/* Image - Right Side (on lg+ screens) */}
                                <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:items-center lg:justify-end">
                                    <img
                                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/65c45804e00ee97977b6eef06da370543968d161-1232x1232.png?auto=format&fit=fill&q=80&w=850"
                                        alt="Valorant Map"
                                        loading="lazy"
                                        className="w-full max-w-md lg:max-w-lg mx-auto lg:mr-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>

    )
}

export default Map

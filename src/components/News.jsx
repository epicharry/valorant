// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register the ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

// // --- DUMMY DATA ---
// const newsData = [
//     {
//         category: 'Game Updates',
//         date: '6/24/2025',
//         title: 'VALORANT Patch Notes 11.00',
//         description: 'Agent updates, new map Corrode, map rotation, and so much more!',
//         image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f704e8033b985e3cbe00dec61ac4ee0a3abb6440-1920x1080.jpg?auto=format&fit=crop&q=80&h=319&w=567&crop=center',
//         link: '#',
//     },
//     {
//         category: 'Esports',
//         date: '6/23/2025',
//         title: 'Team Tarik vs Team Toast play Corrode | New Map Showmatch | VALORANT',
//         description: 'Watch as Team Tarik vs. Team Toast play the first live match on the new VALORANT Map Corrode.',
//         image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/02c5503a8a9814082072c8d82ba666e55ddb2fc0-1920x1080.jpg?auto=format&fit=crop&q=80&h=319&w=567&crop=cente',
//         link: '#',
//     },
//     {
//         category: 'Dev',
//         date: '6/22/2025',
//         title: 'Behind the Walls of Corrode // Dev Diaries',
//         description: "Hear how the dev team approached designing VALORANT's newest map, Corrode.",
//         image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/70c1fd08e37677c94a5854920e9a8b6835536b0d-1920x1080.jpg?auto=format&fit=crop&q=80&h=319&w=567&crop=center',
//         link: '#',
//     },
// ];


// const News = () => {
//     const containerRef = useRef(null);


//     useEffect(() => {
//         // gsap.context() is the modern way to handle cleanup in useEffect.
//         // It gathers all GSAP animations created inside it and allows for easy cleanup.
//         const ctx = gsap.context(() => {
//             // All our GSAP code goes here...
//             const cards = gsap.utils.toArray('.news-card');
//             let mm = gsap.matchMedia();

//             // --- DESKTOP ANIMATION ---
//             mm.add("(min-width: 768px)", () => {
//                 gsap.from(cards, {
//                     y: 100,
//                     opacity: 0,
//                     duration: 1,
//                     stagger: 0.2,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: containerRef.current,
//                         start: 'top 80%',
//                         toggleActions: 'play none none none',
//                     },
//                 });
//             });

//             // --- MOBILE ANIMATION ---
//             mm.add("(max-width: 767px)", () => {
//                 cards.forEach((card, index) => {
//                     gsap.from(card, {
//                         opacity: 0,
//                         x: index % 2 === 0 ? 100 : -100,
//                         duration: 0.8,
//                         ease: 'power3.out',
//                         scrollTrigger: {
//                             trigger: card,
//                             start: 'top 90%',
//                             toggleActions: 'play none none none',
//                         },
//                     });
//                 });
//             });

//         }, containerRef); // <-- Scope the context to the component's root element.


//         return () => ctx.revert();

//     }, []);

//     return (
//         <section ref={containerRef} className=" py-10 sm:py-24 px-6 sm:px-8 overflow-hidden">
//             <div className="">
//                 <h2 className="text-4xl md:text-5xl font-heading text-valorant-offwhite mb-12 uppercase">
//                     The Latest
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {newsData.map((item, index) => (
//                         <a
//                             href={item.link}
//                             key={index}
//                             className="news-card group block"
//                             aria-label={`Read more about ${item.title}`}
//                         >
//                             <article>
//                                 <div className="overflow-hidden mb-4">
//                                     <img
//                                         src={item.image}
//                                         alt=""
//                                         className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                                     />
//                                 </div>
//                                 <div className="flex items-center gap-3 text-xs font-bold mb-3">
//                                     <span className="text-[#ff4655] uppercase">{item.category}</span>
//                                     <span className="text-valorant-offwhite">{item.date}</span>
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-valorant-offwhite mb-3 leading-tight">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-valorant-grey text-base">{item.description}</p>
//                             </article>
//                         </a>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default News;
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the custom hook

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useIsMobile from './../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

// --- DUMMY DATA ---
const newsData = [
    {
        category: 'Release',
        date: '3/01/2026',
        title: 'VALRadiant v1.4.1 Now Available',
        description: 'Download the latest version with improved match detection, performance optimizations, and bug fixes.',
        image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f704e8033b985e3cbe00dec61ac4ee0a3abb6440-1920x1080.jpg?auto=format&fit=crop&q=80&h=319&w=567&crop=center',
        link: 'https://github.com/epicharry/valradiant/releases/tag/v1.4.1',
    },
    {
        category: 'Features',
        date: '2/15/2026',
        title: 'Automatic Match Detection',
        description: 'VALRadiant now automatically detects when you enter pregame and live matches, displaying real-time player stats.',
        image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/02c5503a8a9814082072c8d82ba666e55ddb2fc0-1920x1080.jpg?auto=format&fit=crop&q=80&h=319&w=567&crop=cente',
        link: 'https://github.com/epicharry/valradiant',
    },
    {
        category: 'Security',
        date: '2/01/2026',
        title: 'Privacy First Approach',
        description: "No login required. VALRadiant uses Riot's local API to keep all your data safe and secure on your machine.",
        image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/70c1fd08e37677c94a5854920e9a8b6835536b0d-1920x1080.jpg?auto=format&fit=crop&q=80&h=319&w=567&crop=center',
        link: 'https://github.com/epicharry/valradiant',
    },
];

// Helper component for the a single news card to avoid repetition
const NewsCard = ({ item }) => (
    <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card group block"
        aria-label={`Read more about ${item.title}`}
    >
        <article>
            <div className="overflow-hidden mb-4">
                <img
                    src={item.image}
                    alt=""
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="flex items-center gap-3 text-xs font-bold mb-3">
                <span className="text-red-500 uppercase">{item.category}</span>
                <span className="text-gray-300">{item.date}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">
                {item.title}
            </h3>
            <p className="text-gray-400 text-base">{item.description}</p>
        </article>
    </a>
);


const News = () => {
    const containerRef = useRef(null);
    const isMobile = useIsMobile(); // Use the hook to check screen size
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        // Only run the GSAP animation if it's NOT mobile
        if (!isMobile) {
            const ctx = gsap.context(() => {
                const cards = gsap.utils.toArray('.news-card');
                gsap.from(cards, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                });
            }, containerRef);
            return () => ctx.revert();
        }
    }, [isMobile]); // Re-run effect if isMobile changes

    const onSwiperUpdate = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section id="news" ref={containerRef} className="py-16 px-6 sm:px-8">
            <div className="">
                <h2 className="text-4xl md:text-5xl font-heading mb-12 uppercase">
                    Latest Updates
                </h2>

                {isMobile ? (
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            onSwiper={setSwiperInstance}
                            onSlideChange={onSwiperUpdate}
                            onUpdate={onSwiperUpdate}
                            pagination={{
                                type: 'progressbar',
                                el: '.swiper-custom-pagination', // Target our custom div
                            }}
                        >
                            {newsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <NewsCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Custom Navigation Controls */}
                        <div className="flex items-center gap-6 mt-8">
                            <div className="swiper-custom-pagination flex-grow !relative !bottom-auto !top-auto"></div>
                            <button
                                onClick={() => swiperInstance?.slidePrev()}
                                disabled={isBeginning}
                                className="text-2xl disabled:text-gray-600 text-valorant-red transition-colors"
                                aria-label="Previous slide"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => swiperInstance?.slideNext()}
                                disabled={isEnd}
                                className="text-2xl disabled:text-gray-600 text-valorant-red transition-colors"
                                aria-label="Next slide"
                            >
                                →
                            </button>
                        </div>
                    </div>
                ) : (
                    // --- DESKTOP VIEW: GRID LAYOUT ---
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsData.map((item, index) => (
                            <NewsCard item={item} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default News;
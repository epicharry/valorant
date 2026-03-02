import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navLinksRef = useRef([]);

  const openSidebar = () => {
    gsap.to(sidebarRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
      onStart: () => {
        sidebarRef.current.style.pointerEvents = "auto";
        document.body.classList.add("no-scroll");
      },
    });

    gsap.from(navLinksRef.current, {
      opacity: 0,
      x: 50,
      stagger: 0.1,
      delay: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });

    setIsOpen(true);
  };

  const closeSidebar = () => {
    gsap.to(sidebarRef.current, {
      x: "100%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        sidebarRef.current.style.pointerEvents = "none";
        document.body.classList.remove("no-scroll");
      },
    });

    setIsOpen(false);
  };

  const handleMenuClick = () => {
    if (!isOpen) openSidebar();
  };

  const handleCloseClick = () => {
    if (isOpen) closeSidebar();
  };
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;

      if (currentScrollY === 0) {
        // Topmost position: show navbar without floating styles
        setIsNavVisible(true);
        navContainerRef.current.style.background = 'transparent';
        navContainerRef.current.style.borderRadius = '0';
        // navContainerRef.current.style.border = 'none';
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down: hide navbar
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show navbar with floating styles
        setIsNavVisible(true);
        navContainerRef.current.style.background = 'var(--valorant-dark)';
        navContainerRef.current.style.borderRadius = '0.5rem';
        // navContainerRef.current.style.border = '1px solid rgba(255, 255, 255, 0.1)';
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5,
    });
  }, [isNavVisible]);
  return (
    <header className="header">
      <nav className="navbar" ref={navContainerRef}
        style={{
          width: "100%",
          padding: "10px",
          transition: 'background 0.3s ease, border-radius 0.3s ease, border 0.3s ease'
        }}>
        <a href="#" className="nav-logo">
          {/* <img src={logo} alt="logo" width="80px" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="35" viewBox="0 0 100 100" width="35"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#fff"></path></svg>
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a href="#news">Updates</a>
          </li>
          <li className="nav-item">
            <a href="#faq">FAQ</a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/epicharry/valradiant" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>

        <a
          href="https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe"
          download
          className="nav-cta-button"
        >
          DOWNLOAD
        </a>

        <div className="menu-icon" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <aside className="mobile-sidebar" ref={sidebarRef}>
        <div className="sidebar-header">
          <span className="close-sidebar" onClick={handleCloseClick}>
            &times;
          </span>
        </div>

        <ul className="mobile-nav-menu">
          <li
            className="mobile-nav-item"
            ref={(el) => (navLinksRef.current[0] = el)}
          >
            <a href="#features" onClick={handleCloseClick}>Features</a>
          </li>
          <li
            className="mobile-nav-item"
            ref={(el) => (navLinksRef.current[1] = el)}
          >
            <a href="#news" onClick={handleCloseClick}>Updates</a>
          </li>
          <li
            className="mobile-nav-item"
            ref={(el) => (navLinksRef.current[2] = el)}
          >
            <a href="#faq" onClick={handleCloseClick}>FAQ</a>
          </li>
          <li
            className="mobile-nav-item"
            ref={(el) => (navLinksRef.current[3] = el)}
          >
            <a href="https://github.com/epicharry/valradiant" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>

        <a
          href="https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe"
          download
          className="mobile-nav-cta-button"
        >
          DOWNLOAD
        </a>
      </aside>
    </header>
  );
};

export default Header;

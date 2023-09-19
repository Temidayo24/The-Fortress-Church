"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [resources, setResources] = useState(false);
  const [fellowships, setFellowships] = useState(false);

  const toggleResources = () => {
    setResources(!resources);
  };

  const toggleFellowships = () => {
    setFellowships(!fellowships);
  };

  const currentRoute = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="header_nav">
        <Link href="/" className="logo_header">
          <div className="logo-container">
            <Image
              src="/Fortress-Logo.png"
              alt="logo"
              width={80}
              height={80}
              className="logo"
            />
          </div>
          <div className="church_title">
            <span>The Fortress</span>
            <span>Int&#39;l Church</span>
          </div>
        </Link>
        <div className="nav_location">
          <div
            className={`header_location ${
              scrolled ? "header_nav_scrolled " : ""
            }`}
          >
            <div className="location-socials">
              <div className="location_image">
                <Image
                  src="/icons/location-white-filled.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <span>10, Coker Rd, Ilupeju, Lagos</span>
              </div>
            </div>
            <Link
              href="/give"
              className="live_stream"
              // className={currentRoute === "/give" ? "active-link" : "nav-link"}
            >
              <button> Live Stream</button>
            </Link>
            <div className="header_socials">
              <Image
                src="/icons/youtube-pink.svg"
                alt=""
                width={24}
                height={24}
              />
              <Image src="/icons/mixlr.png" alt="" width={20} height={20} />
              <Image
                src="/icons/insta-pink.svg"
                alt=""
                width={20}
                height={20}
              />
              <Image
                src="/icons/facebook-pink.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="nav_ul">
            <Link
              href="/"
              className={currentRoute === "/" ? "active-link" : "nav-link"}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={currentRoute === "/about" ? "active-link" : "nav-link"}
            >
              Who we are
            </Link>
            <Link
              href="/#services"
              className={
                currentRoute === "/services" ? "active-link" : "nav-link"
              }
            >
              Our Services
            </Link>
            <div className="dropdown_parent">
              <Link
                href="/resources"
                className={
                  currentRoute === "/resources" ? "active-link" : "nav-link"
                }
              >
                Resources <span></span>
              </Link>
              <div className="dropdown">
                <Link href="/video-sermons">Video Sermons</Link>

                <Link href="/audio-sermons">Audio Sermons</Link>

                <Link href="/e-books">E-Books</Link>
              </div>
            </div>
            <div className="dropdown_parent">
              <Link
                href="/fellowships"
                className={
                  currentRoute === "/fellowships" ? "active-link" : "nav-link"
                }
              >
                Our Fellowships <span></span>
              </Link>
              <div className="dropdown">
                <Link href="/men-of-valour">Men of Dominion</Link>

                <Link href="/daughters-of-virtue">Daughters of Virtue</Link>

                <Link href="/light-house">Light House</Link>

                <Link href="/green-house">Green House</Link>
              </div>
            </div>
            <Link
              href="/elixir-of-life"
              className={
                currentRoute === "/elixir-of-life" ? "active-link" : "nav-link"
              }
            >
              Elixir of Life
            </Link>
            <Link
              href="/contact"
              className={
                currentRoute === "/contact" ? "active-link" : "nav-link"
              }
            >
              Contact Us
            </Link>
            <Link
              href="/give"
              className="give"
              // className={currentRoute === "/give" ? "active-link" : "nav-link"}
            >
              <button> Give</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="fortress_footer">
        <Link href="/" className="logo_header">
          <Image src="/Fortress-Logo.png" alt="logo" width={80} height={80} />
          <div className="church_title">
            <span>The Fortress</span>
            <span>Int&#39;l Church</span>
          </div>
        </Link>
        <div className='logoText'>
          The Fortress International Church has the mandate of training,
          equipping, and mobilising men to Discover, Develop and Deploy their
          graces to fulfill God&#39;s agenda for their lives. Everyone who becomes a
          member of our church joins a mobile train en route their prophetic
          destiny.
        </div>
      </div>
      <div className="locate_map">
        <div className="map">
          <span>Locate Us on the Map</span>
          <Image src="" alt="" />
        </div>
        <div className="quicklinks">
          <h5>Quick Links</h5>
          <div className='footer_links'>
            <Link href="/about" className="">Who We Are</Link>
            <Link href="/#services" className="">Our Services</Link>
            <Link href="/resources" className="">Resources</Link>
            <Link href="/fellowships" className="">Our Fellowships</Link>
            <Link href="/elixir" className="">Elixir of Life</Link>
            <Link href="/contact" className="">Contact Us</Link>
            <Link href="/give" className="">Give</Link>
          </div>
        </div>
        <div className="footer_socials">
          <span className="follow">Follow us on social media</span>
          <div className="socials_container">
            <div className="socials">
              <span>Instagram</span>
              <Image
                src="/icons/insta-pink.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <span>YouTube</span>
              <Image
                src="/icons/youtube-pink.svg"
                alt="Youtube"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <span>Mixlr</span>
              <Image
                src="/icons/mixlr.png"
                alt="Mixlr"
                width={30}
                height={30}
              />
            </div>
            <div className="socials">
              <span>Facebook</span>
              <Image
                src="/icons/facebook-pink.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
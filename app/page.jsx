"use client";
import Link from "next/link";
import Image from "next/image";
import { easeIn, motion, Variants } from "framer-motion";
import UpdatesCard from "./components/UpdatesCard";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/Header";
// import React, { useState, useClient } from 'react'

const Home = () => {
  return (
    <>
      <main>
        <section className="banner_section">
          <div className="intro">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.9,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: easeIn,
                  },
                },
              }}
              className="welcome"
            >
              Welcome to{" "}
              <span className="name">The Fortress Int&#39;l Church</span> where
              our <br />
              mandate is to make ready a people ready for the Lord. <br></br>{" "}
              (Luke 1:17)
            </motion.div>
            <div className="banner_buttons">
              <Link href="">
                <button className="join">JOIN US</button>
              </Link>
              <Link href="">
                <button className="sermon">WATCH A SERMON</button>
              </Link>
              <Link href="">
                <button className="sermon">GIVE</button>
              </Link>
            </div>
          </div>
        </section>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{
            y: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.4,
              // delay: 0.5,
            },
          }}
          className="updates_section"
        >
          <div className="title">
            <h3>Recent Updates</h3>
            <span>Stay up to date with our programs and events</span>
          </div>
          <motion.div
            initial={{ y: 60 }}
            whileInView={{
              y: 0,
              transition: {
                type: "spring",
                duration: 1,
                bounce: 0.4,
                // delay: 0.5,
              },
            }}
            className="updates_container"
          >
            <div className="updates">
              <Image
                src="/kingdom.jpg"
                alt="image1"
                width={300}
                height={300}
                className="updates-img"
              />
            </div>
            <div className="updates">
              <Image
                src="/kingdom.jpg"
                alt="image1"
                width={300}
                height={300}
                className="updates-img"
              />
            </div>
            <div className="updates">
              <Image
                src="/kingdom.jpg"
                alt="image1"
                width={300}
                height={300}
                className="updates-img"
              />
            </div>
            {/* <UpdatesCard classname="updates1 updates" />
            <UpdatesCard classname="updates2 updates" />
            <UpdatesCard classname="updates3 updates" /> */}
          </motion.div>
        </motion.div>
        <section className="about_section">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{
              y: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                bounce: 0.4,
                // delay: 0.5,
              },
            }}
            className="about_us"
          >
            <div className="">
              <h3>Who We Are</h3>
            </div>
            <div className="about_text_container">
              <div className="about_text">
                <p>
                  The Fortress International Church is a present-truth apostolic
                  church community of Life Fort International Ministry, founded
                  on biblical principles, recognizing Jesus Christ as its head.
                  Life Fort International Ministry was founded on Saturday 27th
                  June 2009. While The Fortress International Church was
                  commissioned on Saturday, Sept.6th, 2009 with Apostle Desmond
                  and Pst. Jumoke Oladimeji as the Founding Pastors.
                </p>
                <p>
                  The Fortress International Church has the mandate of training,
                  equipping, and mobilising men to Discover, Develop and Deploy
                  their graces to fulfill God’s agenda for their lives. Everyone
                  who becomes a member of our church joins a mobile train en
                  route their prophetic destiny. We are committed to the
                  teaching and practice of God’s present truth in its
                  progressive state. Our ultimate dream is to make ready a
                  people prepared for the Lord.
                </p>
              </div>
              <Link href="/about" className="about_button">
                <button>Read More</button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                bounce: 0.4,
                // delay: 0.5,
              },
            }}
            className="about_images"
          >
            <div className="people_img_container">
              <div className="img-top">
                {/* <Image
                src="/group/IMG_4197.jpg"
                alt="placeholder"
                width={250}
                height={300}
                className="people_img img-top"
              /> */}
              </div>
              <div className="img-bottom">
                {/* <Image
                src="/group/IMG_4225.JPG"
                alt="placeholder"
                width={250}
                height={300}
                className="people_img img-bottom"
              /> */}
              </div>
            </div>
          </motion.div>
        </section>
        <section className="services_section" id="services">
          <div className="title">
            <h3>Worship With US</h3>
            <span>Come have an unforgettable experience</span>
          </div>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                bounce: 0.4,
                // delay: 0.5,
              },
            }}
            className="services_flex"
          >
            <div className="services services1">
              <Services
                title="Sunday Service"
                time="8:30 am"
                text1="2nd Floor, 10 Coker Rd, Opposite Chicken Republic, Ilupeju, Lagos."
                text2="@thefortresschurch"
                text3="The Fortress International Church"
                map="/icons/location-black-filled.png"
                YT="/icons/youtube.svg"
                mixlr="/icons/mixlr.png"
                classname="services_container"
              />
              <div className="service_name">
                <Image
                  src="/icons/church.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                Sunday Service
              </div>
            </div>
            <div className=" services services2">
              <Services2
                title="Fresh Word"
                days="Every Tuesdays and Thursdays"
                time="12:00 pm"
                text3="@thefortresschurch"
                mixlr="/icons/mixlr.png"
                classname="services_container"
              />
              <div className="service_name">
                {" "}
                <Image
                  src="/icons/church.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                Fresh Word
              </div>
            </div>
            <div className=" services services3">
              <Services
                title="Midweek Service"
                days="Every Wednesdays"
                time="6:00 pm"
                text1="2nd Floor, 10 Coker Rd, Opposite Chicken Republic, Ilupeju, Lagos."
                text2="@thefortresschurch"
                text3="The Fortress International Church"
                map="/icons/location-black-filled.png"
                YT="/icons/youtube.svg"
                mixlr="/icons/mixlr.png"
                classname="services_container"
              />
              <div className="service_name">
                {" "}
                <Image
                  src="/icons/church.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                Midweek Service
              </div>
            </div>
            <div className="services services4">
              <Services2
                title="Apostolic Prayer Meeting"
                days="Every Fridays"
                time="6:30 pm"
                text3="@thefortresschurch"
                mixlr="/icons/mixlr.png"
                classname="services_container"
              />
              <div className="service_name">
                {" "}
                <Image
                  src="/icons/church.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                Apostolic Prayer Meeting
              </div>
            </div>
            <div className="services services5">
              <Services2
                title="Fresh Dew"
                days="Every Saturdays"
                time="6:00 am"
                text3="@thefortresschurch"
                mixlr="/icons/mixlr.png"
                classname="services_container"
              />
              <div className="service_name">
                {" "}
                <Image
                  src="/icons/church.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                Fresh Dew
              </div>
            </div>
            {/*<div className=" services services6">
              <div className="service_name">Join Us</div>
            </div>
            <div className=" services services7">
              <div className="service_name">We Love You</div>
            </div>
          */}
          </motion.div>
        </section>
        <section className="elixir_section">
          <h3>Daily Devotional</h3>
          <span>ELIXIR OF LIFE</span>
          <Link href="/elixir-of-life">
            <button>Read</button>
          </Link>
        </section>
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 1,
            },
          }}
          className="landing_contact"
        >
          <div className="div1">
            <div>
              <Image
                src="/icons/arrow-colored.png"
                alt="arrow pointing right"
                width={28}
                height={28}
                className="arrow-right"
              />
            </div>
            <div className="landing_contact_text">
              <h3>We would love to hear from you</h3>
              <span className="text">
                Do you have a prayer request, a testimony to share, need someone
                to talk to, or are you a new convert? <br /> We are available
                24/7. Kindly use the contact form below to reach us.
              </span>
            </div>
          </div>
          <div>
            <Link href="/contact">
              <button className="contact_btn">
                Contact Us
                <Image
                  src="/icons/call.png"
                  alt="logo"
                  width={24}
                  height={24}
                  className="call"
                />
              </button>
            </Link>
          </div>
        </motion.div>
        <section className="confession">
          <div className="confession_text">
            <span className="say_with_us">Say with Us</span>
            <p>
              God has gone ahead of me; He will make my crooked places straight.
              He has gone ahead of me to make my rough places smooth. He has
              gone ahead of me to level every mountain. In the name of Jesus,
              nothing dies within me; nothing dies around me; nothing dies in my
              hands. It can never get worse with me, in the name of Jesus it
              will only get better.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

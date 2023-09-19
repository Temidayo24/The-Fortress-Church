"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="about_page_section">
      <section className="about_banner">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{
            y: 0,
            transition: {
              type: "spring",
              duration: 1.5,
              bounce: 0.4,
              // delay: 0.5,
            },
          }}
          className="abt-banner-text"
        >
          ABOUT THE FORTRESS INT&#39;L CHURCH
        </motion.div>
      </section>
      <section className="motto">
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
          viewport={{ once: true }}
        >
          Bringing Divinity to Humanity...
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: "linear",
            duration: 1.5,
          },
        }}
        viewport={{ once: true }}
        className="about-logo-section"
      >
        <div className="about_page_text">
          <div>
            <Image
              src="/Fortress-Logo.png"
              alt="logo"
              width={120}
              height={120}
              className="about-logo"
            />
            <span className="fortress">The Fortress International Church</span>{" "}
            is a present-truth apostolic church community of Life Fort
            International Ministry, founded on biblical principles, recognizing
            Jesus Christ as its head. Life Fort International Ministry was
            founded on Saturday 27th June 2009. While The Fortress International
            Church was commissioned on Saturday, Sept.6th, 2009 with Apostle
            Desmond and Pst. Jumoke Oladimeji as the Founding Pastors.
          </div>
          <div>
            The Fortress International Church has the mandate of training,
            equipping, and mobilising men to Discover, Develop and Deploy their
            graces to fulfill God&#39;s agenda for their lives. Everyone who
            becomes a member of our church joins a mobile train en route their
            prophetic destiny. We are committed to the teaching and practice of
            God&#39;s present truth in its progressive state. Our ultimate dream
            is to make ready a people prepared for the Lord.
          </div>
          <div>
            We are a church committed to the operation of the gift and fruits of
            the spirit. Prophetic and apostolic operations of supernatural
            dealings of God have practical manifestations in our meeting. Once
            you attend one of our services, you become stocked on God with a
            passion to know more of Him and a desire to become all that He has
            made you to be.
          </div>
        </div>
      </motion.div>
      <section className="vision_mission_statement">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1, transition: {
            delay: .7, duration: 1,
          }}}
          className="vision_img"
        >
          <div className="vision_img_1"></div>
          <div className="vision_img_2"></div>
          <div className="vision_img_3"></div>
        </motion.div>
        <div className="vision_img_flex">
          <div className="vision_container">
            <div className="vision_mission">
              <h4>Our Vision</h4>
              <p>
                Our vision is to impart you with the core value of God&#39;s
                word by the character of the Holy Spirit. We will enlarge your
                edge and capacity through spiritual principles. We will raise an
                apostolic generation of people walking in the power of the age
                to come.
              </p>
            </div>
            <div className="vision_mission">
              <h4>Our Mission</h4>
              <p>
                Our mission is to train you to DISCOVER, DEVELOP, and DEPLOY
                your gift to fulfill your mandate and destiny.
              </p>
            </div>
          </div>
          <div className="values-container">
            <div className="our_values">
              <h4>Our Values</h4>
              <div className="values">
                <p>
                  <span>PURPOSE: </span>God created everyone for a specific
                  assignment. You are designed to fit into a certain intention
                  of God. You are created to solve certain problems. We are
                  committed to training and teaching you scriptural-based
                  insight that awakens you to your purpose.
                </p>
                <p>
                  <span>PASSION: </span>We are designed to love God with all our
                  heart, soul, and strength. We must give him our all for us to
                  get all from Him. We must be unapologetically sold out to the
                  course of the kingdom not holding back anything.
                </p>
                <p>
                  <span>PURITY: </span> It has to be pure to be acceptable to
                  God. The intention must be pure to pleasing. We must yield
                  ourselves to purity in all its essence and state. God must be
                  pleased in all things. We are raising a people prepared for
                  him in purpose passion and purity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_pastor">
        <div className="pastor_text">
          <h3>
            Meet Apostle Desmond Oladimeji & <br />
            Pastor Olajumoke Oladimeji
          </h3>
          <div>
            <p>
              <span>Apostle Desmond Oladimeji</span> is a preacher and teacher
              of righteousness with great apostolic signs and remarkable grace
              attending to his ministry. An Apostle by calling and the Lead
              Pastor of The Fortress International Church, he is also the
              President of Life Fort International Ministry in Lagos, Nigeria.He
              is a well-sorted after-conference speaker and expositor of the
              word. He is married to Pastor Olajumoke Oladimeji and they are
              blessed with two sons, Theodore and Yohann. He lives in Lagos
              Nigeria, from where he preaches the gospel of the kingdom across
              the length and breadth of the Nations.
            </p>
            <p>
              <span>Pastor Olajumoke Oladimeji </span>is a God Chaser, an
              intercessor, and Co-Senior Pastor of The Fortress Int&#39;l
              Church. She sits as the Church Administrator and the Head of the
              Family and Marriage Ministry. She is passionate about serving God
              and teaches the word with unusual calmness, peculiar aptness, and
              disarming simplicity. Pastor Jummy as she is fondly called hosts
              an annual women&#39;s program called &#39;The Daughters of Virtue
              Conference&#39; and a monthly prayer meeting on the first day of
              every month called &#39;Commanding Your Month&#39; with the
              Daughters Of Virtue - the sisters&#39; fellowship of the Fortress
              International Church. She has put about 12 years into diverse
              professional practices ranging from Customer Service
              Representative to her stint in Internal Audit and Control and
              presently functions as a technical underwriter in a leading
              insurance company. She&#39;s an associate member of The Chartered
              Insurance Institute of Nigeria, a certified member of the West
              African Insurance Institute, and a member of the Institute of
              Internal Auditors. She is married to The Senior Pastor of The
              Fortress Int&#39;l Church and their marriage is blessed with 2
              lovely children.
            </p>
          </div>
        </div>
        <div className="pastor_img">
          {/* <Image
            src="/desmond-jummy.jpeg"
            alt="pastor&wife_picture"
            width={350}
            height={350}
            className="pst_pic"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default About;
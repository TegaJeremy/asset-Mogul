import React from "react";
import "./About.css";
import section2image from "../assets/Third.webp";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion, stagger } from "framer-motion";

const About = () => {
  return (
    <div className="MainContainerAbout">
      <section className="section1_container">
        <p>About</p>
        <h1>Get to know Assets Mogul</h1>
      </section>
      <section className="section2_container">
        <motion.div 
          className="section2_text_container"
          initial={{
            opacity: 0,
            x: -50,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            mass: 1.5,
          }}
          // animate={{ opacity: 1, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            //   delay: stagger(0.05),
          }}
          viewport={{ margin: "-40px", once: "true" }}
        >
          <h3>Our Area of Expertise</h3>
          <p>
            We specialize in investing in cryptocurrency blockchain assets,
            offering investors a centralized platform to access a diversified
            portfolio of crypto assets aimed at achieving optimal risk-adjusted
            returns in cryptocurrency investing. Our array of active investment
            strategies spans across four key areas: equities, fixed income,
            multi-asset, and alternatives. Our proficiency extends across
            developed and emerging markets, encompassing both public and private
            markets.
          </p>
        </motion.div>
        <motion.div 
          className="section2_img_container"
          initial={{
            opacity: 0,
            x: 50,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            mass: 1.5,
          }}
          // animate={{ opacity: 1, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            //   delay: stagger(0.05),
          }}
          viewport={{ margin: "-40px", once: "true" }}
        >
          <img src={section2image} alt="img"/>
        </motion.div>
      </section>
      <section className="section3_container">
        <motion.div 
          className='section3_item_container'
          initial={{
            opacity: 0,
            x: 50,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            mass: 1.5,
          }}
          // animate={{ opacity: 1, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            //   delay: stagger(0.05),
          }}
          viewport={{ margin: "-40px", once: "true" }}
        >
          <h1>Our goal is to make the world of finance more accessible and attainable</h1>
          <div className="about_features_access_container">
            <div className="about_features_container">
              <p>Features</p>
              <h2>Easy to use</h2>
            </div>
            <div className="about_access_container">
              <p>access over to</p>
              <h2>4600+ markets</h2>
            </div>
          </div>
          <div className="goal_listing_container">
            <div className="goal_list_container">
              <IoIosCheckmarkCircle className="goal_list_icon" />
              <p>Bitcoin trading & analysis</p>
            </div>
            <div className="goal_list_container">
              <IoIosCheckmarkCircle className="goal_list_icon" />
              <p>Premium trading technology</p>
            </div>
            <div className="goal_list_container">
              <IoIosCheckmarkCircle className="goal_list_icon" />
              <p>Professional Support User</p>
            </div>
          </div>
          <p>Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil and 6,400+ other <span>world-renowned markets.</span></p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

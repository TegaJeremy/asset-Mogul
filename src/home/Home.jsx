import React, { useEffect, useState } from "react";
import "./Home.css";
import "./HomeMedia.css";
import CardPlan from "./CardPlan";
import ImgHomeSec4 from "../assets/First.jpg";
// import citadelHomeLogo from "../assets/citadel1.png";
import mobilePhone from "../assets/phone.png";
import home2image from "../assets/Second.webp";
// transfer payment method
import bitCoin from "../assets/bitcoin.gif";
import bitCoinCash from "../assets/bitcoincash.gif";
import litecoin from "../assets/litecoin.gif";
import tron from "../assets/tron.gif";
import pax from "../assets/pax.gif";
import tetherusdt from "../assets/tetherusdt.gif";
import tetherusdterc20token from "../assets/tetherusdterc20token.gif";
import dash from "../assets/dash.gif";
import doge from "../assets/doge.gif";
import payeer from "../assets/payeer.gif";
import ethereum from "../assets/ethereum.gif";
import tetherusdttrc20token from "../assets/tetherusdttrc20token.gif";
import { motion, stagger } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SlChart } from "react-icons/sl";
import { LiaChessBishopSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { FaCoins } from "react-icons/fa";


const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="home-body">
          <motion.div 
            className='hero_container'
            initial={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              mass: 1.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ margin: "-40px", once: "true" }}
          >
            <h1>The World’s Most Popular Way to Hold, Invest and Trade Crypto.</h1>
            <p>Buy Bitcoin, Ethereum, and other Leading cryptocurrencies on a platform trusted by millions.</p>
            <button onClick={()=>navigate('/register')}>Get Started</button>
          </motion.div>
          <div className="section2-Home">
            <p className="section2-Home-Header">
              Welcome to Assets mogul
            </p>
            <motion.div className="section2-Home-MainContainer">
              <div className="section2-image-container">
                <motion.img
                  src={home2image}
                  alt="mobilePhone"
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ margin: "-40px", once: "true" }}
                ></motion.img>
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  mass: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ margin: "-40px", once: "true" }}
                className="section2-txt-container"
              >
                <p>
                  We invest to create a financial return, while constantly
                  challenging our methods and improving our ability to make an
                  impact. Our values center around intellectual humility, idea
                  meritocracy, and close teamwork with management, experts and
                  the Board, thrusted with an adequate culture and shared
                  vision. We are a true long-term investor in both private and
                  public markets. We form long term partnerships, and we engage
                  proactively, transparently and constructively in our
                  investments. We are an independent private investment group
                  that supports individual and entrepreneurs in realizing their
                  growth ambitions.
                </p>
                <p>
                  Our primary focus is on assets located in Europe, Asia and
                  North America. Our focus is on the cash-flow profile of the
                  asset, underpinned by long contracts. Core sectors include
                  forex market, cryptocurrencies, energy, utilities, transport
                  and telecom. We invest in high quality assets where the
                  governance and structure are well defined and carried out
                  together with best-in-class investment team. We avoid high
                  dependency on market risks via long contractual arrangements
                  and investment structures.
                </p>
                <p>
                  Our team of brilliant minds is dedicated to identifying
                  emerging technologies and harnessing their potential to create
                  positive and lasting change. We believe that innovation is the
                  key to addressing the world's most pressing challenges and
                  unlocking new opportunities for growth and progress.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className='basics_of_investing_body'>
            <div className="basics_of_investing_container">
              <div className='basics_of_investing_container_top'>
                <div className="basics_of_investing_container_top_text">
                  <h1>Learn the basics of investing</h1>
                  <p>We teach you the basics and get you started on your investment journey in no time.</p>
                </div>
                <button>Start Investing</button>
              </div>
              <div className='basics_of_investing_container_bottom'>
                <motion.div
                  className="basics_of_investing_card_container"
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ margin: "-40px", once: "true" }}
                >
                  <div className='basics_investing_card_icon'><SlChart/></div>
                  <h3>Your money is safe with us</h3>
                  <p>
                    You trust us with your investments
                    and we take that very seriously. We
                    are committed to protecting your
                    account with the highest standards
                    of security available.
                  </p>
                </motion.div>
                <motion.div 
                  className="basics_of_investing_card_container"
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ margin: "-40px", once: "true" }}
                >
                  <div className='basics_investing_card_icon'><LiaChessBishopSolid/></div>
                  <h3>Bank Level Security</h3>
                  <p>
                    We use state-of-the-art data
                    encryption when handling your
                    financial information and two-factor
                    authentication (2FA) protection.
                    We're backed by top financial
                    market operators and we not only
                    meet traditional banking security standards, we exceed them.
                  </p>
                </motion.div>
                <motion.div 
                  className="basics_of_investing_card_container"
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ margin: "-40px", once: "true" }}
                >
                  <div className='basics_investing_card_icon'><GrSecure/></div>
                  <h3>Secure Payments</h3>
                  <p>
                    Our payment processor is with the
                    best renowned global practices
                    satisfying the highest level of
                    Security Audit available.
                  </p>
                </motion.div>
                <motion.div 
                  className="basics_of_investing_card_container"
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ margin: "-40px", once: "true" }}
                >
                  <div className='basics_investing_card_icon'><FaCoins/></div>
                  <p>
                    Trading accounts are held by our
                    partners, a firm duly registered by
                    the Securities and Exchange
                    Commission worldwide.
                  </p>
                  <p>
                    SIPC Insured Your US stocks
                    portfolio is insured by the United
                    States SIPC up to $500,000.
                    StartInvesting.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="section3-Home">
            <div className="section3-Home-Header">
              <h4>OUR INVESTMENT PLANS</h4>
              <motion.h1
                initial={{
                  opacity: 0,
                  x: 100,
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
                INVESTMENT SOLUTIONS
              </motion.h1>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                y: 300,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
                mass: 1.5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ margin: "-40px", once: true }}
              className="section3-Home-mainContainer"
            >
              <CardPlan />
            </motion.div>
          </div>
          <div className="section4_Home">
            <motion.div
              className="section4-Home-MainContainer"
              initial={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
                mass: 1.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ margin: "-40px", once: "true" }}
            >
              <h1>Independent private digital investment group</h1>
                <p>
                  We identify and realise untapped potential and build on our
                  collective learnings while pursuing fact-based methods to secure
                  and document our value creation
                </p>
                <div className="section4-Home-button">
                  <button onClick={()=>navigate("/about")}>ABOUT US</button>
                </div>
            </motion.div>
            <motion.div 
              className="section4-home-imgContainer"
              initial={{
                opacity: 0,
                x: 50,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
                mass: 1.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ margin: "-40px", once: "true" }}
            >
              <img src={ImgHomeSec4} alt="" />
            </motion.div>
          </div>
        </div>
    </>
  );
};

export default Home;

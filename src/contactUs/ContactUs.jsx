import React from "react";
import "./ContactUs.css"
import classes from "./ContactUs.module.css";
import { BiSupport } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaRegComments } from "react-icons/fa";



function ContactUs() {
  return (
    <div className="contact_us_body">
      <section className="contact_us_section1_container">
        <p>Contact</p>
        <h1>Contact Us For support</h1>
      </section>
      <section className="contact_us_section2_container">
        <div className='contact_us_section2_top'>
          <div className="basics_of_investing_container_top_text">
            <h1>Anytime Support from our team</h1>
            <p>We're constantly improving our trading platform, trying to make it the best on the market.</p>
          </div>
          <button>Get Support</button>
        </div>
        <div className='contact_us_section2_bottom'>
          <div className="support_card_container">
            <div className="support_card_icon"><BiSupport className="support_icon" /></div>
            <p>Call Help center</p>
          </div>
          <div className="support_card_container">
            <div className="support_card_icon"><IoDocumentTextOutline className="support_icon" /></div>
            <p>Call Help center</p>
          </div>
          <div className="support_card_container">
            <div className="support_card_icon"><HiOutlineBookOpen className="support_icon" /></div>
            <p>Call Help center</p>
          </div>
          <div className="support_card_container">
            <div className="support_card_icon"><FaRegComments className="support_icon" /></div>
            <p>Call Help center</p>
          </div>
        </div>
      </section>
      {/* <div className={classes.contactDetailsContainer}>
        <h1 className={classes.contactH1}>
          <span className={classes.contactSpan}>Get in Touch,</span>
          <br />
          We're here to assist you whenever you need.
        </h1>
        <div className={classes.contactIconContainer}>
          <div className={classes.second}>
            <MdOutlineEmail className={classes.contactIcon1} />
          </div>
        </div>
        <FaUsers className={classes.contactIcon2} />
      </div>

      <div className={classes.contactSection2}>
        <h2 className={classes.contactSection2H2}>
          Reach out to our dedicated team via email.
        </h2>
        <div className={classes.contactGeneralContainer}>
          <div className={classes.contactSubContainer}>
            <RiChat1Line className={classes.genIcon} />
            <h3 className={classes.genH3}>General</h3>
            <div className={classes.contactBtnContainer}>
              <a href="mailto:info@citadel">
                <button className={classes.contactBtn}>Let's Talk</button>
              </a>
            </div>
          </div>

          <div className={classes.contactSubContainer}>
            <FaUsers className={classes.genIcon} />
            <h3 className={classes.genH3}>Patnership</h3>
            <div className={classes.contactBtnContainer}>
              <a href="mailto:info@citadel">
                <button className={classes.contactBtn}>Let's Talk</button>
              </a>
            </div>
          </div>

          <div className={classes.contactSubContainer}>
            <GrCompliance className={classes.genIcon} />
            <h3 className={classes.genH3}>Complain</h3>
            <div className={classes.contactBtnContainer}>
              <a href="mailto:info@citadel">
                <button className={classes.contactBtn}>Let's Talk</button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ContactUs;

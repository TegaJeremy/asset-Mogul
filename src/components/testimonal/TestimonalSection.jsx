// TestimonialSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./TestimonialSection.module.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const testimonials = [
  {
    name: "John Smith",
    role: "CEO at CompanyX",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "The investment strategy recommended by this firm has consistently delivered outstanding returns. I feel secure knowing my portfolio is in good hands.",
  },
  {
    name: "Jane Grace",
    role: "Financial Analyst",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "They took the time to understand my financial goals and provided tailored advice. Their attention to detail and market insights have been invaluable.",
  },
  {
    name: "Samuel Green",
    role: "Lead Investor",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "Thanks to their expert guidance, my portfolio has grown steadily over the past few years. I appreciate their transparency, dedication and always available to answer my questions.",
  },
  {
    name: "Linda Brown",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "Their approach to managing risk while seizing growth opportunities has been a game-changer for my investments. I couldn’t be happier with the results.",
  },
  {
    name: "Michael Lee",
    role: "Investor",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "They have an impressive understanding of the market and helped me diversify my portfolio effectively. I’ve seen significant growth in my investments.",
  },
  {
    name: "Emily Clark",
    role: "Wealth Manager",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    quote:
      "Their advice has not only grown my investments but has also helped me build a long-term strategy for financial independence. I highly recommend their services.",
  },
  {
    name: "Robert King",
    role: "Retired Investor",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "After years of managing my own investments, I trusted them with my portfolio, and I haven’t looked back since. Their team is knowledgeable and professional.",
  },
  {
    name: "Sophia Martin",
    role: "Real Estate Investor",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "Their holistic approach to investment planning has been incredible. I now have a balanced portfolio with real estate and stocks that consistently performs well.",
  },
];

const TestimonialSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>What Our Customers say</h2>
      <h3 className={styles.h3}>Testimonals</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className={styles.photo}
              />
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <p className={styles.name}>{testimonial.name}</p>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;

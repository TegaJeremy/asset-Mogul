// import React from "react";
// import { useEffect, useState } from "react";
// import "./SlideShow.css";
// import { AnimatePresence, motion } from "framer-motion";

// function SlideShow({ showDetail, showSpan, showPrimaryHeader, index, shows }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex < shows.length - 1 ? prevIndex + 1 : 0
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -50,
//         }}
//         animate={{
//           opacity: 1,
//           y: 1,
//         }}
//         exit={{
//           opacity: 0.5,
//           y: -50,
//         }}
//         transition={{
//           duration: 4,
//           staggerChildren: 1,
//         }}
//         className={
//           index === currentImageIndex
//             ? "slideshow slideshow-active"
//             : "slideshow"
//         }
//       >
//         <motion.h1
//           initial={{
//             opacity: 0,
//             x: -50,
//           }}
//           animate={{
//             opacity: 1,
//             y: 1,
//           }}
//           exit={{
//             opacity: 0.5,
//             x: -50,
//           }}
//           transition={{
//             duration: 2,
//             staggerChildren: 1,
//           }}
//           className="slideshow-primary-header"
//         >
//           {showPrimaryHeader}
//         </motion.h1>

//         <motion.p className="slideshow-details ">{showDetail}</motion.p>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default SlideShow;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SlideShow.css";

import { AnimatePresence, motion } from "framer-motion";

function SlideShow({ showDetail, showSpan, showPrimaryHeader, index, shows }) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < shows.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [shows.length]);

  return (
    <AnimatePresence>
      {index === currentImageIndex && (
        <motion.div
          key={index} // Ensure a unique key for the current slideshow
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }} // Faster animation for smooth transitions
          className="slideshow slideshow-active"
        >
          <div>
            <h1
              // initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0 }}
              // exit={{ opacity: 0, x: -50 }}
              className="slideshow-primary-header"
            >
              {showPrimaryHeader}
            </h1>

            <p
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              className="slideshow-details"
            >
              {showDetail}
            </p>
          </div>
          <div>
            <button
              className="slideshow-btn"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SlideShow;

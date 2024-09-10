import React, { useEffect, useState } from "react";
import './ProgressBar.css';
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const { id } = useSelector((state) => state.BTC.user);
//   const [loading, setLoading] = useState(false);

  const getAllUsers = ()=>{

    fetch(`https://asset-mogul-back.onrender.com/getUserStatusBar/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => setProgress(data.statusBar))
        .catch(error => console.error('Error:', error));

    }


    const checkProgress = ()=>{
        if(progress >= 100){
            setProgress(0);
        }
    }


useEffect(()=>{
    getAllUsers()
},[])

//   const startLoading = () => {
//     setLoading(true);
//     setProgress(0); // Reset progress to 0 before starting
    
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           clearInterval(interval); // Stop the interval when progress reaches 100%
//           setLoading(false); // Stop loading
//           return 100; // Ensure it stays at 100
//         }
//         return prevProgress + 2; // Increment progress by 2%
//       });
//     }, 1000); // Adjust timing for speed
//   };

  return (
    <div className="progress_bar_body">
        <div className="trading_progress_container">
            <p>Trading in Progress...</p>
            <div className="progress-container">
                <p>{progress}%</p>
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        </div>
        {/* <button onClick={startLoading} disabled={loading}>
            {loading ? "Processing..." : "Make Deposit"}
        </button> */}
    </div>
  );
};

export default ProgressBar;

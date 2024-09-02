import React, { useEffect, useRef } from 'react';
import './TradingViewWidget.css';

const CryptoNews = () => {
    const widgetContainerRef = useRef(null);
    const scriptAppendedRef = useRef(false); // Ref to track if the script has been appended

  useEffect(() => {
    if (widgetContainerRef.current && !scriptAppendedRef.current) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "Adaptive",
        width: "100%",
        height: "100%",
        colorTheme: "light",
        locale: "en",
        defaultColumn:"overview","market":"crypto","screener_type":"crypto_mkt","displayCurrency":"USD",
    });

    widgetContainerRef.current.appendChild(script)
    console.log('TradingView script appended');
      scriptAppendedRef.current = true; // Mark the script as appended

      return () => {
        if (widgetContainerRef.current && widgetContainerRef.current.contains(script)) {
          widgetContainerRef.current.removeChild(script);
          scriptAppendedRef.current = false; // Reset the ref when the component unmounts
        }
      };
    } else {
      console.error('Container for TradingView widget not found or script already appended');
    }

  }, []);

  return (
    <div className="tradingview-widget-container">
      <div 
        className="tradingview-widget-container__widget"
        ref={widgetContainerRef}
        >

      </div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span>Daily crypto news</span> By TradingView</a>
      </div>
    </div>
  );
};

export default CryptoNews;

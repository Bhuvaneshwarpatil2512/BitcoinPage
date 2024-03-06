import React, { useEffect, useRef, memo } from 'react';

function Shibu() {
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
                "autosize": true,
                "symbol": "BINANCE:SHIBUSDT",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "calendar": false,
                "support_host": "https://www.tradingview.com"
            }`;
  
            const containerNode = container.current;
            containerNode.innerHTML = ''; // Clear container before appending script
            containerNode.appendChild(script);
    
            return () => {
              container.current.removeChild(script);
        };
    }, []); // Empty dependency array ensures effect runs only once on component mount
  
    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            </div>
    );
  }
export default memo(Shibu)

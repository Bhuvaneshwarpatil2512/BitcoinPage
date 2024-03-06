import { useState, useEffect } from 'react';
import axios from 'axios';

function Discription() {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'bitcoin',
              vs_currencies: 'inr,usd',
              include_24hr_change: true,
              include_market_cap: true,
              include_24hr_vol: true, // Include 24-hour volume data
              include_last_updated_at: true,
            },
            headers: {
              'Content-Type': 'application/json',
              'X-CoinGecko-Token': 'CG-g3uaqq6NL5yE464qdyfNdSeB' // Your API key here
            }
          }
        );
        setBitcoinData(response.data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
    const intervalId = setInterval(fetchBitcoinData, 10000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <>
      <div className="container mx-auto mt-10 pl-2 pr-2">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h5 className="text-xl font-semibold flex items-center">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029" alt="Bitcoin Logo" className="h-8 w-8 mr-2" /> {/* Adjust height and width as needed */}
            Bitcoin Info
          </h5>
          {bitcoinData && (
            <div className='p-2'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ color: 'black', fontWeight: '' }}>Market Cap: ${bitcoinData.usd_market_cap}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className=""style={{ color:"black", fontWeight: '' }}>Last Updated: {new Date(bitcoinData.last_updated_at * 1000).toLocaleString()}</p>          
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Discription;

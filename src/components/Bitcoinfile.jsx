import { useState, useEffect } from 'react';
import axios from 'axios';
import TradingViewWidget from './TradingViewWidget';
import InputesComp from './InputesComp';
import Discription from './Discription';
import AboutBitcoin from './AboutBitcoin';
import BitcoinTable from './BitcoinTable';


function Bitcoinfile() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [color, setColor] = useState('black');

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(

          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'bitcoin',
              vs_currencies: 'inr,usd',
              include_24hr_change: true
            },
            headers: {
              'Content-Type': 'application/json',
              'X-CoinGecko-Token': 'CG-g3uaqq6NL5yE464qdyfNdSeB' // Your API key here
            }
          }
        );
        const currentData = response.data.bitcoin;

        if(previousValue !== null){
          const usdChange = currentData.include_24h_change;
          setColor(usdChange > 0 ? 'green' : 'red');
        }
        setBitcoinData(response.data.bitcoin);
        setPreviousValue(currentData.usd_24h_change);

      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
    const intervalId = setInterval(fetchBitcoinData, 20000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [previousValue]); // Empty dependency array ensures the effect runs only once on component mount

  return (
   <>
    <div className="container mx-auto mt-10 pl-2 pr-2">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold flex items-center">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029" alt="Bitcoin Logo" className="h-8 w-8 mr-2" /> {/* Adjust height and width as needed */}
          Bitcoin 
        </h2>
        {bitcoinData && (
        <div className='p-2'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Price in USD: ${bitcoinData.usd}</p>
            <p style={{ color, fontWeight: 'lighter' }}>{bitcoinData.usd_24h_change}%</p>
          </div>
          <p>₹{bitcoinData.inr} </p>
        </div>
      )}
        <TradingViewWidget/>
      </div>
    </div>
    <div className='pt-2'>
        <InputesComp/>
    </div>
    <div className='pt-2'>
        <Discription/>
     </div>
    <div className='pt-2'>
        <AboutBitcoin/>
    </div>
    <div className='pt-2'>
        <BitcoinTable/>
    </div>

   </>
  );
}

export default Bitcoinfile;

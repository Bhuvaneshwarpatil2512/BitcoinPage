import React, { useEffect, useState } from 'react';
import Adv from './Ncrypto/Adv';
import Avax from './Ncrypto/Avax';
import Bnb from './Ncrypto/Bnb';
import BTC from './Ncrypto/BTC';
import Cfg from './Ncrypto/Cfg';
import Ethereum from './Ncrypto/Ethereum';
import Sol from './Ncrypto/Sol';
import Shibu from './Ncrypto/Shibu';
import Uni from './Ncrypto/Uni';
import Xrp from './Ncrypto/Xrp';

function BitcoinTable() {
  const [graphHeight, setGraphHeight] = useState('200px'); // Initial height

  useEffect(() => {
    function handleResize() {
      const newHeight = window.innerWidth >= 768 ? '400px' : '200px'; // Adjust height based on screen size
      setGraphHeight(newHeight);
    }

    // Set initial height
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="container mx-auto mt-10 pl-2 pr-2">
      <div className="flex flex-column alignitems:center bg-gray-200 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            Coins 
          </h2>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="w-1/4 px-2">
            <table className="table-auto items-center ">
              <thead>
                <tr>
                  <th className="border px-4 py-2">1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2"><Adv/></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"><Avax/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/4 px-2">
            <table className="table-auto items-center ">
              <thead>
                <tr>
                  <th className="border px-4 py-2">2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2"><Ethereum/></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"><Sol/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/4 px-2">
            <table className="table-auto items-center ">
              <thead>
                <tr>
                  <th className="border px-4 py-2">3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2"><Bnb/></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"><BTC/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/4 px-2">
            <table className="table-auto items-center ">
              <thead>
                <tr>
                  <th className="border px-4 py-2">4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2"><Uni/></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"><Xrp/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/4 px-2">
          </div>
        </div>
      </div>
    </div>
  );
}

export default BitcoinTable;

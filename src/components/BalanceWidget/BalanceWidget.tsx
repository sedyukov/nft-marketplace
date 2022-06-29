import React from 'react';
import ethereum from '../Sidebar/img/ethereum.svg';
import plus from './img/plus-button.svg';
import arrow from './img/arrow-right.svg';

function BalanceWidget() {
  return (
    <div className="w-[228px] h-[220px] bg-balance-widget flex flex-col items-center px-4">
      <div className="font-medium text-sm text-your-balance mt-8">Your balance</div>
      <div className="text-white text-2xl font-bold mt-1">1,034.02</div>
      <div className="text-white font-medium text-sm mt-2">
        <img className="inline mr-2" src={ethereum} alt="ethereum" />
        <span>ETH</span>
      </div>
      <button type="submit" className="bg-white w-full h-12 rounded-xl flex items-center justify-between px-4 mt-5">
        <div className="bg-active-menu w-6 h-6 rounded-full font-bold flex items-center justify-center">
          <img src={plus} alt="plus" />
        </div>
        <span className="text-sm">Top Up Balance</span>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default BalanceWidget;

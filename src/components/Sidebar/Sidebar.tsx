import React from 'react';
import logo from './img/logo.svg';
import lightMode from './img/lightmode.svg';
import dashboard from './img/mainMenu/dashboard.svg';
import market from './img/mainMenu/market.svg';
import bids from './img/mainMenu/bids.svg';
import dashboardActive from './img/mainMenu/dashboard-active.svg';
import marketActive from './img/mainMenu/market-active.svg';
import bidsActive from './img/mainMenu/bids-active.svg';
import favourites from './img/profile/favourites.svg';
import history from './img/profile/history.svg';
import portfolio from './img/profile/portfolio.svg';
import settings from './img/profile/settings.svg';
import wallet from './img/profile/wallet.svg';
import favouritesActive from './img/profile/favourites-active.svg';
import historyActive from './img/profile/history-active.svg';
import portfolioActive from './img/profile/portfolio-active.svg';
import settingsActive from './img/profile/settings-active.svg';
import walletActive from './img/profile/wallet-active.svg';

function Sidebar(): JSX.Element {
  const activeItem = 'Dashboard';
  const mainMenu = [{
    title: 'Dashboard',
    img: dashboard,
    imgActive: dashboardActive,
  }, {
    title: 'Market',
    img: market,
    imgActive: marketActive,
  }, {
    title: 'Active Bids',
    img: bids,
    imgActive: bidsActive,
  }];
  const profileMenu = [{
    title: 'My Portfolio',
    img: portfolio,
    imgActive: portfolioActive,
  }, {
    title: 'Wallet',
    img: wallet,
    imgActive: walletActive,
  }, {
    title: 'Favourites',
    img: favourites,
    imgActive: favouritesActive,
  }, {
    title: 'History',
    img: history,
    imgActive: historyActive,
  }, {
    title: 'Settings',
    img: settings,
    imgActive: settingsActive,
  }];
  const otherMenu = [{
    title: 'Light Mode',
    img: lightMode,
    imgActive: dashboardActive,
  }];
  return (
    <div className="flex flex-col pl-8 pt-8">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="mt-12">
        <ul className="font-medium text-base">
          {mainMenu.map((el) => (
            activeItem !== el.title
              ? (
                <li className="mb-6 text-gray-menu">
                  <img src={el.img} alt="dashboard" className="inline mr-5" />
                  <span>{el.title}</span>
                </li>
              ) : (
                <li className="mb-6 text-active-menu">
                  <img src={el.imgActive} alt="dashboard" className="inline mr-5" />
                  <span>{el.title}</span>
                </li>
              )
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <div className="font-bold text-sm tracking-wider mb-6">{'Profile'.toUpperCase()}</div>
        <ul className="font-medium text-base">
          {profileMenu.map((el) => (
            activeItem !== el.title
              ? (
                <li className="mb-6 text-gray-menu">
                  <img src={el.img} alt="dashboard" className="inline mr-5" />
                  <span>{el.title}</span>
                </li>
              ) : (
                <li className="mb-6 text-active-menu">
                  <img src={el.imgActive} alt="dashboard" className="inline mr-5" />
                  <span>{el.title}</span>
                </li>
              )
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <div className="font-bold text-sm tracking-wider mb-6">{'Other'.toUpperCase()}</div>
        <ul className="font-medium text-base">
          {otherMenu.map((el) => (
            activeItem !== el.title
              ? (
                <li className="mb-6 text-gray-menu">
                  <img src={el.img} alt="dashboard" className="inline mr-5" />
                  <span>{el.title}</span>
                </li>
              ) : (
                <li className="mb-6 text-active-menu">
                  <img src={el.imgActive} alt="dashboard" className="inline mr-5" />
                  <span>{el.title}</span>
                </li>
              )
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

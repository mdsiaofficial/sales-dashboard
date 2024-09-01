import React from 'react'
import './Overview.css'
import Navigation from '../components/navigation/Navigation'
import circle from '../assets/circle.svg'
import notificationIcon from '../assets/notificationIcon.svg'
import searchIcon from '../assets/searchIcon.svg'
import Profile from '../components/profile/Profile'
import SalesFigure from '../components/salesFigure/SalesFigure'
import RecentOrders from '../components/recentOrders/RecentOrders'
import PopularProduct from '../components/popularProduct/PopularProduct'
import OverviewCard from '../components/overViewCard/OverViewCard'

const Overview = () => {
  return (
    <div className='Overview'>
      <Navigation />
      <div className="container">
        <div className="overview-section">
          <h1 className="overview-title">Overview</h1>
          <span className="overview-date">24th November 2021</span>
        </div>
        <div className="search-section">
          <img src={searchIcon} alt="Search Icon" className="icon search-icon" />
          <input type="text" className='search-box' placeholder='Search something'/>
        </div>
        <div className="notification-section">
          <img src={notificationIcon} alt="Notification Icon" className="icon notification-icon" />
          <img src={circle} alt="User Icon" className="icon user-icon" />
        </div>
      </div>
      <OverviewCard />
      <Profile />
      <SalesFigure />
      <RecentOrders />
      <PopularProduct />
      
    </div>
  )
}

export default Overview

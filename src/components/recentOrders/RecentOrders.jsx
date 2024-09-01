import React from 'react'
import './RecentOrders.css'
import fan from '../../assets/fan.svg'
import headphone from '../../assets/headphone.svg'
import cup from '../../assets/cup.svg'
import laptop from '../../assets/laptop.svg'
import radio from '../../assets/radio.svg'
import tshirt from '../../assets/tshirt.svg'
import more from '../../assets/more.svg'


const RecentOrders = () => {
  const orders = [
    {
      icon: fan,
      name: 'Fan Supertop wings',
      price: '$60,00',
    },
    {
      icon: headphone,
      name: 'Headset asyiek',
      price: '$40,10',
    },
    {
      icon: cup,
      name: 'Cup And Glass',
      price: '$52,10',
    },
    {
      icon: laptop,
      name: 'Lepi oh Lepi',
      price: '$90,00',
    },
    {
      icon: radio,
      name: 'Radio Active',
      price: '$85,00',
    },
    {
      icon: tshirt,
      name: 'Green Thsirt',
      price: '$20,10',
    },
  ];

  return (
    <div className="recent-orders">
      
      <h2 className="title">Recent Orders</h2>
      <img src={more} alt="More Icon" className="more-icon" />
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="order-item">
            <img src={order.icon} alt={order.name} className="order-icon" />
            <span className="order-name">{order.name}</span>
            <span className="order-price">{order.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders

import React from 'react'
import './OverviewCard.css'


const OverviewCard = () => {
  const cardsData = [
    {
      title: 'Sales',
      amount: '$46,721.00',
      comparison: 'Compared to $14,120.00',

    },
    {
      title: 'Purchase',
      amount: '$40,701.00',
      comparison: 'Compared to $19,100.00',

    },
    {
      title: 'Return',
      amount: '$36,841.00',
      comparison: 'Compared to $10,40.00',

    },
    {
      title: 'Marketing',
      amount: '$29,371.00',
      comparison: 'Compared to $17,20.00',

    },
  ];

  return (
    <div className="over-card">
      <div className="statistics-cards">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-amount">{card.amount}</p>
              <p className="card-comparison">{card.comparison}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewCard

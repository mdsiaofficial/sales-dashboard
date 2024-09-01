import React from 'react';
import './SalesFigure.css';
import casesIcon from '../../assets/ellipse-153.svg';
import marketingIcon from '../../assets/ellipse-106.svg';
// import chartBG from '../../assets/rectangle-844.svg';
// import monthlyButtonBG from '../../assets/rectangle-858.svg';

import janBar from '../../assets/group-2256.svg';
import febBar from '../../assets/group-2257.svg';
import marBar from '../../assets/group-2258.svg';
import aprBar from '../../assets/group-2259.svg';
import mayBar from '../../assets/group-2260.svg';
import junBar from '../../assets/group-2261.svg';
import julBar from '../../assets/group-2262.svg';
import augBar from '../../assets/group-2263.svg';
import sepBar from '../../assets/group-2264.svg';
import octBar from '../../assets/group-2265.svg';
import novBar from '../../assets/group-2266.svg';
import decBar from '../../assets/group-2267.svg';

const SalesFigure = () => {
  return (
    <div>
      <div className="sales-chart">
        {/* <img src={chartBG} alt="Background" className="chart-bg" /> */}
        <div className="sales-chart-content">
          <div className="chart-nav">

            <h2 className="sales-title">Sales Figure</h2>
            <div className="legend">
              <div className="legend-item">
                <img src={marketingIcon} alt="Marketing Sales Icon" />
                <span className="legend-text">Marketing Sales</span>
              </div>
              <div className="legend-item">
                <img src={casesIcon} alt="Cases Sales Icon" />
                <span className="legend-text">Cases Sales</span>
              </div>
            </div>
            <button className="view-toggle">
              Monthly
            </button>
          </div>
          <div className="chart">
            <div className="labels">
              <span>100K</span>
              <span>80K</span>
              <span>60K</span>
              <span>40K</span>
              <span>0</span>
            </div>
            <div className="bars">

              <div className="bar-group">
                <img src={janBar} alt="January Bar" />
                <span className="month">Jan</span>
              </div>
              <div className="bar-group">
                <img src={febBar} alt="February Bar" />
                <span className="month">Feb</span>
              </div>
              <div className="bar-group">
                <img src={marBar} alt="March Bar" />
                <span className="month">Mar</span>
              </div>
              <div className="bar-group">
                <img src={aprBar} alt="April Bar" />
                <span className="month">Apr</span>
              </div>
              <div className="bar-group">
                <img src={mayBar} alt="May Bar" />
                <span className="month">May</span>
              </div>
              <div className="bar-group">
                <img src={junBar} alt="June Bar" />
                <span className="month">Jun</span>
              </div>
              <div className="bar-group">
                <img src={julBar} alt="July Bar" />
                <span className="month">Jul</span>
              </div>
              <div className="bar-group">
                <img src={augBar} alt="August Bar" />
                <span className="month">Aug</span>
              </div>
              <div className="bar-group">
                <img src={sepBar} alt="September Bar" />
                <span className="month">Sep</span>
              </div>
              <div className="bar-group">
                <img src={octBar} alt="October Bar" />
                <span className="month">Oct</span>
              </div>
              <div className="bar-group">
                <img src={novBar} alt="November Bar" />
                <span className="month">Nov</span>
              </div>
              <div className="bar-group">
                <img src={decBar} alt="December Bar" />
                <span className="month">Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesFigure

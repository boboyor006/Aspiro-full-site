import React from 'react'
import RevenueList from '../components/revenue-list/RevenueList';
import Charts from './Charts';
import "./css/stats.css"




function Stats() {
    


    


  return (
    <div>
        <Charts className='Chartss'/>
        <br />
        <br />
        <RevenueList/>
        
    </div>
  )
}

export default Stats;
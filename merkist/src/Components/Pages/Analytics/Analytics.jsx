import React from 'react'
//imported style css
import './analytics.css'

//import in components
import Social from './Social/Social';
import Employees from './Employees/Employees';
import Campaigns from './Campaigns/Campaigns';
import Autodaterange from './Autodaterange/Autodaterange';
// import Leads from './Leads/Leads';
import Leads from './Leads/Leads';
import Allbrand from './Allbrand/Allbrand';
import Activestatus from './Activestatus/Activestatus';
import Payments from './Payments/Payments';

const Analystics = () => {
  return (
    <>
      <div className='full-card'>
        <div class="grid-container">
          <div class="grid-item-1 item1 p-0"><Social/></div>
          <div class="grid-item-1 item2"><Employees/></div>
          <div class="grid-item-1 item3 p-0"><Campaigns /></div>
          <div class="grid-item-1 item4 p-0"><Autodaterange /></div>
          <div class="grid-item-1 item5 "><Leads/></div>
          <div class="grid-item-1 item6"><Allbrand /></div>
          <div class="grid-item-1 item7 p-0"><Activestatus /></div>
          <div class="grid-item-1 item8 p-0"><Payments /></div>
        </div>
      </div>


    </>
  )
}

export default Analystics
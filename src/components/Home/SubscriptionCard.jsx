import React, { useState } from 'react'

//Data of subscriptions we have
import data from '../../subscriptionData.json'

//Home Component
import SelectSubscription from './SelectSubscription' //Used to rendering our divs i.e. our cards of subscriptions


function SubscriptionCard() {
  const [selected, setSelected] = useState(-1); //Selecting the data of subscription when click

  const chooseSubscription = (id) => setSelected(id);  //onclick when users choose the subscription 



  return (
    <>
      <div className="card mx-auto" style={{ width: "100%" }}>

        {/* Subscription Cards Headings */}
        <div className='flex justify-content-around my-3'>
          <div className='flex flex-column'>
            <div className='border border-dark rounded-circle' style={{ backgroundColor: "#0096FF" }}> <span className="px-2 py-1 text-light">1</span> </div>
            <p>SignUp</p>
          </div>

          <div className='flex flex-column'>
            <div className='border border-dark rounded-circle' style={{ backgroundColor: "#0096FF" }}> <span className="px-2 py-1 text-light">2</span></div>
            <p>Subscription</p>
          </div>
        </div>

        <h4 className="f-1 p-2 text-center">Select Your Subscription Plan</h4>


        {/* Here all the subscription details, what we provide  */}
        <div className='container mx-auto  my-1'>

          {data.map((item) => {
            return <SelectSubscription key={item.id} tag={item.tag} months={item.month} total={item.total} mon={item.mon} id={item.id} chooseSubscription={chooseSubscription} isSelected={item.id === selected} />
          })}

        </div>

        <hr />

        {/* Subscription payment info  */}
        <div className="d-flex  flex-column">

          <div className="flex justify-content-around my-1 ">
            <h6 className="f-1">Subscription Fee: </h6>
            <p><strong>&#x20B9; 18,900</strong></p>
          </div>

          <div className="d-flex align-items-center justify-content-around my-1 ">
            <h6 className="f-1">Your Subscription Payment: </h6>
            <p><strong>- &#x20B9; {selected != -1 ? data.map((item) => {
              if (item.id === selected) {
                return item.total * 12
              }
            }) : 0}  </strong></p>
          </div>

          <div className="d-flex align-items-center justify-content-around my-1 ">
            <h6 className="f-1">Total(incl. 18% GST) </h6>
            <p><strong>&#x20B9; {selected != -1 ? data.map((item) => {
              if (item.id === selected) {
                return 18900 - item.total * 12
              }
            }) : 0}</strong></p>
          </div>

          {/* Buttons to Processed or exit the payments  */}
          <div className="flex justify-content-around my-1 ">
            <button className="btn btn-outline-danger px-3 py-2" onClick={() => setSelected(-1)}>Cancel</button>

            {selected == -1 ? <button className="btn btn-success px-3 py-2" disabled>Processed To Pay</button> : 
            <button className="btn btn-success px-3 py-2" > Processed To Pay  </button> }
          </div>

        </div>
      </div>
    </>
  )
}

export default SubscriptionCard
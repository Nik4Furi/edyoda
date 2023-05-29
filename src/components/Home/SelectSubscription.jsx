import React from 'react'


function SelectSubscription({ isSelected, chooseSubscription, id, tag, months, total, mon}) {

  return (
    <>
      {/* Our card of denoting each subscription reference of the TAg  */}
      <div className={`card mx-auto p-1  ${isSelected ? 'selected' : ''} border border-success rounded-start p-1 position-relative my-3 ${tag == 'Offer Expired' ? 'disabled' : ''}`} id={`${tag == 'Offer Expired' ? '' : 'subscribeCard'}`}
        style={{ width: "80%", backgroundColor: isSelected ? "rgb(214 247 214)" : '', cursor: "pointer" }}
        onClick={() => tag == 'Offer Expired' ? '' : chooseSubscription(id)}  >

        {/* Special tag of subscription  */}
        {tag && <div className={`cardTop border border-dark rounded-pill bg-${tag == 'Recommended' ? 'success' : ''}${tag == 'Offer Expired' ? 'danger' : ''}`}><span>{tag}</span> </div>}

        {/* Our months prices of respective of subscription  */}
        <div className="flex justify-content-between p-1">

          <div className="flex me-2" >

            <div className="border border-dark rounded-pill position-relative me-1 " style={{ height: "34px", width: "34px" }} >
              {isSelected && <img src="/images/right-4.png" alt="right" className='right ' width={"35px"} />}
            </div> <span className=' f-1'>{months} Months Subscription</span>
          </div>

          <div className="flex flex-column justify-content-around p-1">
            <p>Total <strong>&#x20B9; {total}</strong></p>
            <p><strong>&#x20B9;  {mon}</strong> <span style={{ fontWeight: "90" }}> /mo</span></p>
          </div>

        </div>

      </div>
      
    </>
  )
}

export default SelectSubscription
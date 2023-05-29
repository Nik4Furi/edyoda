import React from 'react'

function RenderProfits({img, text}) {
  return (
    <>
      <div className="flex justify-content-start my-2">
        <div className='mx-3' ><img src={img} alt="Profits of subscriptions" className="img-fluid" style={{maxWidth : "34px"}}/>  </div>
        <h4>{text}</h4>
      </div>
    </>
  )
}

export default RenderProfits
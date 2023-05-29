import React from 'react'

import {Link} from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="container-fluid my-3 ">
        <div className="container mx-auto">
        <div className="flex justify-content-center flex-column">
            <img src="/images/error.webp" alt="error" className='w-75'/>

           <Link to="/" > <button className="btn btn-first">Go Home</button></Link>

        </div>
        </div>
      </div>
    </>
  )
}

export default Error

import React from 'react'

//Home Components 
import RenderProfits from '../components/Home/RenderProfits' //for rendering our profits related to subscriptions
import SubscriptionCard from '../components/Home/SubscriptionCard' //Our subscription card

function Home() {
    return (
        <>
            <section id="Home" className='main-bg'>
                <div className="container-fluid my-3">
                    <div className="row w-100 ">

                        {/* Left side: Our all subscription benefits related to the 99 year */}
                        <div className="col-lg-8 col-md-6 col-sm-12 order-10">
                            <div className="headingPara">
                                <h2>Access curated courses worth &#x20B9; <span style={{ textDecoration: "line-through", textDecorationColor: 'red' }}>18,500</span>  at just &<span className="text-highlight"> &#x20B9; 99 </span>per year!</h2>

                                {/* Component of rendering the profits related 99 year  */}
                                <div className="container my-2">

                                    <RenderProfits img={"/images/home/home-1.png"} text={<><span className="text-highlight">100+ </span> Job relevent courses</>} />

                                    <RenderProfits img={"/images/home/home-2.png"} text={<><span className="text-highlight">20,000+ </span> Hours of content</>} />

                                    <RenderProfits img={"/images/home/home-3.png"} text={<><span className="text-highlight">Exclusive </span> webinar access</>} />

                                    <RenderProfits img={"/images/home/home-4.png"} text={<>Scholarship worth <span className="text-highlight">&#x20B9; 94,500</span></>} />

                                    <RenderProfits img={"/images/home/home-5.png"} text={<><span className="text-highlight">Add Free </span> learning experience</>} />

                                </div>

                            </div>
                        </div>

                        {/* Right Side: Can select the subscription, what they want */}
                        <div className="col-lg-4 col-md-6 col-sm-7 my-3 order-3 mx-auto">
                            {/* Subscription card  */}
                            <SubscriptionCard />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home

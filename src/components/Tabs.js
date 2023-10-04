import './Tabs.css';
import React, { useState } from 'react';

function Tabs() {
    const [outerTabState, setOuterTabState] = useState(1);
    const [innerTabState, setInnerTabState] = useState(1);

    const outerTabAction = (index) => {
        setOuterTabState(index);
    };

    const innerTabAction = (index) => {
        setInnerTabState(index);
    };

    return (
        <div className="main">
            <div className="main-2">
                <div className="main-3">
                    <div className="box-2">
                        {/* Outer Tabs */}
                        <div className="tabs">
                            <div onClick={() => outerTabAction(1)} className={`tab ${outerTabState === 1 ? 'active-tab' : 'tab'}`}>Book a seat</div>
                            <div onClick={() => outerTabAction(2)} className={`tab ${outerTabState === 2 ? 'active-tab' : 'tab'}`}>Hire a bus</div>
                            <div onClick={() => outerTabAction(3)} className={`tab ${outerTabState === 3 ? 'active-tab' : 'tab'}`}>Booking status</div>
                        </div>

                        {/* Outer Content */}
                        <div className="contents">
                            <div className={`${outerTabState === 1 ? 'content active-content' : 'content '}`}>
                                {/* Inner Tabs for "Book a seat" */}
                                <div className="tabs-2 inner-tabs">
                                    <div onClick={() => innerTabAction(1)} className={`tab ${innerTabState === 1 ? 'active-tab' : 'tab'}`}>One Ride</div>
                                    <div onClick={() => innerTabAction(2)} className={`tab ${innerTabState === 2 ? 'active-tab' : 'tab'}`}>Round Trip</div>
                                    <div onClick={() => innerTabAction(2)} className={`tab ${innerTabState === 2 ? 'active-tab' : 'tab'}`}></div>
                                </div>

                                {/* Content for "One Ride" */}
                                {innerTabState === 1 && (
                                    <div className="inner-content">
                                        <div className="ride-1">
                                           <form action="">
                                                <label htmlFor="">Travelling From</label>
                                                
                                                <select name="" id="" placeholder='Departure Terminal'  required>
                                                    <option disabled value="Departure terminal">Departure Terminal</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia = Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =   Aba</option>
                                                </select>
                                               

                                                <label htmlFor="Travelling to">Travelling to</label>
                                                
                                                <input type="text" required placeholder='Arrival Terminal' />
                                                
                                                
                                                <label htmlFor="departure date">Departure date</label>
                                                
                                                <input type="date" required />
                                                
                                                
                                                <label htmlFor="Adults">Adults</label>
                                                
                                                <input type="number" required />
                                                
                                                
                                                <div className="ride-2">
                               <button>Proceed</button>
                               </div>
                                           </form>
                                        </div>
                                    </div>
                                )}

                                {/* Content for "Two Ride" */}
                                {innerTabState === 2 && (
                                    <div className="inner-content">
                                         <div className="ride-1">
                                           <form action="">
                                                <label htmlFor="">Travelling From</label>
                                                
                                                <select name="" id="" placeholder='Departure Terminal'  required>
                                                    <option disabled value="Departure terminal">Departure Terminal</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia = Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =  Aba</option>
                                                    <option value="">Abia =   Aba</option>
                                                </select>
                                                
                                                

                                                <label htmlFor="Travelling to">Travelling to</label>
                                                
                                                <input type="text" required placeholder='Arrival Terminal' />
                                                
                                                
                                                <label htmlFor="departure date">Departure date</label>
                                                
                                                <input type="date" required />
                                                
                                                
                                                <label htmlFor="Adults">Adults</label>
                                                
                                                <input type="number" required />
                                                
                                                
                                                <div className="ride-2">
                               <button>Proceed</button>
                               </div>
                                           </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={`${outerTabState === 2 ? 'content active-content' : 'content '}`}>
                                {/* Content for "Hire a bus" */}
                                <div className="tabs-2  inner-tabs">
                                    <div onClick={() => innerTabAction(1)} className={`tab ${innerTabState === 1 ? 'active-tab' : 'tab'}`}>One Way</div>
                                    <div onClick={() => innerTabAction(2)} className={`tab ${innerTabState === 2 ? 'active-tab' : 'tab'}`}>Round Trip</div>
                                    <div onClick={() => innerTabAction(2)} className={`tab ${innerTabState === 2 ? 'active-tab' : 'tab'}`}></div>
                                </div>
                                <div className="inner-content">
                                    {/* Input section for the selected option */}
                                    {innerTabState === 1 && (
                                        <div className="input-section">
  <div className="ride-1">
                                           <form action="">
                                                <label htmlFor="">Hire From</label>
                                                
                                                <input type="text" required placeholder='Enter departure point'/>
                                                
                                                

                                                <label htmlFor="hire-destination">Hire Destination</label>
                                                
                                                <input type="text" required placeholder='Enter Hire Destination' />
                                                
                                                
                                                <label htmlFor="departure date">Departure date</label>
                                                
                                                <input type="date" required />
                                                
                                                
                                                <div className="ride-2">
                               <button>Proceed</button>
                               </div>
                                           </form>
                                        </div>
                                        </div>
                                    )}
                                    {innerTabState === 2 && (
                                        <div className="input-section">
                                          <div className="ride-1">
                                          <form action="">
                                                <label htmlFor="">Hire From</label>
                                                
                                                <input type="text" required placeholder='Enter departure point'/>
                                                
                                                

                                                <label htmlFor="hire-destination">Hire Destination</label>
                                                
                                                <input type="text" required placeholder='Enter Hire Destination' />
                                                
                                                
                                                <label htmlFor="departure date">Departure date</label>
                                                
                                                <input type="date" required />
                                                
                                                

                                                <label htmlFor="return">Return</label>
                                                
                                                <input type="date" required placeholder='Return date' />
                                                
                                                
                                                <div className="ride-2">
                               <button>Proceed</button>
                               </div>
                                           </form>
                                          </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={`${outerTabState === 3 ? 'content active-content' : 'content '}`}>
                              <div className="ride-1">
                              <form action="">
                                <label htmlFor="CHeck">Check booking status</label>
                                
                                <input type="text" required placeholder='Enter Refernce Code'/>
                                
                               <div className="ride-2">
                               <button>Proceed</button>
                               </div>
                               </form>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;

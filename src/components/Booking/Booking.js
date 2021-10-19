import React from 'react';

const Booking = () => {
    return (
        <div>
            <div id="booking" className="section mt-5 mb-5">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-md-push-5">
                                <div className="booking-cta">
                                    <h1>Make your Booking</h1>
                                    <p>You can book now our consultant.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-md-pull-7">
                                <div className="booking-form">
                                    <form>
                                        <div className="form-group">

                                            <input className="form-control" type="text" placeholder="Enter a Doctor Name" />
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="date" required />
                                                </div>
                                            </div>

                                        </div>


                                        <div className="form-btn mt-3">
                                            <button className="btn btn-success">Check availability</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Booking;
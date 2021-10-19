import React from 'react';
import './Teams.css';
import doc1 from '../../images/dc-1.jpg';
import doc2 from '../../images/dc-2.jpg';
import doc3 from '../../images/dc-3.jpg';
import doc4 from '../../images/dc-4.jpg';
const Teams = () => {
    return (
        <div classNameName="mt-5" id="teams">
            <h2>Our Teams</h2>
            <p>
                We have a large amount of specialist doctors.
            </p>
            <section className="our-webcoderskull padding-lg mt-5">
                <div className="container">
                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure><img src={doc1} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Marrie Gomes</a></h3>
                                <p>Cardiologist</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure><img src={doc2} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Kappua James</a></h3>
                                <p>Laser Specialist</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure><img src={doc3} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Manisha Pandey </a></h3>
                                <p>Medicine Specialist</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure><img src={doc4} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Atuli Pandey </a></h3>
                                <p>Bone Specialist</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    );
};

export default Teams;